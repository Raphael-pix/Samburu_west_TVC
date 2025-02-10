import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { EyeClosed } from "lucide-react";

interface DocumentFormProps {
  formData: PersonalFormData;
  setFormData: React.Dispatch<React.SetStateAction<PersonalFormData>>;
}

const DocumentUploadForm = ({formData,setFormData}:DocumentFormProps) => {
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
        <label className="text-sm font-semibold text-gray-900 mb-1">
          KCPE Results *
        </label>
        <div className="flex items-center gap-4">
          <input
            type="file"
            className="w-full p-2 border rounded-md"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) =>
              setFormData({ ...formData, kcpeResults: e.target.value })
            }
          />
          <button className="px-4 py-2">
            <EyeClosed size={16} color="#232323" />
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          KCSE Results *
        </label>
        <div className="flex items-center gap-4">
          <input
            type="file"
            className="w-full p-2 border rounded-md"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) =>
              setFormData({ ...formData, kcseResults: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, leavingCertificate: e.target.value })
            }
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
        <div className="flex items-center gap-4">
          <input
            type="file"
            className="w-full p-2 border rounded-md"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) =>
              setFormData({ ...formData, NationalID: e.target.value })
            }
          />
          <button className="px-4 py-2">
            <EyeClosed size={16} color="#232323" />
          </button>
        </div>
      </div>

      {/* Birth Certificate */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Birth Certificate *
        </label>
        <div className="flex items-center gap-4">
          <input
            type="file"
            className="w-full p-2 border rounded-md"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) =>
              setFormData({ ...formData, birthCertificate: e.target.value })
            }
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
        <div className="flex items-center gap-4">
          <input
            type="file"
            className="w-full p-2 border rounded-md"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) =>
              setFormData({ ...formData, applicationForm: e.target.value })
            }
          />
          <button className="px-4 py-2">
            <EyeClosed size={16} color="#232323" />
          </button>
        </div>
      </div>

      {/* Passport Photos fix setformdata*/}
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
            onChange={(e) =>
              setFormData({ ...formData, passports: [e.target.value] })
            }
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
