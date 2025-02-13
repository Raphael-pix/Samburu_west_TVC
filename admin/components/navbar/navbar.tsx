"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bell, Search } from "lucide-react";

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    { id: 1, text: "New application received", isRead: false },
    { id: 2, text: "Upcoming event: Career Fair", isRead: false },
    { id: 3, text: "Document approved", isRead: true },
  ]);
  return (
    <nav className="bg-white py-8 z-30">
      <div className="flex items-center justify-between px-4 h-full">

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4 px-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-gray-100 rounded-lg relative"
            >
              <Bell size={20} />
              {notifications.some((n) => !n.isRead) && (
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border p-2 z-50">
                <h3 className="text-sm font-semibold px-3 py-2">
                  Notifications
                </h3>
                <div className="divide-y">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-3 py-2 hover:bg-gray-50 cursor-pointer ${
                        !notification.isRead ? "bg-blue-50" : ""
                      }`}
                    >
                      <p className="text-sm">{notification.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/logo_white.png"
              alt="Profile"
              width={20}
              height={20}
              className="h-12 w-12 rounded-full"
            />
            <span className="hidden md:inline text-sm font-medium">
              Admin User
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
