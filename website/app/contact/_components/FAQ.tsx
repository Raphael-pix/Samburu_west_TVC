"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqSections = [
    {
      title: "Admissions & Enrollment",
      items: [
        {
          id: "apply",
          question: "How do I apply for admission?",
          answer: (
            <>
              <p>Follow these steps to apply for admission:</p>
              <ol className="list-decimal ml-4 mt-2 space-y-2">
                <li>Visit the university website and go to the Admissions page.</li>
                <li>Choose your desired program and check the eligibility criteria.</li>
                <li>Fill out the online application form and upload the required documents.</li>
                <li>Pay the application fee and submit your application.</li>
                <li>Wait for an email confirmation and further instructions.</li>
              </ol>
            </>
          ),
        },
        {
          id: "documents-required",
          question: "What documents are required for admission?",
          answer: (
            <>
              <p>For your application, you will need to submit:</p>
              <ul className="list-disc ml-4 mt-2 space-y-2">
                <li>Completed application form</li>
                <li>High school or previous academic transcripts</li>
                <li>Proof of identity (passport, national ID, etc.)</li>
                <li>Letter of recommendation (if required)</li>
                <li>Statement of purpose or personal essay</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: "Academics & Courses",
      items: [
        {
          id: "course-registration",
          question: "How do I register for courses?",
          answer: (
            <>
              <p>Follow these steps to register for your courses:</p>
              <ol className="list-decimal ml-4 mt-2 space-y-2">
                <li>Log in to the student portal using your university credentials.</li>
                <li>Navigate to the Course Registration section.</li>
                <li>Select your preferred courses based on your program requirements.</li>
                <li>Confirm your selection and submit your registration.</li>
                <li>Check your email for confirmation and timetable details.</li>
              </ol>
            </>
          ),
        },
        {
          id: "grading-system",
          question: "What is the grading system at the university?",
          answer: (
            <>
              <p>The university follows this grading scale:</p>
              <ul className="list-disc ml-4 mt-2 space-y-2">
                <li><strong>A (90-100)</strong> - Excellent</li>
                <li><strong>B (80-89)</strong> - Good</li>
                <li><strong>C (70-79)</strong> - Satisfactory</li>
                <li><strong>D (60-69)</strong> - Pass</li>
                <li><strong>F (Below 60)</strong> - Fail</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: "Student Services & Campus Life",
      items: [
        {
          id: "housing-options",
          question: "What are the housing options available?",
          answer: (
            <>
              <p>The university offers the following housing options:</p>
              <ul className="list-disc ml-4 mt-2 space-y-2">
                <li>On-campus dormitories with shared or private rooms.</li>
                <li>Off-campus housing partnerships for students.</li>
                <li>Assistance with finding private rentals near campus.</li>
              </ul>
            </>
          ),
        },
        {
          id: "student-support",
          question: "What student support services are available?",
          answer: (
            <>
              <p>The university provides various support services, including:</p>
              <ul className="list-disc ml-4 mt-2 space-y-2">
                <li>Academic advising and counseling.</li>
                <li>Mental health and wellness support.</li>
                <li>Career services and internship placement assistance.</li>
                <li>Clubs, student organizations, and extracurricular activities.</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: "Common Issues",
      items: [
        {
          id: "reset-password",
          question: "How do I reset my student portal password?",
          answer: (
            <>
              <p>If you’ve forgotten your password, follow these steps:</p>
              <ol className="list-decimal ml-4 mt-2 space-y-2">
                <li>Go to the student portal login page and click &quot;Forgot Password&quot;.</li>
                <li>Enter your registered email address.</li>
                <li>Check your email for a password reset link and follow the instructions.</li>
                <li>Set a new password and confirm it.</li>
                <li>Log in with your new password.</li>
              </ol>
            </>
          ),
        },
        {
          id: "technical-support",
          question: "How do I contact technical support?",
          answer: (
            <>
              <p>If you’re experiencing technical issues, contact the IT support team:</p>
              <ul className="list-disc ml-4 mt-2 space-y-2">
                <li>Email: support@university.edu</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Visit the IT Help Desk located in the main library.</li>
              </ul>
            </>
          ),
        },
      ],
    },
  ];
  

export default function FAQSection() {

  return (
      <div>
        <div className="grid gap-6">
          {faqSections.map(
            (section) =>
              section.items.length > 0 && (
                <Card key={section.title}>
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {section.items.map((item) => (
                        <AccordionItem key={item.id} value={item.id}>
                          <AccordionTrigger>{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              )
          )}
        </div>
      </div>
  );
}
