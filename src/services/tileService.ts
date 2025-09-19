import tiles from '../data/tiles.json';
import type { TileType } from '../types';

export const fetchTiles = async (): Promise<TileType[]> => {
  // Eksik 'installed' alanını false olarak ekle
  return (tiles as Partial<TileType>[]).map((tile) => ({
    ...tile,
    installed: typeof tile.installed === 'boolean' ? tile.installed : false,
  })) as TileType[];
};

// installTile ve uninstallTile fonksiyonları devre dışı bırakıldı, backend olmadığı için kullanılmıyor.
