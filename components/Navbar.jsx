"use client";

import Link from "next/link";
import Logo from "@/public/logo.png";
import Notification from "@/components/notification";
import Profile from "@/public/profile-pic.png";
import { usePathname } from "next/navigation";

const Navbar = function ({ session }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between p-2">
      <div>
        <Link href="/">
          <img height="50px" width="50px" src={Logo.src} alt="logo" />
        </Link>
      </div>

      <div className={`flex items-center ${session.user.role == "user" ? "w-[35%]" : "w-[45%]"} justify-between`}>
        <div className="flex justify-between grow w-full items-center me-5">
          {session.user.role == "user" && (
            <>
              <div className={pathname == "/" ? "font-semibold" : ""}>
                <Link href="/">Home</Link>
              </div>

              <div className={pathname == "/news" ? "font-semibold" : ""}>
                <Link href="/news">News & Insights</Link>
              </div>

              <div className={pathname == "/history" ? "font-semibold" : ""}>
                <Link href="/history">Support History</Link>
              </div>
            </>
          )}
          {session.user.role == "support" && (
            <>
              <div className={pathname == "/" ? "font-semibold" : ""}>
                <Link href="/">Home</Link>
              </div>

              <div className={pathname == "/history" ? "font-semibold" : ""}>
                <Link href="/history">My Support History</Link>
              </div>

              <div className={pathname == "/support/reports" ? "font-semibold" : ""}>
                <Link href="/history">Reports and Performance</Link>
              </div>
            </>
          )}
          {session.user.role == "admin" && (
            <>
              <div className={pathname == "/" ? "font-semibold" : ""}>
                <Link href="/">Home</Link>
              </div>

              <div className={pathname == "/admin/teams" ? "font-semibold" : ""}>
                <Link href="/news">Manage Teams</Link>
              </div>

              <div className={pathname == "/admin/reports" ? "font-semibold" : ""}>
                <Link href="/history">Support History</Link>
              </div>
              <div className={pathname == "/admin/reports" ? "font-semibold" : ""}>
                <Link href="/history">Reports and Performance</Link>
              </div>
            </>
          )}
        </div>
        <div className="space-x-8 flex items-center">
          <div>
            <Notification />
          </div>

          <div>
            <Link href="/profile">
              <img className="rounded-full" width="40px" src={Profile.src} alt="prof-pic" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
