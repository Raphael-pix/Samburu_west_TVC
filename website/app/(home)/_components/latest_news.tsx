import React from "react";
import { ClockIcon } from "lucide-react";

const LatestNews = () => {
  const newsItems = [
    {
      date: "December 26, 2017",
      summary: "New student registration for the upcoming term is now open.",
    },
    {
      date: "December 26, 2017",
      summary: "Campus renovations have begun to improve student facilities.",
    },
    {
      date: "December 26, 2017",
      summary: "Upcoming student council elections – get ready to vote!",
    },
  ];

  return (
    <section className="hidden container mx-auto px-6 absolute -top-[52px] right-12 z-50 lg:block">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-[20rem] ml-auto">
        {/* Title Section */}
        <div className="bg-blue-600 text-white text-lg font-semibold py-3 px-6">
          LATEST NEWS
        </div>

        {/* News List */}
        <div className="p-6 space-y-6">
          {newsItems.map((news, index) => (
            <div key={index} className="gap-4 border-b pb-4">
              <div className="text-gray-500 flex items-center gap-1">
                <ClockIcon size={16} />{" "}
                {/* Replace with an actual clock icon */}
                <span className="text-sm">{news.date}</span>
              </div>
              <p className="text-gray-700 text-sm">{news.summary}</p>
            </div>
          ))}
        </div>

        {/* See All News Button */}
        <div className="px-6 py-4 border-t">
          <a href="/news" className="text-blue-600 font-medium">
            SEE ALL NEWS →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
