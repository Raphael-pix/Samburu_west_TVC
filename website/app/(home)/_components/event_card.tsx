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
        className="bg-blue-900 text-white p-3 rounded text-center min-w-[60px] transition-all duration-300 
 hover:bg-blue-800"
      >
        <div className="text-xl font-bold">{event.date}</div>
        <div className="text-sm">{event.month}</div>
      </div>
      <div className="font-medium">{event.title}</div>
    </div>
  );
};

export default EventCard;
