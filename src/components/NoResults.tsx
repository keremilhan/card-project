import React from 'react';

const NoResults: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`h-full w-full flex-col items-center justify-center text-center text-gray-500 py-8 ${className}`}
  >
    <div className="font-semibold mb-2 text-2xl">No results found</div>
    <div className="text-xl text-gray-400">Try adjusting your search or filter criteria</div>
  </div>
);

export default NoResults;
