"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Search, CircleUser, Bell } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/constants";
import SearchOverlay from "./search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    { id: 1, text: "New application received", isRead: false },
    { id: 2, text: "Upcoming event: Career Fair", isRead: false },
    { id: 3, text: "Document approved", isRead: true },
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div>
      <nav className="bg-white p-6 relative">
        {/* Main Navbar */}
        <div className="flex justify-between items-start lg:items-center">
          <div className="mr-4">
            <p className="font-semibold text-lg text-gray-800 lg:text-2xl">
              Welcome back, Raphael 👋
            </p>
            <p className="text-xs text-gray-500 lg:text-sm">
              Here&apos;s the latest updates
            </p>
          </div>
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 relative">
            <div className="hidden md:flex items-center  mx-4">
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
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-600 hover:text-blue-900 transition-colors"
            >
              <Bell size={22} />
              {notifications.some((n) => !n.isRead) && (
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
              )}
            </button>
            <Link
              href={"#"}
              className="p-2 text-gray-600 hover:text-blue-900 transition-colors"
            >
              <CircleUser size={22} />
            </Link>
            {showNotifications && (
              <div className="absolute right-8 top-full w-80 bg-white rounded-lg shadow-lg border p-2 z-50">
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-gray-600 hover:text-blue-900 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 h-[100dvh] bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300">
            {/* This empty div serves as the overlay */}
          </div>
        )}

        {/* Mobile Menu Side Drawer */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 left-0 h-full w-[300px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ height: "100dvh" }} // Using dynamic viewport height
        >
          {/* Mobile Menu Header */}
          <div className="flex items-end px-4 w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 ml-auto hover:shadow-sm rounded-full transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="overflow-y-auto h-[calc(100dvh-64px)] hidden-scrollbar">
            <div className="px-4 py-2">
              {/* Search */}
              <div className="mb-6 pt-2">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:border-blue-500"
                  />
                  <Search
                    size={16}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              {/* Navigation Items */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <Link
                      href={item.url}
                      className="block py-1 text-sm text-gray-600 hover:text-blue-900 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && <SearchOverlay setIsSearchOpen={setIsSearchOpen} />}
      </nav>
    </div>
  );
};

export default Navbar;
