import React, { useState } from 'react';
import type { TileType } from '../types';
import { Tile } from './Tile';
import { TileModal } from './TileModal';
import NoResults from './NoResults';

interface TileGridProps {
  tiles: TileType[];
  setTiles: React.Dispatch<React.SetStateAction<TileType[]>>;
}

const TileGrid: React.FC<TileGridProps> = ({ tiles, setTiles }) => {
  const [selectedTile, setSelectedTile] = useState<TileType | null>(null);

  const handleTileClick = (tile: TileType) => {
    setSelectedTile(tile);
  };

  const handleCloseModal = () => {
    setSelectedTile(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tiles.length > 0 ? (
          tiles.map((tile, index) => (
            <Tile key={index} tile={tile} onClick={() => handleTileClick(tile)} />
          ))
        ) : (
          <NoResults className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4" />
        )}
      </div>
      {selectedTile && (
        <TileModal tile={selectedTile} onClose={handleCloseModal} setTiles={setTiles} />
      )}
    </div>
  );
};

export default TileGrid;
