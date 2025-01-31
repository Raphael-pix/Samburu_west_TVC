import { Clock } from "lucide-react";
import React from "react";

interface Event {
  date: string;
  month: string;
  title: string;
}

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="flex items-center gap-4 transform transition-all duration-300 hover:translate-x-2">
      <div
        className="bg-blue-900 text-white p-3 rounded text-center min-w-[45px] transition-all duration-300 
 hover:bg-blue-800"
      >
        <div className="text-sm font-bold ">{event.date}</div>
        <div className="text-xs">{event.month}</div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Clock size={18} color="#2563eb" />
          <p className="text-sm text-gray-600">09:30 AM - 12:30 pm</p>
        </div>
        <div className="font-medium text-gray-800">{event.title}</div>
      </div>
    </div>
  );
};

export default EventCard;
