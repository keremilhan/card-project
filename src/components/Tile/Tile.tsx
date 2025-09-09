import React from 'react';
import type { TileType } from '../../types';
import { TileBanner, TileContent, TileFooterActions } from './';

interface TileCardProps {
  tile: TileType;
  onClick: () => void;
}

const Tile: React.FC<TileCardProps> = ({ tile, onClick }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow flex flex-col relative cursor-pointer group hover:-translate-y-1 transition-all duration-300"
      onClick={onClick}
    >
      <TileBanner tile={tile} />
      <div className="p-4 h-full flex flex-col justify-between">
        <TileContent tile={tile} />
        <TileFooterActions tile={tile} />
      </div>
    </div>
  );
};

export default Tile;
