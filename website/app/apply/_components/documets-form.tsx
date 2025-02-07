import React from "react";
import Select from "react-select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { EyeClosed } from "lucide-react";

interface DocumentUploadFormProps {
  onSelectChange: (title: string, selectedOption: SelectOption | null) => void;
}

const DocumentUploadForm = ({ onSelectChange }: DocumentUploadFormProps) => {
  return (
    <div className="space-y-4">
      <Alert className="bg-blue-50 text-blue-800 border-blue-200">
        <AlertDescription>
          Please ensure all documents are clear, legible scans or photos.
          Accepted formats: PDF, JPG, PNG (Max size: 5MB per file)
        </AlertDescription>
      </Alert>

      {/* KCSE/KCPE Document */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">KCSE/KCPE Results *</label>
        <Select
          name="certificate"
          options={[
            {
              label: "KCSE Certificate/Result Slip",
              value: "KCSE Certificate",
            },
            { label: "KCPE Certificate", value: "KCPE Certificate" },
          ]}
          onChange={(selectedOption) =>
            onSelectChange("certificate", selectedOption)
          }
          placeholder="Select your certificate"
          className="basic-single"
          classNamePrefix="select"
          instanceId="certificate-select"
        />
        <div className="flex items-center gap-4">
          <input
            type="file"
            className="w-full p-2 border rounded-md"
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <button className="px-4 py-2">
            <EyeClosed size={16} color="#232323" />
          </button>
        </div>
      </div>

      {/* School Leaving Certificate */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          School Leaving Certificate *
        </label>
        <div className="flex items-center gap-4">
          <input
            type="file"
            className="w-full p-2 border rounded-md"
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <button className="px-4 py-2">
            <EyeClosed size={16} color="#232323" />
          </button>
        </div>
      </div>

      {/* ID/Passport */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          National ID or Passport *
        </label>
        <Select
          name="identification"
          options={[
            {
              label: "National ID",
              value: "national_id",
            },
            { label: "Passport", value: "passport" },
          ]}
          onChange={(selectedOption) =>
            onSelectChange("identification", selectedOption)
          }
          placeholder="Select your identification"
          className="basic-single"
          classNamePrefix="select"
          instanceId="identification-select"
        />
        <div className="flex items-center gap-4">
          <input
            type="file"
            className="w-full p-2 border rounded-md"
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <button className="px-4 py-2">
            <EyeClosed size={16} color="#232323" />
          </button>
        </div>
      </div>

      {/* Birth Certificate */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">Birth Certificate *</label>
        <div className="flex items-center gap-4">
          <input
            type="file"
            className="w-full p-2 border rounded-md"
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <button className="px-4 py-2">
            <EyeClosed size={16} color="#232323" />
          </button>
        </div>
      </div>

      {/* Application Form */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Completed Application Form *
        </label>
        <Select
          name="identification"
          options={[
            { label: "KUCCPS Sponsorship Form", value: "kuccps" },
            {
              label: "Self-sponsership Form",
              value: "institution",
            },
          ]}
          onChange={(selectedOption) =>
            onSelectChange("identification", selectedOption)
          }
          placeholder="Select your identification"
          className="basic-single"
          classNamePrefix="select"
          instanceId="identification-select"
        />
        <div className="flex items-center gap-4">
          <input
            type="file"
            className="w-full p-2 border rounded-md"
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <button className="px-4 py-2">
            <EyeClosed size={16} color="#232323" />
          </button>
        </div>
      </div>

      {/* Passport Photos */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Passport-sized Photos (2-4 copies) *
        </label>
        <div className="flex items-center gap-4">
          <input
            type="file"
            className="w-full p-2 border rounded-md"
            accept=".jpg,.jpeg,.png"
            multiple
          />
          <button className="px-4 py-2">
            <EyeClosed size={16} color="#232323" />
          </button>
        </div>
        <p className="text-sm text-gray-500">
          Upload 2-4 recent passport-sized photographs
        </p>
      </div>
    </div>
  );
};

export default DocumentUploadForm;
