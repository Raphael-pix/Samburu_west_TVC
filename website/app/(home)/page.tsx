import React from 'react';
import HeroSection from './_components/hero';
import AboutSection from './_components/about';
import VideoSection from './_components/video';
import StatsSection from './_components/statistics';
import CoursesSection from './_components/courses';
import InfoSection from './_components/info_section';



// Main Component
const LandingPage = () => {


  return (
    <div className="overflow-hidden bg-white">
      <HeroSection />
      <AboutSection />
      <StatsSection/>
      <CoursesSection/>
      <VideoSection />
      <InfoSection/>
    </div>
  );
};

export default LandingPage;