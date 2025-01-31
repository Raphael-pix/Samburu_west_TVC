import React from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="hidden bg-blue-900 text-white py-2 lg:block">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <span className="hover:text-blue-100 transition-colors cursor-pointer">
            +254 742 204 9247
          </span>
          <span className="hover:text-blue-200 transition-colors cursor-pointer">
            samburuwesttvc@gmail.com
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#" className="hover:text-blue-200 transition-colors">
            Careers
          </Link>
          <Link href="#" className="hover:text-blue-200 transition-colors">
            Alumni
          </Link>
          <Link href="#" className="hover:text-blue-200 transition-colors">
            Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
