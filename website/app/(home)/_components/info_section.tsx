import React from "react";
import EventCard from "./event_card";
import { upcomingEvents } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique purus eu pellentesque blandit. Mauris eget sapien vitae nisl vestibulum maximus aliquet vitae neque. Morbi commodo eu mauris cursus congue.Aenean quis neque quam.
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
  return (
    <div className="max-w-full bg-white p-6 rounded-xl shadow-md lg:max-w-[20rem]">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h1 className="px-2 py-2 border-l-2 border-blue-800 mb-6 font-semibold text-black text-base uppercase">
          top stories
        </h1>
        <div className="flex space-x-2">
          <ChevronLeft className="w-5 h-5 text-[#002c74] cursor-pointer" />
          <ChevronRight className="w-5 h-5 text-[#002c74] cursor-pointer" />
        </div>
      </div>

      {/* Image */}
      <div className="mb-4">
        <Image
          src="/assets/images/hero-image.jpeg" // Replace with actual image path
          alt="Top story"
          width={350}
          height={200}
          className="rounded-lg"
        />
      </div>

      {/* Content */}
      <p className="text-gray-500 text-sm">December 26, 2017</p>
      <h3 className="font-semibold text-lg text-[#002c74] mt-2">
        Wondering How To Make Your Project Rock
      </h3>
      <a href="#" className="text-[#002c74] font-semibold mt-2 block">
        READ MORE →
      </a>
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
