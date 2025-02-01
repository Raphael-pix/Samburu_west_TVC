import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface DetailModalProps {
    item: TimelineProps;
    onClose: () => void;
}

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
  

export default DetailModal;