"use client";

import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="px-6 py-2 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-900 mb-1">
            First name
          </label>
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-900 mb-1">
            Last name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Subject
        </label>
        <input
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Message
        </label>
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full p-2 border rounded-md min-h-[150px]"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
