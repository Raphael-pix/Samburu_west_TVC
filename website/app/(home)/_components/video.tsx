"use client";

import { icons } from "@/constants";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const VideoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="container max-w-[68rem] flex items-center gap-12 mx-auto px-6 py-8 bg-white shadow-sm max-lg:block max-lg:space-y-2">
      <div
        className="relative flex-1 h-[320px] bg-blue-900 rounded-lg flex items-center justify-center overflow-hidden"
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
      <div className="flex-1">
        <h1 className="px-6 py-2 border-l-2 border-blue-800 mb-6 font-semibold text-black text-2xl uppercase">
          Take a tour
        </h1>
        <p className="text-lg text-gray-600 px-6 font-medium mb-2">
          Our campus is living susutainable laboratories
        </p>
        <p className="text-base text-gray-600 px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          purus eu pellentesque blandit. Mauris eget sapien vitae nisl
          vestibulum maximus aliquet vitae neque. Morbi commodo eu mauris cursus
          congue. Aenean quis neque quam.
        </p>
        <div className="px-6 flex gap-2 mt-6">
          {icons.map((item) => (
            <Link href="#" key={item.title}>
              <Image src={item.icon} alt={item.title} width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
