"use client";  // Ez biztosítja, hogy ez egy Client Component legyen

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <body className={`${theme === "dark" ? "bg-background-dark text-white" : "bg-background-light text-black"}`}>
      {children}
    </body>
  );
}
