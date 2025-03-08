"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Notification from "@/components/notification";
import notification from "@/public/notification.png";
import Profile from "@/public/profile-pic.png";
import { NAVBAR_TYPES, getUnreadCount } from "@/utils/messages";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import NavbarSkeleton from "./navbar-skeleton";

const Navbar = function () {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const pathname = usePathname();
  const navbarType = NAVBAR_TYPES.MAIN;
  const unreadCount = getUnreadCount(navbarType);

  const { data: session, status } = useSession();
  console.log("--- session from navbar---");
  console.log(session);

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen); // Toggle notification visibility
  };
  if (status == "loading" || status != "authenticated") {
    return <NavbarSkeleton />;
  }

  return (
    <div className="flex items-center justify-between p-2">
      <div>
        <Link href="/">
          <img height="50px" width="50px" src={Logo.src} alt="logo" />
        </Link>
      </div>

      <div className="flex items-center w-[35%] justify-between">
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

              <div className={pathname == "/support/history" ? "font-semibold" : ""}>
                <Link href="/news">Support History</Link>
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
            <button onClick={handleNotificationClick} className="relative block">
              <img width="15px" src={notification.src} alt="notification" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -left-1 bg-red-500 text-white text-[8px] rounded-full h-3 w-3 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            <Notification isOpen={isNotificationOpen} setIsOpen={setIsNotificationOpen} navbarType={navbarType} />
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
