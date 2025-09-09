import React from 'react';
import type { TileType } from '../../types';
import { SubscriptionBadge, InitialsBadge, InstalledBadge } from '../Badges';
import FavoriteButton from '../FavoriteButton';
import { useFavoriteTile } from '../../hooks/useFavoriteTile';

const TileBanner: React.FC<{ tile: TileType }> = ({ tile }) => {
  const { isFavorite, toggleFavorite } = useFavoriteTile(tile._id);
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={tile.image_path}
          alt="banner"
          className="h-36 w-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 rounded-t-2xl pointer-events-none height-full" />
      <SubscriptionBadge type={tile.subscription_type.type} className="absolute top-3 right-3" />
      <InitialsBadge name={tile.name} className="absolute -bottom-2 left-4 p-6 text-lg" />
      {tile.installed && <InstalledBadge className="absolute top-3 left-3" />}
      <FavoriteButton
        isFavorite={isFavorite}
        onClick={toggleFavorite}
        className="absolute bottom-3 right-3"
      />
    </div>
  );
};

export default TileBanner;
