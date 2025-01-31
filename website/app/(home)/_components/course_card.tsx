import Image from "next/image";
import React from "react";

interface FeaturedCourse {
  title: string;
  description: string;
  icon: string;
  backgroundImage: string;
}

const CourseCard = ({ course }: { course: FeaturedCourse }) => {
    return (
      <div
        className="relative px-6 py-8 text-center max-w-[16rem] bg-white rounded-lg space-y-4 transition-all duration-300 hover:shadow-lg group cursor-pointer"
        style={{
          backgroundImage: `url(${course.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 rounded-lg bg-gray-900 bg-opacity-50 transition-opacity duration-300 group-hover:opacity-30"></div>
  
        {/* Image and Text */}
        <div className="relative z-10">
          <div className="text-4xl mb-4">
            <Image
              src={course.icon}
              alt={course.title}
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
          <h3 className="font-semibold text-white text-wrap">{course.title}</h3>
          <p className="text-white text-sm text-wrap">{course.description}</p>
        </div>
      </div>
    );
  };
  
export default CourseCard;
