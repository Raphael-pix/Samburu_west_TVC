import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {["ADMISSIONS", "PROJECTS", "DOWNLOADS", "FACILITIES"].map(
            (title, index) => (
              <div
                key={index}
                className="transform transition-all duration-500 hover:translate-y-[-10px]"
              >
                <h4 className="font-semibold mb-4">{title}</h4>
                <ul className="space-y-2 text-sm">
                  <li className="transition-all duration-300 hover:text-blue-300 cursor-pointer">
                    Process
                  </li>
                  <li className="transition-all duration-300 hover:text-blue-300 cursor-pointer">
                    Structure
                  </li>
                  <li className="transition-all duration-300 hover:text-blue-300 cursor-pointer">
                    Resources
                  </li>
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
