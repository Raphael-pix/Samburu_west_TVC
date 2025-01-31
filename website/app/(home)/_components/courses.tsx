"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import CourseCard from "./course_card";
import { featuredCourses } from "@/constants";

const CoursesSection = () => {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 bg-white text-gray-900">
      <h2 className="text-lg font-semibold mb-8 uppercase px-4 lg:px-16 lg:text-2xl">
        Featured Courses
      </h2>
      <div className="relative overflow-hidden">
        {/* Animated Container */}
        <motion.div
          ref={scrollRef}
          className="flex gap-8 whitespace-nowrap"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...featuredCourses, ...featuredCourses].map((course, index) => (
            <div key={index} className="w-80 shrink-0">
              <CourseCard course={course} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
