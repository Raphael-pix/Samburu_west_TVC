import React from "react";

interface ContactFormProps {
  formData: PersonalFormData;
  setFormData: React.Dispatch<React.SetStateAction<PersonalFormData>>;
}

const ContactForm = ({ formData, setFormData }: ContactFormProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Email
        </label>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Phone Number
        </label>
        <input
          type="text"
          placeholder=" Phone Number"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Postal Code
        </label>
        <input
          type="text"
          placeholder=" Postal Code"
          value={formData.postalCode}
          onChange={(e) =>
            setFormData({ ...formData, postalCode: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Postal Address
        </label>
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 mb-1">Town</label>
        <input
          type="text"
          placeholder="Town"
          value={formData.town}
          onChange={(e) => setFormData({ ...formData, town: e.target.value })}
          className="w-full p-2 border rounded-md"
        />
      </div>
    </div>
  );
};

export default ContactForm;
