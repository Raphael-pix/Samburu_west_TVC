import React from "react";
import ArticleItem from "./_components/article_item";
import { articles, events } from "@/constants";
import EventsCarousel from "./_components/carousel";
import EventItem from "./_components/event_item";

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <EventsCarousel />
      <div className="px-6 p-2 mb-4 mt-2">
        <h1 className="text-3xl font-bold">Latest News</h1>
      </div>
      <div className=" mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {articles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
        </div>
      </div>
      <div className="px-6 p-2 mb-4 mt-2">
        <h1 className="text-3xl font-bold">Upcoming events</h1>
      </div>
      <div className="mx-auto px-6 pb-6 w-full flex items-center gap-4 overflow-hidden overflow-x-scroll hidden-scrollbar whitespace-nowrap">
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
