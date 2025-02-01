"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TimelineItem from "./_componets/timeline_item";
import DetailModal from "./_componets/detail_modal";
import { timelineData } from "@/constants";

const SchoolTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineProps | null>(null);

  return (
    <div className="bg-white overflow-hidden">
      <div className="h-[180px] relative lg:h-[250px] mb-6">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/assets/images/hero-image.jpeg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="py-6 px-4 lg:px-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our School History</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From our humble beginnings to our current position as a leading
            educational institution, explore the key moments that have shaped
            our journey.
          </p>
        </motion.div>

        <div className="relative">
          <motion.svg
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute hidden lg:block left-1/2 transform -translate-x-1/2"
            width="100%"
            height="100%"
            viewBox="0 0 100 1000"
          >
            <path
              d="M50,0 C70,200 30,400 50,600 C70,800 30,1000 50,1200"
              stroke="gray"
              strokeWidth="2"
              fill="transparent"
            />
          </motion.svg>

          <div className="space-y-12 lg:space-y-24">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.year}
                item={item}
                index={index}
                onSelect={setSelectedItem}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedItem && (
            <DetailModal
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SchoolTimeline;
