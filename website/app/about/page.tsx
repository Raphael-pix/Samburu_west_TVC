import { coreValues } from "@/constants";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="h-[180px] relative lg:h-[350px]">
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
      <div className="flex flex-col items-center gap-8 py-6 px-4 lg:px-8 lg:py-12 lg:flex-row">
        <div className="p-2 w-auto max-w-[25rem] ">
          <Image
            src="/assets/images/logo.png"
            width={350}
            height={350}
            alt="Tvet Logo"
            className="w-auto h-auto max-w-[200px] md:max-w-[340px] lg:max-w-[350px] object-contain"
          />
        </div>
        <div>
          <h1 className="px-2 border-l-2 border-blue-800 mb-6 font-semibold text-black text-base uppercase">
            About us
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
      <div className="bg-blue-700 py-4 px-8 my-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-center lg:h-[240px]">
        <div className="p-6 text-center">
          <h1 className="text-xl text-white font-semibold">Vision</h1>
          <p className="text-base text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            justo massa, semper quis lorem id, varius vulputate dolor. Aenean
            faucibus neque ex, eget iaculis tortor cursus sit amet. Vivamus
          </p>
        </div>
        <div className="p-6 text-center">
          <h1 className="text-lg text-white font-semibold">Mission</h1>
          <p className="text-base text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            justo massa, semper quis lorem id, varius vulputate dolor. Aenean
            faucibus neque ex, eget iaculis tortor cursus sit amet. Vivamus
          </p>
        </div>
        <div className="p-6 text-center">
          <h1 className="text-lg text-white font-semibold">Motto</h1>
          <p className="text-base text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            justo massa, semper quis lorem id, varius vulputate dolor. Aenean
            faucibus neque ex, eget iaculis tortor cursus sit amet. Vivamus
          </p>
        </div>
      </div>
      <div className="bg-gray-50  px-4 py-6 my-9 lg:px-8 ">
        <h1 className="uppercase text-2xl text-gray-950 font-semibold text-center mb-4">
          Core Values
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:px-16">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="px-12 py-6 bg-white rounded-sm shadow-md flex flex-col items-center justify-center space-y-4"
            >
              <Image
                src={value.icon}
                alt={value.title}
                width={80}
                height={80}
              />
              <p className="text-base text-gray-900 font-semibold">
                {value.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
