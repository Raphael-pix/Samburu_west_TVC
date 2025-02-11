"use client"

import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
        <p className="text-gray-600 my-4">Something went wrong. Please try again later.</p>
        <Link href="/" className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;