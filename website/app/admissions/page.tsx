"use client"

import React, { useState } from 'react';
import { ChevronRight, Calendar, GraduationCap, DollarSign } from 'lucide-react';

interface AdmissionType {
    id: number;
    type: string;
    deadline: string;
    requirements: string[];
    tuition: string;
    documents: string[];
    scholarships: string[];
}

type AdmissionCategories = {
    freshmen: AdmissionType[];
    transfer: AdmissionType[];
}

const admissions: AdmissionCategories = {
  freshmen: [
    {
      id: 1,
      type: "Early Decision",
      deadline: "November 1, 2025",
      requirements: ["Minimum 3.5 GPA", "SAT 1200+ or ACT 25+", "Two Letters of Recommendation"],
      tuition: "$45,000/year",
      documents: ["High School Transcripts", "Standardized Test Scores", "Personal Statement"],
      scholarships: ["Merit Scholarship", "Leadership Award", "Academic Excellence Grant"]
    },
    {
      id: 2,
      type: "Regular Decision",
      deadline: "January 15, 2026",
      requirements: ["Minimum 3.0 GPA", "SAT 1100+ or ACT 23+", "One Letter of Recommendation"],
      tuition: "$45,000/year",
      documents: ["High School Transcripts", "Standardized Test Scores", "Personal Statement"],
      scholarships: ["Merit Scholarship", "Need-based Aid"]
    }
  ],
  transfer: [
    {
      id: 3,
      type: "Fall Transfer",
      deadline: "March 1, 2026",
      requirements: ["Minimum 3.0 College GPA", "24+ Transferable Credits", "Good Academic Standing"],
      tuition: "$45,000/year",
      documents: ["College Transcripts", "Course Descriptions", "Transfer Statement"],
      scholarships: ["Transfer Merit Award", "Academic Achievement Grant"]
    }
  ]
};

const AdmissionsPage = () => {
  const [activeTab, setActiveTab] = useState<keyof AdmissionCategories>('freshmen');

  return (
    <section className="bg-gray-50 overflow-hidden">
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Take the first step toward your future. Explore our admission requirements and application process.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab('freshmen')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'freshmen'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              First-Year Students
            </button>
            <button
              onClick={() => setActiveTab('transfer')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'transfer'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Transfer Students
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {admissions[activeTab].map((admission) => (
            <div
              key={admission.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-xl mb-2">{admission.type}</h3>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Calendar className="w-4 h-4" />
                    <span>Deadline: {admission.deadline}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="text-gray-600 space-y-1">
                      {admission.requirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-600" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Required Documents:</h4>
                    <ul className="text-gray-600 space-y-1">
                      {admission.documents.map((doc, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-blue-600" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Available Scholarships:</h4>
                    <ul className="text-gray-600 space-y-1">
                      {admission.scholarships.map((scholarship, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-blue-600" />
                          {scholarship}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <DollarSign className="w-4 h-4" />
                  <span>Estimated Tuition: {admission.tuition}</span>
                </div>
              </div>
              
              <div className="bg-gray-50 px-6 py-4">
                <button className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                  Start Application
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionsPage;