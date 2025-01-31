"use client"

import { Play } from "lucide-react";
import React, { useState } from "react";

const VideoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="container mx-auto px-6 py-16">
      <div
        className="relative h-[400px] bg-blue-900 rounded-lg flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute inset-0 bg-blue-800 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        <button
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center transition-transform 
duration-300 hover:scale-110 relative z-10"
        >
          <Play size={32} className="text-blue-900" />
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
