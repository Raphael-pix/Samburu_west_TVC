import { Loader } from 'lucide-react';
import React from 'react';


const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <Loader size={24} className="animate-spin h-12 w-12 text-blue-900" />
        <p className="text-gray-600 mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;