import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["ABOUT LEADS", "STUDENT LIFE"].map((title, index) => (
            <div
              key={index}
              className="space-y-4 transform transition-all duration-500 hover:translate-y-[-10px]"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <Image
                src="/api/placeholder/400/300"
                alt={title}
                width={300}
                height={300}
                className="w-full rounded-lg transition-all duration-300 hover:shadow-xl"
              />
              <h4 className="text-lg font-medium">
                Life is Like Riding a Bicycle
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <button className="text-blue-600 font-medium flex items-center gap-2 group">
                READ MORE
                <ArrowRight
                  size={16}
                  className="transform transition-transform duration-300 
group-hover:translate-x-2"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
