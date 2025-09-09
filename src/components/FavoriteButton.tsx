import { Heart, HeartOff } from 'lucide-react';
import React from 'react';

const FavoriteButton: React.FC<{
  isFavorite: boolean;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}> = ({ isFavorite, onClick, className }) => (
  <button
    className={`z-10 bg-white/90 rounded-full p-2 shadow hover:bg-pink-100 transition cursor-pointer ${className}`}
    onClick={onClick}
    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
  >
    {isFavorite ? (
      <Heart className="text-pink-500 fill-pink-400" />
    ) : (
      <HeartOff className="text-gray-400" />
    )}
  </button>
);

export default FavoriteButton;
