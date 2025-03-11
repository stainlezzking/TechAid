"use client"

import { useEffect, useRef } from "react";
import { getAllMessages, markAsRead } from "../messages"; // Using relative import

const Notification = function({ isOpen, setIsOpen, navbarType }) {
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
  
  const notificationMessages = getAllMessages(navbarType);
  const hasMessages = notificationMessages.length > 0;
  
  const handleMessageClick = (id) => {
    markAsRead(navbarType, id);
    // Force re-render with updated messages
    setIsOpen(true);
  };

  return (
    <div
      ref={popUpRef}
      className="fixed top-0 right-0 w-[300px] h-[50vh] bg-white shadow-lg rounded-lg border border-gray-300 overflow-y-auto z-50"
    >
      <div className="p-4">
        <h4 className="text-xl font-semibold">
          {hasMessages ? "You have new notifications!" : "No new notifications"}
        </h4>
        {hasMessages ? (
          <ul className="mt-4 text-sm text-gray-700">
            {notificationMessages.map((message) => (
              <li 
                key={message.id} 
                className={`p-2 border-b last:border-none cursor-pointer hover:bg-gray-50 ${!message.read ? 'bg-blue-50' : ''}`}
                onClick={() => handleMessageClick(message.id)}
              >
                <div className="flex justify-between">
                  <div>
                    <strong>{message.type}:</strong> {message.content}
                  </div>
                  {!message.read && (
                    <div className="bg-blue-500 h-2 w-2 rounded-full mt-1.5"></div>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleString()}
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


"use client"

import { useEffect, useRef } from "react";
import { getAllMessages, markAsRead, NAVBAR_TYPES } from "../messages"; // Import NAVBAR_TYPES

const Notification = function({ isOpen, setIsOpen, navbarType = NAVBAR_TYPES.MAIN }) { // Set default value
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
  
  // Get messages for this navbar type - using the provided type or default
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
      className="fixed top-0 right-0 w-[300px] h-[50vh] bg-white shadow-lg rounded-lg border border-gray-300 overflow-y-auto z-50"
    >
      <div className="p-4">
        <h4 className="text-xl font-semibold">
          {hasMessages ? "You have new notifications!" : "No new notifications"}
        </h4>
        {hasMessages ? (
          <ul className="mt-4 text-sm text-gray-700">
            {notificationMessages.map((message) => (
              <li 
                key={message.id} 
                className={`p-2 border-b last:border-none cursor-pointer hover:bg-gray-50 ${!message.read ? 'bg-blue-50' : ''}`}
                onClick={() => handleMessageClick(message.id)}
              >
                <div className="flex justify-between">
                  <div>
                    <strong>{message.type}:</strong> {message.content}
                  </div>
                  {!message.read && (
                    <div className="bg-blue-500 h-2 w-2 rounded-full mt-1.5"></div>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleString()}
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