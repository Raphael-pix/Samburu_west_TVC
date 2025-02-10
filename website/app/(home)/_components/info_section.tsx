"use client";

import React, { useState } from "react";
import EventCard from "./event_card";
import { upcomingEvents } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const stories = [
  {
    id: 0,
    imageUrl: "/assets/images/hero-image.jpeg",
    date: "December 26, 2017",
    title: "Wondering How To Make Your Project Rock",
  },
  {
    id: 1,
    imageUrl: "/assets/images/computer-science.jpg",
    date: "December 26, 2017",
    title: "Wondering How To Make Your Project Rock",
  },
  {
    id: 2,
    imageUrl: "/assets/images/courses.jpg",
    date: "December 26, 2017",
    title: "Wondering How To Make Your Project Rock",
  },
];

const EventSection = () => {
  return (
    <div className="max-w-full bg-white p-6 rounded-xl shadow-md lg:max-w-[20rem]">
      <h1 className="px-2 py-2 border-l-2 border-blue-800 mb-6 font-semibold text-black text-base uppercase">
        upcoming events
      </h1>
      <div className="space-y-4">
        {upcomingEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

const RequestSection = () => {
  return (
    <div className="max-w-full bg-white p-6 rounded-xl shadow-md lg:max-w-[20rem]">
      <h1 className="px-2 border-l-2 border-blue-800 mb-6 font-semibold text-black text-base uppercase">
        Your first point of contact
      </h1>
      <h2 className="text-lg text-gray-900 font-medium mb-2 px-2">
        Detailed information, brochures and forms can be mailed to you upon
        request
      </h2>
      <p className="h-[125px] text-sm text-gray-600 px-2 mb-6 overflow-hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
        purus eu pellentesque blandit. Mauris eget sapien vitae nisl vestibulum
        maximus aliquet vitae neque. Morbi commodo eu mauris cursus
        congue.Aenean quis neque quam.
      </p>
      <button
        className="bg-blue-600 text-white px-8 py-3 rounded-md uppercase hover:bg-blue-700 transition-all 
duration-300 hover:shadow-lg transform hover:scale-105"
      >
        Request information
      </button>
    </div>
  );
};
const StoriesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };
  return (
    <div className="max-w-full bg-white p-6 rounded-xl shadow-md lg:max-w-[20rem]">
  <div className="flex justify-between items-center border-b pb-4 mb-4">
    <h1 className="px-2 border-l-2 border-blue-800 font-semibold text-black text-base uppercase">
      top stories
    </h1>
    <div className="flex space-x-2">
      <button onClick={prevSlide}>
        <ChevronLeft className="w-5 h-5 text-[#002c74] cursor-pointer" />
      </button>
      <button onClick={nextSlide}>
        <ChevronRight className="w-5 h-5 text-[#002c74] cursor-pointer" />
      </button>
    </div>
  </div>

  <div className="relative w-full h-[300px] overflow-hidden">
    {stories.map((story, index) => (
      <div
        key={story.id}
        className={cn(
          "absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out",
          index === currentSlide ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="h-[200px] mb-4 lg:h-[180]">
          <Image
            src={story.imageUrl}
            alt="Top story"
            width={350}
            height={200}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <p className="text-gray-500 text-sm">{story.date}</p>
        <h3 className="font-semibold text-lg text-[#002c74] mt-2 line-clamp-2">
          {story.title}
        </h3>
      </div>
    ))}
  </div>

  <Link href="/news" className="text-[#002c74] font-semibold mt-2 block">
    READ MORE →
  </Link>
</div>

  );
};

const InfoSection = () => {
  return (
    <section className="container mx-auto px-6 py-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <RequestSection />
        <EventSection />
        <StoriesSection />
      </div>
    </section>
  );
};

export default InfoSection;
