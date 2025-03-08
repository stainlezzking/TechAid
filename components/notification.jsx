"use client"

import { useEffect, useRef } from "react";
import { getAllMessages, markAsRead, NAVBAR_TYPES } from "@/utils/messages";

const Notification = function({isOpen, setIsOpen, navbarType = NAVBAR_TYPES.MAIN}) {

  const popUpRef = useRef(null);

  // Close the notification when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popUpRef.current && !popUpRef.current.contains(e.target)) {
        setIsOpen(false); // Close the pop-up
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);
  if (!isOpen) return null; // Don't render anything if it's closed

  // Get messages for this navbar type - move this before using hasMessages
    const notificationMessages = getAllMessages(navbarType);
    const hasMessages = notificationMessages && notificationMessages.length > 0;
    
    const handleMessageClick = (id) => {
      markAsRead(navbarType, id);
      // Force re-render with updated messages
      setIsOpen(true);
    };

    return (
      <div
        ref={popUpRef}
        className="fixed top-0 right-0 w-[400px] h-[93vh] bg-white shadow-lg rounded-lg border border-gray-300 overflow-y-auto z-50"
      >
      <div className="px-[42px] pt-[27px]">
        {/* <h4 className="text-xl font-semibold">
            {hasMessages ? "You have new notifications!" : "No new notifications"}
        </h4> */}
        
        {hasMessages ? (
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
        )}
      </div>
      </div>
    );
}

export default Notification;


