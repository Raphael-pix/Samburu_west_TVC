import React from "react";
import Image from "next/image";


const Map = () => {
    return (
      <div className="bg-gray-100 rounded-lg overflow-hidden max-lg:mx-6 lg:w-full lg:h-full">
        <Image
          src="/assets/images/hero-image.jpeg" 
          alt="School Location Map"
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
      </div>
    );
  };
  
  export default Map;