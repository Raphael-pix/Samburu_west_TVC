"use client"

import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-900">404</h1>
        <p className="text-gray-600 my-4">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;