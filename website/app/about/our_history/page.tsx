'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, GraduationCap, Users, Trophy, Book, ChevronRight, X, LucideProps } from 'lucide-react';
import Image from 'next/image';

interface TimelineProps {
    year:string;
    title:string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    description: string;
    color:string;
    bgColor: string;
    details?:string[];
    image?:string;
}
interface TimelineItemProps {
    item:TimelineProps | null;
    index:number;
    onSelect:React.Dispatch<React.SetStateAction<TimelineProps | null>>;
}
interface DetailModalProps {
    item: TimelineProps;
    onClose: () => void;
}

const timelineData:TimelineProps[] = [
  {
    year: "1950",
    title: "School Foundation",
    icon: Building2,
    description: "Our institution was founded with a vision to provide quality education to all. The first building was established in the heart of the city.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    details: [
      "Initial enrollment of 50 students",
      "5 dedicated teaching staff members",
      "First building constructed on 2 acres of land",
      "Focused on primary education"
    ],
    image: "/api/placeholder/400/300"
  },
  {
    year: "1960",
    title: "First Graduation",
    icon: GraduationCap,
    description: "Celebrated our first graduating class with 100 students. This marked a significant milestone in our journey.",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    details: [
      "100% graduation rate",
      "85% college acceptance rate",
      "Established alumni association",
      "Started scholarship program"
    ],
    image: "/api/placeholder/400/300"
  },
  {
    year: "1975",
    title: "Campus Expansion",
    icon: Building2,
    description: "Added new facilities including a state-of-the-art library and science laboratories.",
    color: "text-green-500",
    bgColor: "bg-green-100",
    image: "/api/placeholder/400/300"
  },
  {
    year: "1990",
    title: "Sports Excellence",
    icon: Trophy,
    description: "Established our sports complex and started our athletics program, which has since won numerous state championships.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    image: "/api/placeholder/400/300"
  },
  {
    year: "2010",
    title: "Digital Revolution",
    icon: Book,
    description: "Integrated technology into our curriculum and launched our first computer science program.",
    color: "text-red-500",
    bgColor: "bg-red-100",
    image: "/api/placeholder/400/300"
  },
  {
    year: "2024",
    title: "Modern Era",
    icon: Users,
    description: "Achieved recognition as one of the top educational institutions in the region, serving over 5000 students.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-100",
    image: "/api/placeholder/400/300"
  }
];

const TimelineItem = ({ item, index, onSelect }:TimelineItemProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`flex gap-8 items-center lg:flex-row ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className={`lg:w-1/2 w-full ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
        <motion.div 
          className={`inline-block ${item?.bgColor} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer w-full lg:w-auto`}
          whileHover={{ scale: 1.02 }}
          onClick={() => onSelect(item)}
        >
          <div className={`flex items-center gap-4 mb-2 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center lg:justify-start`}>
            
            <h3 className="text-xl font-bold">{item?.title}</h3>
          </div>
          <p className="text-gray-600">{item?.description}</p>
          <motion.div 
            className={`flex items-center gap-2 mt-4 ${isEven ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}
            whileHover={{ x: 10 }}
          >
            <span className="text-sm font-medium">Learn More</span>
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
      <div className="relative flex-none">
        <motion.div 
          className={`w-12 h-12 rounded-full ${item?.bgColor} ${item?.color} flex items-center justify-center font-bold`}
          whileHover={{ scale: 1.1 }}
        >
          {item?.year}
        </motion.div>
        
      </div>
      <div className="lg:w-1/2 w-full flex justify-center">
  {item?.image && (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5, delay: index * 0.2 }} 
      viewport={{ once: true }}
    >
      <Image 
        src={"/assets/images/hero-image.jpeg"} 
        alt={item.title} 
        width={300} 
        height={200} 
        className="rounded-lg shadow-lg object-cover"
      />
    </motion.div>
  )}
</div>
    </motion.div>
  );
};

const DetailModal = ({ item, onClose }:DetailModalProps) => {
  if (!item) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{item.title} ({item.year})</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <Image 
            src={item.image || ""} 
            alt={item.title} 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          
          <p className="text-gray-600 mb-4">{item.description}</p>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Key Achievements:</h3>
            <ul className="list-disc list-inside space-y-2">
              {item.details?.map((detail:string, index:number) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {detail}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SchoolTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineProps | null>(null);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Our School History</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From our humble beginnings to our current position as a leading educational institution,
          explore the key moments that have shaped our journey.
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

        <div className="space-y-24">
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
  );
};

export default SchoolTimeline;