import React from 'react';

interface TileCategoryProps {
  category: string;
  className?: string;
}

const TileCategory: React.FC<TileCategoryProps> = ({ category, className }) => {
  return (
    <span
      className={`text-xs bg-gray-100 rounded px-2 py-1 font-medium text-gray-600 ${className}`}
    >
      {category}
    </span>
  );
};

export default TileCategory;
