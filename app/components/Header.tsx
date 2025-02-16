"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { logout } from "@/redux/authSlice";
import { toggleTheme } from "@/redux/themeSlice"; // 🔥 Redux téma kezelés
import { motion, useAnimation } from "framer-motion";
import { Logout, Sun, Moon } from "grommet-icons";

const Header = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch<AppDispatch>();
  const controls = useAnimation();

  useEffect(() => {
    // Alkalmazzuk a Redux store-ból származó témát
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
      className={`bg-background-light dark:bg-background-dark p-4 fixed w-full z-50 transition-all duration-500`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/" className="text-xl font-bold text-foreground-light dark:text-foreground-dark">
            Sportfogadás AI
          </Link>
        </motion.div>

        {/* Menü */}
        <div className="space-x-4 flex items-center">
          {user ? (
            <>
              <motion.span className="text-foreground-light dark:text-foreground-dark">
                Üdv, {user}!
              </motion.span>
              <motion.button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-md transition-all"
              >
                {theme === "dark" ? <Sun color="white" /> : <Moon color="black" />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => dispatch(logout())}
                className="text-white font-semibold bg-red-500 rounded-lg py-1 px-2 hover:bg-red-700 flex gap-2 items-center"
              >
                <p>Logout</p>
                <Logout color="white" />
              </motion.button>
            </>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.1 }}>
                <motion.button
                  onClick={() => dispatch(toggleTheme())}
                  className="p-2 rounded-md transition-all"
                >
                  {theme === "dark" ? <Sun color="white" /> : <Moon color="black" />}
                </motion.button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/auth/login" className="text-foreground-light dark:text-foreground-dark font-semibold hover:text-blue-500 border bg-inherit p-2 border-white rounded-lg">
                  Login
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/auth/register" passHref legacyBehavior>
                  <a>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-primary-light dark:bg-primary-dark text-white rounded-md px-2 py-1 font-semibold hover:bg-blue-900"
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
