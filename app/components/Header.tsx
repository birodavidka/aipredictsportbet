"use client"

import React from 'react'
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/authSlice";

type Props = {}

const Header = (props: Props) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <nav className="bg-inherit shadow-md p-4 fixed w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Sportfogadás AI
        </Link>
        <div className="space-x-4">
          {user ? (
            <>
              <span className="text-gray-700">Üdv, {user}!</span>
              <button
                onClick={() => dispatch(logout())}
                className="text-red-500 hover:underline"
              >
                Kijelentkezés
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="text-gray-700 hover:text-blue-500">
                Bejelentkezés
              </Link>
              <Link href="/auth/register" className="text-gray-700 hover:text-blue-500">
                Regisztráció
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header