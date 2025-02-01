import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineItemProps {
  item: TimelineProps | null;
  index: number;
  onSelect: React.Dispatch<React.SetStateAction<TimelineProps | null>>;
}

const TimelineItem = ({ item, index, onSelect }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex gap-4 items-center lg:flex-row lg:gap-8 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex-col-reverse`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div
        className={`lg:w-1/2 w-full ${
          isEven ? "lg:text-right" : "lg:text-left"
        } text-center`}
      >
        <motion.div
          className={`inline-block ${item?.bgColor} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow 
  cursor-pointer w-full lg:w-auto`}
          whileHover={{ scale: 1.02 }}
          onClick={() => onSelect(item)}
        >
          <div
            className={`flex items-center gap-4 mb-2 ${
              isEven ? "lg:flex-row-reverse" : "lg:flex-row"
            } 
  justify-center lg:justify-start`}
          >
            <h3 className="text-xl font-bold">{item?.title}</h3>
          </div>
          <p className="text-gray-600">{item?.description}</p>
          <motion.div
            className={`flex items-center gap-2 mt-4 ${
              isEven ? "lg:justify-start" : "lg:justify-end"
            } 
  justify-center`}
            whileHover={{ x: 10 }}
          >
          </motion.div>
        </motion.div>
      </div>
      <div className="relative flex-none">
        <motion.div
          className={`w-12 h-12 rounded-full ${item?.bgColor} ${item?.color} flex items-center justify-center 
  font-bold`}
          whileHover={{ scale: 1.1 }}
        >
          {item?.year}
        </motion.div>
      </div>
      <div className="lg:w-1/2 w-full hidden justify-center lg:flex">
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

export default TimelineItem;
