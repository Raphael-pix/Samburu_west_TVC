import React from 'react';
import HeroSection from './_components/hero';
import AboutSection from './_components/about';
import CourseCard from './_components/course_card';
import Footer from '@/components/footer';
import VideoSection from './_components/video';
import EventCard from './_components/event_card';



// Main Component
const LandingPage = () => {
  const featuredCourses = [
    {
      title: 'COMPUTER SCIENCE',
      description: 'Learn computer science fundamentals and advanced programming concepts',
      icon: '💻'
    },
    {
      title: 'BUSINESS ADMINISTRATION',
      description: 'Study business principles, management, and organizational leadership',
      icon: '📊'
    },
    {
      title: 'MASS COMMUNICATION',
      description: 'Explore media, journalism, and modern communication techniques',
      icon: '📱'
    },
    {
      title: 'SOCIAL MEDIA',
      description: 'Master social media marketing and digital communication strategies',
      icon: '🤝'
    },
    {
      title: 'BS MATHEMATICS',
      description: 'Dive deep into mathematical theories and practical applications',
      icon: '📐'
    },
    {
      title: 'BA LLB',
      description: 'Study law and legal frameworks in a comprehensive program',
      icon: '⚖️'
    }
  ];

  const upcomingEvents = [
    { date: '10', month: 'JAN', title: 'Workshop FMP' },
    { date: '15', month: 'JAN', title: 'Workshop FMP' },
    { date: '20', month: 'JAN', title: 'Workshop FMP' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      
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