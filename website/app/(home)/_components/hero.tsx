import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-[500px] bg-gray-300/60 text-white transition-all duration-500 hover:bg-gray-300"
      style={{
        backgroundImage:`url('/assets/images/hero-image.jpeg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/80 to-neutral-700/80">
        <div className="container mx-auto px-6 py-16 lg:px-16 lg:py-32">
          <div className="transform transition-all duration-500 hover:translate-y-[-10px]">
            <h1 className="text-4xl font-bold mb-6 uppercase lg:text-5xl">
              are you ready
              <br />
              to apply?
            </h1>
            <p className="mb-8 max-w-2xl text-base lg:text-lg ">
            Take the first step toward a brighter future! Join our school and gain the skills, knowledge, and hands-on experience you need to succeed. Apply today and start your journey to excellence!
            </p>
            <button
              className="bg-red-600 text-white px-8 py-3 rounded-md uppercase hover:bg-red-700 transition-all 
duration-300 hover:shadow-lg transform hover:scale-105"
            >
              get started now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
