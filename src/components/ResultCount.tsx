import React from 'react';

interface ResultCountProps {
  count: number;
}

const ResultCount: React.FC<ResultCountProps> = ({ count }) => (
  <div className="text-gray-500 whitespace-nowrap text-sm">
    {count} result{count !== 1 && 's'}
  </div>
);

export default ResultCount;
