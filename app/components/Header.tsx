"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/authSlice";
import { motion, useAnimation } from "framer-motion";

const Header = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        // Ha lefelé görgetünk és a pozíció > 50px → elhalványítás
        setHidden(true);
        controls.start({ opacity: 0, y: -50, transition: { duration: 0.6, ease: "easeOut" } });
      } else {
        // Ha felfelé görgetünk → visszahozás
        setHidden(false);
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY, controls]);

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
      className={`bg-transparent shadow-md p-4 fixed w-full z-50 transition-all duration-500 ${
        hidden ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/" className="text-xl font-bold">
            Sportfogadás AI
          </Link>
        </motion.div>

        {/* Menü */}
        <div className="space-x-4 flex items-center">
          {user ? (
            <>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white"
              >
                Üdv, {user}!
              </motion.span>
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 0, 0, 0.5)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => dispatch(logout())}
                className="text-white font-semibold bg-red-500 rounded-lg py-1 px-2 hover:bg-red-700"
              >
                Kijelentkezés
              </motion.button>
            </>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/auth/login" className="text-white font-semibold hover:text-blue-500 border bg-inherit p-2 border-white rounded-lg">
                  Login
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/auth/register" passHref legacyBehavior>
                  <a>
                    <motion.button
                      whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0, 0, 255, 0.5)" }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-blue-700 text-white rounded-md px-2 py-1 font-semibold hover:bg-blue-900"
                    >
                      Sign Up
                    </motion.button>
                  </a>
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
