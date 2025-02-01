"use client";

import { leaders } from "@/constants";
import Image from "next/image";
import React from "react";


const Leadershippage = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="h-[180px] relative lg:h-[200px]">
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
      <div className="text-center py-6 px-4 lg:pt-8">
        <h1 className="text-4xl font-bold mb-4">Our Leaders</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the visionaries leading our school forward.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 py-6 px-4 lg:px-16 lg:flex-row">
        <div className="p-2 w-auto max-w-[25rem] text-center space-y-2">
          <Image
            src="/assets/images/logo.png"
            width={350}
            height={350}
            alt="Tvet Logo"
            className="w-auto h-auto max-w-[200px] md:max-w-[340px] lg:max-w-[350px] object-contain"
          />
          <h2 className="text-xl font-semibold text-gray-800">John Mike</h2>
          <p className="text-gray-600">Principal</p>
        </div>
        <div>
          <h1 className="px-2 border-l-2 border-blue-800 mb-6 font-semibold text-black text-base uppercase">
            word from leader
          </h1>
          <p className="text-base text-gray-600 px-2 mb-6 overflow-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            justo massa, semper quis lorem id, varius vulputate dolor. Aenean
            faucibus neque ex, eget iaculis tortor cursus sit amet. Vivamus
            maximus consectetur risus, non porttitor mauris mollis ut. Maecenas
            vitae sem a nisl fermentum aliquet. Donec nec purus dictum, sodales
            tellus vitae, varius elit. Maecenas eget mi nec libero condimentum
            sodales. In a sodales velit.
          </p>
        </div>
      </div>
      <div className=" px-4 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-lg text-center"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
                width={150}
                height={150}
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {leader.name}
              </h2>
              <p className="text-gray-600">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadershippage;
