import React from "react";
import ContactForm from "./_components/conact_form";
import Map from "./_components/map";
import FAQSection from "./_components/FAQ";
import Link from "next/link";
import Image from "next/image";
import { icons } from "@/constants";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="py-4 px-2 lg:py-10 lg:px-8">
          <div className="px-6 py-2">
            <h1 className="text-4xl font-bold text-gray-950 py-2">
              Get in touch
            </h1>
            <p className="text-base text-gray-600 font-medium">
              We are here to help. Reach out to us for any assistance
            </p>
          </div>
          <ContactForm />
          <div className="px-6 mt-6 space-y-2">
            <div className="flex items-center gap-2">
              <Phone size={14} color="#4b5563" />
              <p className="text-base text-gray-900">+254 742 204 9247</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} color="#4b5563" />
              <p className="text-base text-gray-900">samburuwesttvc@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 py-2">
              {icons.map((item) => (
                <Link href="#" key={item.title}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Map />
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow-md lg:p-6">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <FAQSection />
      </div>
    </main>
  );
}
