import React from 'react';
import TileCategory from '../TileCategory';
import type { TileType } from '../../types';

const TileFooterActions: React.FC<{ tile: TileType }> = ({ tile }) => (
  <div className="flex gap-2 mt-6 items-center justify-between group">
    <TileCategory category={tile.category} />
    <button className="text-blue-600 text-sm cursor-pointer hover:underline group-hover:underline">
      View more
    </button>
  </div>
);

export default TileFooterActions;
