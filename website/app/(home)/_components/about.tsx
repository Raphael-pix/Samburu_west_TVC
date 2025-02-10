import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { aboutItems } from "@/constants";
import LatestNews from "./latest_news";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="container mx-auto px-6 py-8 relative lg:px-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 lg:mx-[2rem]">
        {aboutItems.map((item) => (
          <div
            key={item.title}
            className="space-y-4 max-w-full md:max-w-[280px] transform transition-all duration-500 hover:translate-y-[-10px]"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={300}
              height={300}
              className="w-full rounded-lg transition-all duration-300 hover:shadow-xl"
            />
            <p className="text-gray-600">{item.text}</p>
            <Link href={item.url} className="text-blue-600 font-medium flex items-center gap-2 group">
              READ MORE
              <ArrowRight
                size={16}
                className="transform transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </div>
        ))}
        <LatestNews />
      </div>
    </section>
  );
};

export default AboutSection;
