import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-6 lg:px-18 lg:py-16">
      <div className="container px-2 lg:mx-auto lg:px-6">
        <div className="flex items-center justify-between  lg:px-6 lg:gap-8 max-lg:block space-y-8">
          <div>
            <p>A2, Archers Post</p>
            <p>samburuwesttvc@gmail.com</p>
            <p>+254 742 204 9247</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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

          <div>
            <h4 className="font-semibold mb-4">Contact us</h4>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 rounded text-gray-900"
            />
            <button className="min-w-[8rem] mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
