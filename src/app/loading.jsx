import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      <span className="ml-3 text-lg text-gray-600">Loading recipes...</span>
    </div>
  );
}
