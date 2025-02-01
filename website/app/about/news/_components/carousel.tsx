"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Annual Science Fair",
    date: "March 15, 2024",
    description: "Join us for an exciting showcase of student projects and innovations",
    image: "/api/placeholder/1200/600"
  },
  {
    id: 2,
    title: "Sports Day Championship",
    date: "April 5, 2024",
    description: "A day of athletic excellence and team spirit",
    image: "/api/placeholder/1200/600"
  },
  {
    id: 3,
    title: "Arts & Culture Festival",
    date: "May 20, 2024",
    description: "Celebrating creativity through music, dance, and visual arts",
    image: "/api/placeholder/1200/600"
  }
];

const EventsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <div className="h-[250px] lg:h-[320px] relative group">
      {/* Slides */}
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-black/40"
            style={{
              backgroundImage: `url(${event.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 bg-black/40">
            <div className="h-full flex flex-col justify-center px-6 lg:px-24 text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                {event.title}
              </h2>
              <p className="text-sm lg:text-base mb-2 opacity-90">
                {event.date}
              </p>
              <p className="text-sm lg:text-base max-w-2xl opacity-80">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsCarousel;