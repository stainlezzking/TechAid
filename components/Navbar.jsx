"use client"

import { useState } from "react";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Notification from "@/components/notification";
import notification from "@/public/notification.png";
import Profile from "@/public/profile-pic.png";
import { NAVBAR_TYPES, getUnreadCount } from "@/utils/messages";

const Navbar = function () {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const navbarType = NAVBAR_TYPES.MAIN;
  const unreadCount = getUnreadCount(navbarType);

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen); // Toggle notification visibility
  };
  return (
    <div className="flex items-center justify-between">
      <div>
        <Link href="/">
            < img height="50px" width="50px" src={Logo.src} alt="logo"/>
        </Link>
      </div>
        
      <div className="flex items-center justify-between gap-12">
        <div className="font-semibold">
          <Link href="/">
                Home
          </Link> 
        </div>

        <div className="font-semibold">
          <Link href="/news">
                News & Insights
          </Link> 
        </div>
        
        <div className="font-semibold">
          <Link href="/history">
                Support History
          </Link> 
        </div>

        <div>
          <button onClick={handleNotificationClick}>
            <img width="15px" src={notification.src} alt="notification"/>
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button> 

          <Notification
        isOpen={isNotificationOpen}
        setIsOpen={setIsNotificationOpen}
        navbarType={navbarType}
          />
        </div>
        
        <div>
          <Link href="/profile">
            <img className="rounded-full"  width="40px" src={Profile.src} alt="prof-pic"/>
          </Link>
        </div>
      </div>  
    </div>
  );
}

export default Navbar;