import React from "react";
import { LogIn, User } from "lucide-react";

const AuthModal = () => {
  return (
    <div className="absolute right-4 top-full mt-2 w-64 bg-white rounded-lg shadow-lg z-50 py-2">
      <a
        href="#"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors"
      >
        <LogIn size={16} className="mr-2" />
        <span>Sign In</span>
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors"
      >
        <User size={16} className="mr-2" />
        <span>Create Account</span>
      </a>
      <div className="border-t my-2"></div>
      <a
        href="#"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors"
      >
        Student Portal
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors"
      >
        Faculty Portal
      </a>
    </div>
  );
};

export default AuthModal;
