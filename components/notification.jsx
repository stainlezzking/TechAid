"use client";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { fetchGet } from "@/lib/server";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";

const Notification = function ({}) {
  const [noti, setNoti] = useState([]);

  useEffect(function () {
    const getMyNotifications = async function () {
      const response = await fetchGet("/not/mynotifications");
      if (response.unauthorized) {
        return signOut();
      }
      if (!response.success) {
        return toast.error(response.message);
      }
      setNoti(response.data);
      return;
    };
    getMyNotifications();
  }, []);
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button className="relative block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 19V17H6V10C6 8.61667 6.41667 7.39167 7.25 6.325C8.08333 5.24167 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6417 2.73333 10.925 2.45C11.225 2.15 11.5833 2 12 2C12.4167 2 12.7667 2.15 13.05 2.45C13.35 2.73333 13.5 3.08333 13.5 3.5V4.2C14.8333 4.53333 15.9167 5.24167 16.75 6.325C17.5833 7.39167 18 8.61667 18 10V17H20V19H4ZM12 22C11.45 22 10.975 21.8083 10.575 21.425C10.1917 21.025 10 20.55 10 20H14C14 20.55 13.8 21.025 13.4 21.425C13.0167 21.8083 12.55 22 12 22ZM8 17H16V10C16 8.9 15.6083 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95833 6.39167 9.175 7.175C8.39167 7.95833 8 8.9 8 10V17Z"
                fill="#1D1B20"
              />
            </svg>
            <span className="absolute top-0 left-0 bg-red-500 text-white text-[8px] rounded-full h-3 w-3 flex items-center justify-center">
              {noti.length}
            </span>
          </button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetTitle className="flex gap-x-2">
            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1.25C7.71983 1.25 4.25004 4.71979 4.25004 9V9.7041C4.25004 10.401 4.04375 11.0824 3.65717 11.6622L2.50856 13.3851C1.17547 15.3848 2.19318 18.1028 4.51177 18.7351C5.26738 18.9412 6.02937 19.1155 6.79578 19.2581L6.79768 19.2632C7.56667 21.3151 9.62198 22.75 12 22.75C14.378 22.75 16.4333 21.3151 17.2023 19.2632L17.2042 19.2581C17.9706 19.1155 18.7327 18.9412 19.4883 18.7351C21.8069 18.1028 22.8246 15.3848 21.4915 13.3851L20.3429 11.6622C19.9563 11.0824 19.75 10.401 19.75 9.7041V9C19.75 4.71979 16.2802 1.25 12 1.25ZM15.3764 19.537C13.1335 19.805 10.8664 19.8049 8.62349 19.5369C9.33444 20.5585 10.571 21.25 12 21.25C13.4289 21.25 14.6655 20.5585 15.3764 19.537ZM5.75004 9C5.75004 5.54822 8.54826 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9V9.7041C18.25 10.6972 18.544 11.668 19.0948 12.4943L20.2434 14.2172C21.0086 15.3649 20.4245 16.925 19.0936 17.288C14.4494 18.5546 9.5507 18.5546 4.90644 17.288C3.57561 16.925 2.99147 15.3649 3.75664 14.2172L4.90524 12.4943C5.45609 11.668 5.75004 10.6972 5.75004 9.7041V9Z"
                  fill="#1C274C"
                ></path>
              </g>
            </svg>
            <p> Notifications</p>
          </SheetTitle>
          <ul className="text-sm text-gray-700 pt-5 space-y-[17px]">
            {noti.map((alert) => (
              <li key={alert._id} className=" rounded-md pt-[15.5px] pb-[10px] pl-[26px] pr-[32px]  cursor-pointer hover:bg-gray-50  bg-blue-50">
                <div className="pb-[14.5px]">
                  <div>{alert.message}</div>
                </div>
                <div className="flex justify-between">
                  <a href={"/ticket/" + alert.ticketId} className="text-xs text-borderActive">
                    Go To Ticket
                  </a>
                  <div className="text-xs text-gray-500">{formatDistanceToNow(alert.createdAt, { addSuffix: true })}</div>
                </div>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>

      {/* {hasMessages ? (
          <ul className="text-sm text-gray-700">
            {notificationMessages.map((message) => (
              <li 
                key={message.id} 
                className={`mb-[17px] pt-[15.5px] pb-[10px] pl-[26px] pr-[32px] bg-[#EEEEEE] cursor-pointer hover:bg-gray-50 ${!message.read ? 'bg-blue-50' : ''} `}
                onClick={() => handleMessageClick(message.id)}
              >
                <div className="pb-[14.5px]">
                  <div>
                    {message.content}
                  </div>
                
                </div>

                <div className="flex justify-between">
                    <div className="text-xs text-borderActive">
                        {message.link}
                    </div>
                    <div className="text-xs text-gray-500">
                    {message.timestamp.toLocaleString()}
                    </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-gray-500">You have no notifications at this time.</p>
        )} */}
    </div>
  );
};

export default Notification;
