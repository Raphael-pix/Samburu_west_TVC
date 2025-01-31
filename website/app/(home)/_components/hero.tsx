import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="relative h-[500px] bg-blue-900 text-white transition-all duration-500 hover:bg-blue-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90">
          <div className="container mx-auto px-6 py-32">
            <div className="transform transition-all duration-500 hover:translate-y-[-10px]">
              <h1 className="text-5xl font-bold mb-6">
                ARE YOU READY
                <br />
                TO APPLY?
              </h1>
              <p className="mb-8 max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-all 
duration-300 hover:shadow-lg transform hover:scale-105"
              >
                GET STARTED NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
