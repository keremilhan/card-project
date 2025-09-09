import axios from 'axios';
import type { TileType } from '../types';
import { API_ENDPOINTS } from '../api/endpoints';

export const fetchTiles = async (): Promise<TileType[]> => {
  try {
    const response = await axios.get(API_ENDPOINTS.getTiles);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Failed to fetch tiles');
  }
};

export const installTile = async (tile: TileType): Promise<TileType> => {
  try {
    const response = await axios.post(API_ENDPOINTS.installTile, {
      tile_id: tile._id,
      name: tile.name,
      metadata: tile.metadata,
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Failed to install tile');
  }
};

export const uninstallTile = async (tileId: string): Promise<TileType> => {
  try {
    const response = await axios.delete(API_ENDPOINTS.uninstallTile(tileId));
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Failed to uninstall tile');
  }
};
