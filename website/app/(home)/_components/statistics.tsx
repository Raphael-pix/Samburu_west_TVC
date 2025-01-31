"use client";
import { GraduationCap, School, User, Users } from "lucide-react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const stats = [
  { icon: <School size={50} />, value: 107, label: "Total Programmes" },
  { icon: <Users size={50} />, value: 13000, label: "Students Enrolled" },
  { icon: <User size={50} />, value: 300, label: "Certified Trainers" },
  { icon: <GraduationCap size={50} color="yellow" />, value: 17000, label: "Total Graduates" },
];

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && window.scrollY > 300) {
        setHasAnimated(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return (
    <section className="bg-blue-950 text-white py-16">
      <div className="container px-2 mx-auto flex flex-wrap justify-center gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4">{stat.icon}</div>
            <h2 className="text-2xl font-bold lg:text-4xl">
              {hasAnimated ? <CountUp end={stat.value} duration={3} separator="," /> : 0}
            </h2>
            <p className="text-base lg:text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
