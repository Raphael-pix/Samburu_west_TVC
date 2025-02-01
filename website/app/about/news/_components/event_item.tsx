import React from "react";
import { Bell, Clock, MapPin, Share2 } from "lucide-react";
import Image from "next/image";

interface EventProps {
  event: {
    id: number;
    title: string;
    location?: string;
    time: string;
    image: string;
  };
}

const EventItem = ({ event }: EventProps) => {
  return (
    <div
      key={event.id}
      className="w-[15rem] shrink-0 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <Image
        src={event.image}
        alt={event.title}
        width={150}
        height={150}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-base font-bold mb-2 text-wrap hover:text-blue-600 cursor-pointer line-clamp-2">
          {event.title}
        </h2>
        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-xs text-gray-600 line-clamp-1">
              {event.location}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-xs text-gray-600">{event.time}</span>
          </div>
        </div>
        <div className="py-2 flex items-center">
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white flex items-center rounded-lg gap-1 hover:bg-blue-700">
              <Bell className="w-4 h-4" />
              <p className="text-sm font-semibold">Notify me</p>
            </button>
          </div>
          <button className="ml-auto">
            <Share2 className="w-5 h-5" color="#4b5563" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
