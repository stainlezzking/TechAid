"use client";

import { signOut } from "next-auth/react";

const LogoutComp = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/auth/login" })} className="border border-borderActive hover:border-2 px-[38px] py-[12px] rounded-lg ">
      Logout
    </button>
  );
};

export default LogoutComp;
