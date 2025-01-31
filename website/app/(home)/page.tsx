import React from 'react';
import HeroSection from './_components/hero';
import AboutSection from './_components/about';
import CourseCard from './_components/course_card';
import Footer from '@/components/footer';
import VideoSection from './_components/video';
import EventCard from './_components/event_card';
import Navbar from '@/components/navbar/navbar';
import { featuredCourses } from '@/constants';
import StatsSection from './_components/statistics';



// Main Component
const LandingPage = () => {

  const upcomingEvents = [
    { date: '10', month: 'JAN', title: 'Workshop FMP' },
    { date: '15', month: 'JAN', title: 'Workshop FMP' },
    { date: '20', month: 'JAN', title: 'Workshop FMP' }
  ];

  return (
    <div className="overflow-hidden bg-white">
      <Navbar/>
      <HeroSection />
      <AboutSection />
      <StatsSection/>
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8">FEATURED COURSES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>

      <VideoSection />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">UPCOMING EVENT</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;