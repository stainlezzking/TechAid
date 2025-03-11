"use client";
import { SessionProvider } from "next-auth/react";
const NavbarSession = function ({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NavbarSession;
