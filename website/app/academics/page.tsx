"use client"

import React, { useState } from 'react';
import { ChevronRight, Clock, Search, Building2 } from 'lucide-react';
import Image from 'next/image';

interface program {
    id: number;
    name: string;
    degree: string;
    duration: string;
    faculty: string;
    description: string;
    careers: string[];
    icon: string;
}
type programItems = {
    undergraduate:program[];
    graduate:program[];
}

const programs:programItems = {
  undergraduate: [
    {
      id: 1,
      name: "Computer Science",
      degree: "Bachelor of Science",
      duration: "4 years",
      faculty: "Engineering & Technology",
      description: "Study algorithms, software development, and computational theory.",
      careers: ["Software Engineer", "Data Scientist", "Systems Analyst"],
      icon: "/assets/icons/computers.svg"
    },
    {
      id: 2,
      name: "Business Administration",
      degree: "Bachelor of Business Administration",
      duration: "4 years",
      faculty: "Business School",
      description: "Learn management principles, marketing, and organizational behavior.",
      careers: ["Business Analyst", "Marketing Manager", "Entrepreneur"],
      icon: "/assets/icons/business.svg"
    },
    {
      id: 3,
      name: "Psychology",
      degree: "Bachelor of Arts",
      duration: "3 years",
      faculty: "Social Sciences",
      description: "Explore human behavior, mental processes, and psychological theory.",
      careers: ["Counselor", "Research Assistant", "HR Specialist"],
      icon: "/assets/icons/psychology.svg"
    }
  ],
  graduate: [
    {
      id: 4,
      name: "Data Science",
      degree: "Master of Science",
      duration: "2 years",
      faculty: "Engineering & Technology",
      description: "Advanced study in data analytics, machine learning, and statistics.",
      careers: ["Data Scientist", "ML Engineer", "Analytics Manager"],
      icon: "/assets/icons/data-science.svg"
    },
    {
      id: 5,
      name: "MBA",
      degree: "Master of Business Administration",
      duration: "2 years",
      faculty: "Business School",
      description: "Advanced business concepts and leadership development.",
      careers: ["Business Consultant", "CEO", "Strategy Manager"],
      icon:"/assets/icons/mba.svg"
    }
  ]
};

const AcademicsPage = () => {
  const [activeTab, setActiveTab] = useState<keyof programItems>('undergraduate');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrograms:program[] = programs[activeTab].filter(program =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    program.faculty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-50 overflow-hidden">
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Discover our comprehensive range of programs designed to prepare you for success in your chosen field.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('undergraduate')}
                className={`px-6 py-2 rounded-full ${
                  activeTab === 'undergraduate'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Undergraduate
              </button>
              <button
                onClick={() => setActiveTab('graduate')}
                className={`px-6 py-2 rounded-full ${
                  activeTab === 'graduate'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Graduate
              </button>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search programs..."
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => {
            return (
              <div
                key={program.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Image
                      src={program.icon}
                      alt={program.name}
                      width={16}
                      height={16}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{program.name}</h3>
                      <p className="text-sm text-gray-600">{program.degree}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building2 className="w-4 h-4" />
                      <span>{program.faculty}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Career Opportunities:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {program.careers.map((career, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-600" />
                          {career}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <button className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                    Apply now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicsPage;