"use client"

import { useState } from "react";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Notification from "@/components/notification";
import notification from "@/public/notification.png";
import Profile from "@/public/profile-pic.png";
import { NAVBAR_TYPES, getUnreadCount } from "@/utils/messages";

const TechNavbar = function () {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const navbarType = NAVBAR_TYPES.ADMIN;
  const unreadCount = getUnreadCount(navbarType);
  
    const handleNotificationClick = () => {
      setIsNotificationOpen(!isNotificationOpen); // Toggle notification visibility
    };
  return (
    <div className="flex items-center justify-between">
      <div>
        <Link href="/tech-support">
            < img height="50px" width="50px" src={Logo.src} alt="logo"/>
        </Link>
      </div>
        
      <div className="flex items-center justify-between gap-[28px]">
        <div className="font-semibold">
          <Link href="/tech-support">
                Home
          </Link> 
        </div>
        
        <div className="font-semibold">
          <Link href="/">
                My Support History
          </Link> 
        </div>

        <div className="font-semibold">
          <Link href="/">
                Reports and Performance
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
          <Link href="/tech-support/profile">
            <img className="rounded-full"  width="40px" src={Profile.src} alt="prof-pic"/>
          </Link>
        </div>
      </div>  
    </div>
  );
}

export default TechNavbar;