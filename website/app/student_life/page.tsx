import React from "react";
import { studentActivities } from "@/constants";
import Image from "next/image";

const StudentLifePage = () => {
  return (
    <section className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="h-[400px] relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/assets/images/student_life.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center">
              Experience Campus Life
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Life at Our Institution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover a vibrant community where academic excellence meets unforgettable experiences. 
            Our campus life offers countless opportunities to learn, grow, and create lasting memories.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Campus Life Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentActivities.map((activity) => (
              <div
                key={activity.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4">
                    <Image
                      src={activity.icon}
                      alt={activity.title}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Campus Life Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={`/assets/images/student_life.jpg`}
                alt={`Campus life photo ${item}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our vibrant community and make the most of your university experience. 
            Discover clubs, activities, and events that match your interests.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Explore Student Activities
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentLifePage;