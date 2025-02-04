"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, Search, User, Bell } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constants";
import SearchOverlay from "./search";
import AuthModal from "./auth";
import Topbar from "./top";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
      // Prevent scrolling when mobile menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleDropdown = (title: string) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  return (
    <nav className="bg-white shadow-md relative">
      {/* Top Bar */}
      <Topbar />

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="p-2 w-auto max-w-[14rem]">
            <Image
              src="/assets/images/logo.png"
              width={80}
              height={80}
              alt="Tvet Logo"
              className="w-auto h-auto max-w-[60px] md:max-w-[80px] lg:max-w-[100px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 transition-colors"
                  href={item.url}
                >
                  <span>{item.title}</span>
                  {item.links && (
                    <ChevronDown
                      size={16}
                      className="transform group-hover:rotate-180 transition-transform duration-200"
                    />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.links && (
                  <div className="absolute left-0 mt-2 min-w-[240px] max-w-[600px] bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-6 grid grid-cols-1 gap-8">
                      {item.links.map((section) => (
                        <div key={section.section}>
                          <ul className="space-y-2">
                            {section.items.map((link) => (
                              <li key={link.title}>
                                <Link
                                  href={link.url}
                                  className="text-gray-600 hover:text-blue-900 transition-colors block"
                                >
                                  {link.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-600 hover:text-blue-900 transition-colors"
            >
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-900 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={() => setIsAuthOpen(!isAuthOpen)}
              className="p-2 text-gray-600 hover:text-blue-900 transition-colors"
            >
              <User size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-blue-900 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300">
          {/* This empty div serves as the overlay */}
        </div>
      )}

      {/* Mobile Menu Side Drawer */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 left-0 h-full w-[300px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
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
        <div className="overflow-y-auto h-[calc(100%-64px)] hidden-scrollbar">
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
                  <button
                    className="w-full flex justify-between items-center py-3 text-gray-700 hover:text-blue-900 transition-colors"
                    onClick={() => handleDropdown(item.title)}
                  >
                    <span className="font-medium">{item.title}</span>
                    {item.links && (
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform duration-200 ${
                          activeDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.links && activeDropdown === item.title && (
                    <div className="pl-4 pb-3">
                      {item.links.map((section) => (
                        <div key={section.section} className="mb-4 last:mb-0">
                          <h3 className="text-sm font-semibold text-blue-900 mb-2">
                            {section.section}
                          </h3>
                          <ul className="space-y-2">
                            {section.items.map((link) => (
                              <li key={link.title}>
                                <a
                                  href={link.url}
                                  className="block py-1 text-sm text-gray-600 hover:text-blue-900 transition-colors"
                                >
                                  {link.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* user actions */}
          <div className="w-full flex flex-col items-center space-y-2 mb-4 pl-4">
            <button className="min-w-[12rem] px-4 py-2 text-sm bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
              Sign In
            </button>
            <button className="min-w-[12rem] px-4 py-2 text-sm border border-blue-900 text-blue-900 rounded-md hover:bg-blue-50 transition-colors">
              Register
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-6 bg-gray-50 p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-blue-900"
              >
                Student Portal
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-blue-900"
              >
                Academic Calendar
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-blue-900"
              >
                Library Resources
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-blue-900"
              >
                Campus Map
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* search overlay */}
      {isSearchOpen && <SearchOverlay setIsSearchOpen={setIsSearchOpen} />}

      {/* Auth Dropdown */}
      {isAuthOpen && <AuthModal />}
    </nav>
  );
};

export default Navbar;
