import React from 'react'
import { ChevronRight, Clock, User } from 'lucide-react'
import Image from 'next/image'


interface ArticleProps {
    article:{
        id: number;
        title:string;
        description:string;
        author?:string ,
        timeAgo: string,
        category?: string,
        image: string,
    }
}

const ArticleItem = ({article}:ArticleProps) => {
  return (
    <div
    key={article.id}
    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
  >
    <Image
      src={article.image}
      alt={article.title}
      width={150}
      height={150}
      className="w-full h-40 object-cover"
    />
    <div className="p-2 lg:p-6">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-gray-500" />
          <span className="text-xs text-gray-600">
            {article.author}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-xs text-gray-600">
            {article.timeAgo}
          </span>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2 hover:text-blue-600 cursor-pointer text-wrap">
        {article.title}
      </h2>
      <p className="text-gray-600 line-clamp-2 text-sm">
        {article.description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <button className="ml-auto text-blue-600 flex items-center gap-1 hover:underline">
          Read more
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default ArticleItem
