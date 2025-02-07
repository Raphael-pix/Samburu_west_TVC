import React from "react";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { intakeDates, programmes, programmeType, stages } from "@/constants";

interface CourseFormProps {
  onSelectChange: (title: string, selectedOption: SelectOption | null) => void;
}

const CourseForm = ({ onSelectChange }: CourseFormProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Preferred Intake
        </label>
        <Select
          name="intake"
          options={intakeDates}
          onChange={(selectedOption) =>
            onSelectChange("intake", selectedOption)
          }
          placeholder="Select your intake"
          className="basic-single"
          classNamePrefix="select"
          instanceId="intake-select"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Programme/Course
        </label>
        <Select
          name="programme"
          options={programmes}
          onChange={(selectedOption) =>
            onSelectChange("programme", selectedOption)
          }
          placeholder="Select your intake"
          className="basic-single"
          classNamePrefix="select"
          instanceId="programme-select"
          styles={{
            menuList: (provided) => ({
              ...provided,
              height: 150, // Set a high value to make sure it's above other elements
            }),
          }}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Programme Type
        </label>
        <Select
          name="programme_type"
          options={programmeType}
          onChange={(selectedOption) =>
            onSelectChange("programme_type", selectedOption)
          }
          placeholder="Select your intake"
          className="basic-single"
          classNamePrefix="select"
          instanceId="programme-type-select"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Stage/Year/Module/Level
        </label>
        <Select
          name="stage"
          options={stages}
          onChange={(selectedOption) => onSelectChange("stage", selectedOption)}
          placeholder="Select your intake"
          className="basic-single"
          classNamePrefix="select"
          instanceId="stage-select"
          styles={{
            menuList: (provided) => ({
              ...provided,
              height: 90, // Set a high value to make sure it's above other elements
            }),
          }}
        />
      </div>
    </div>
  );
};

export default CourseForm;
