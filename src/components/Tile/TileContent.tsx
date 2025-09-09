import React from 'react';
import type { TileType } from '../../types';

const TileContent: React.FC<{ tile: TileType }> = ({ tile }) => (
  <div>
    <div className="flex items-center justify-between gap-2 mb-2">
      <span
        className="font-semibold text-lg group-hover:text-blue-600 transition-colors"
        title={tile.name}
      >
        {tile.name.length > 32 ? tile.name.slice(0, 32) + '…' : tile.name}
      </span>
    </div>
    <div className="text-gray-600 text-sm mb-2">{tile.short_description}</div>
  </div>
);

export default TileContent;
