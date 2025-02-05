"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  ChevronLeft,
  MapPin,
  HeartHandshake,
  ImageIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import PersonalInfo from "./_components/personal-info";
import CourseForm from "./_components/course-form";
import ContactForm from "./_components/conatct-form";

const ModelProfileSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<PersonalFormData>({
    firstName: "",
    middleName: "",
    surname: "",
    disable: false,
    title: "",
    gender: "",
    nationality: "",
    ethnicity: "",
    kcse: "",
    kcpe: "",
    county: "",
    dob: null,
    intake: "",
    programme_type: "",
    stage: "",
    programme: "",
    address: "",
    phoneNumber: "",
    postalCode: "",
    email: "",
    town:"",
  });

  const totalSteps = 3;
  const onSelectChange = (
    title: string,
    selectedOption: SelectOption | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [title]: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    console.log("agreed");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo
            formData={formData}
            setFormData={setFormData}
            onSelectChange={onSelectChange}
          />
        );

      case 2:
        return <CourseForm onSelectChange={onSelectChange} />;

      case 3:
        return (
          <ContactForm formData={formData} setFormData={setFormData}/>
        );

      default:
        return null;
    }
  };

  const StepIcon = () => {
    switch (currentStep) {
      case 1:
        return <ImageIcon className="w-6 h-6" />;
      case 2:
        return <MapPin className="w-6 h-6" />;
      case 3:
        return <HeartHandshake className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 overflow-hidden flex items-center">
      <div className="bg-white p-8 mx-auto">
        <Card className="w-full max-w-xl">
          <CardHeader>
            <div className="flex items-center space-x-2 mb-4">
              <StepIcon />
              <CardTitle>Online Course Application</CardTitle>
            </div>
            <div className="flex gap-8 items-center mt-2 mx-auto">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-11 w-11  mx-1 rounded-full flex items-center justify-center",
                    index + 1 <= currentStep ? "bg-blue-600" : "bg-n-4"
                  )}
                >
                  <span
                    className={cn(
                      "text-xl font-bold",
                      index + 1 <= currentStep ? "text-white" : "text-gray-400"
                    )}
                  >
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </CardHeader>
          <CardContent>{renderStep()}</CardContent>
          <CardFooter className="flex justify-between">
            <button
            className="px-4 py-2 bg-blue-600 text-white flex items-center rounded-lg gap-1 hover:bg-blue-700"
            onClick={() => {
              if (currentStep <= 1) {
                return
              } else {
                setCurrentStep((prev) => prev - 1);
              }
            }}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </button>
            <button
            className="px-4 py-2 bg-blue-600 text-white flex items-center rounded-lg gap-1 hover:bg-blue-700"
              onClick={() => {
                if (currentStep === totalSteps) {
                  handleSubmit();
                } else {
                  setCurrentStep((prev) => prev + 1);
                }
              }}
              disabled={loading}
            >
              {currentStep === totalSteps ? (
                loading ? (
                  "Saving..."
                ) : (
                  "Complete"
                )
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ModelProfileSetup;
