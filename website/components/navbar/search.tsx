import { Search, X } from "lucide-react";
import React from "react";

interface SearchOverlayProps {
    setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
  

const SearchOverlay: React.FC<SearchOverlayProps> = ({ setIsSearchOpen }) => {
  return (
    <div className="fixed inset-0 h-[100dvh] bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 flex items-center border-b">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <p className="text-gray-500 text-sm">Recent Searches</p>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-sm text-gray-600 hover:text-blue-900 cursor-pointer">
              <Search size={14} className="mr-2" />
              <span>Admission Requirements</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 hover:text-blue-900 cursor-pointer">
              <Search size={14} className="mr-2" />
              <span>Course Catalog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
