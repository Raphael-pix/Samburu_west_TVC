import React from 'react';
import HeroSection from './_components/hero';
import AboutSection from './_components/about';
import Footer from '@/components/footer';
import VideoSection from './_components/video';
import Navbar from '@/components/navbar/navbar';
import StatsSection from './_components/statistics';
import CoursesSection from './_components/courses';
import InfoSection from './_components/info_section';



// Main Component
const LandingPage = () => {


  return (
    <div className="overflow-hidden bg-white">
      <Navbar/>
      <HeroSection />
      <AboutSection />
      <StatsSection/>
      <CoursesSection/>
      <VideoSection />
      <InfoSection/>
      <Footer />
    </div>
  );
};

export default LandingPage;