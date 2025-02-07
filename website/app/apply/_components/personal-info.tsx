import React from "react";
import Select from "react-select";
import * as Checkbox from "@radix-ui/react-checkbox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CheckIcon } from "lucide-react";
import {
  counties,
  ethnicity,
  genders,
  nationalities,
  titles,
} from "@/constants";

interface PersonalInfoProps {
  formData: PersonalFormData;
  setFormData: React.Dispatch<React.SetStateAction<PersonalFormData>>;
  onSelectChange: (title: string, selectedOption: SelectOption | null) => void;
}

const PersonalInfo = ({
  formData,
  setFormData,
  onSelectChange,
}: PersonalInfoProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2 flex flex-col items-center gap-4 lg:flex-row">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900 mb-1">
            First Name
          </label>
          <input
            type="text"
            placeholder="First name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900 mb-1">
            Middle Name
          </label>
          <input
            type="text"
            placeholder="Middle name"
            value={formData.middleName}
            onChange={(e) =>
              setFormData({ ...formData, middleName: e.target.value })
            }
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Surname
        </label>
        <input
          type="text"
          placeholder="Surname"
          value={formData.surname}
          onChange={(e) =>
            setFormData({ ...formData, surname: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="space-y-2 flex flex-col">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Date of Birth
        </label>
        <DatePicker
          id="dob"
          selected={formData.dob}
          onChange={(date: Date | null) => ({ ...formData, dob: date })}
          dateFormat="yyyy-MM-dd"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100} // Allows scrolling through 100 years
          maxDate={new Date()} // Restricts future dates
          placeholderText="Select your date of birth"
          className="border p-2 rounded w-full text-gray-700"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox.Root
          id="disability"
          className="w-5 h-5 rounded border border-n-4 bg-n-5 flex items-center justify-center"
          onCheckedChange={(checked) => {
            setFormData({ ...formData, disable: checked === true });
          }}
        >
          <Checkbox.Indicator>
            <CheckIcon className="w-4 h-4 text-green-600" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          htmlFor="disability"
          className="text-sm font-semibold text-gray-900"
        >
          Living with disability
        </label>
      </div>
      <div className="space-y-2 flex flex-col gap-4 lg:items-center lg:flex-row">
        <div className="flex-1 space-y-2">
          <label className="text-sm font-semibold text-gray-900 mb-1">
            Title
          </label>
          <Select
            name="title"
            options={titles}
            onChange={(selectedOption) =>
              onSelectChange("title", selectedOption)
            }
            placeholder="Select your title"
            className="basic-single"
            classNamePrefix="select"
            instanceId="title-select"
          />
        </div>
        <div className="flex-1 space-y-2">
          <label className="text-sm font-semibold text-gray-900 mb-1">
            Gender
          </label>
          <Select
            name="gender"
            options={genders}
            onChange={(selectedOption) =>
              onSelectChange("gender", selectedOption)
            }
            placeholder="Select your gender"
            className="basic-single"
            classNamePrefix="select"
            instanceId="gender-select"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Nationality
        </label>
        <Select
          name="nationality"
          options={nationalities}
          onChange={(selectedOption) =>
            onSelectChange("nationality", selectedOption)
          }
          placeholder="Select your nationality"
          className="basic-single"
          classNamePrefix="select"
          instanceId="nationality-select"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Ethnicity
        </label>
        <Select
          name="ethnicity"
          options={ethnicity}
          onChange={(selectedOption) =>
            onSelectChange("ethnicity", selectedOption)
          }
          placeholder="Select your ethnicity"
          className="basic-single"
          classNamePrefix="select"
          instanceId="ethnicity-select"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          County/State/Provinces
        </label>
        <Select
          name="county"
          options={counties}
          onChange={(selectedOption) =>
            onSelectChange("county", selectedOption)
          }
          placeholder="Select your ethnicity"
          className="basic-single"
          classNamePrefix="select"
          instanceId="county-select"
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
          KCSE Index number
        </label>
        <input
          type="text"
          placeholder="KCSE Index number"
          value={formData.kcse}
          onChange={(e) => setFormData({ ...formData, kcse: e.target.value })}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          KCPE Index number
        </label>
        <input
          type="text"
          placeholder="KCPE Index number"
          value={formData.kcpe}
          onChange={(e) => setFormData({ ...formData, kcpe: e.target.value })}
          className="w-full p-2 border rounded-md"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
