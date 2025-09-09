import { useState, useEffect } from 'react';
import { fetchTiles } from '../services/tileService';
import type { TileType } from '../types';

export function useTiles() {
  const [tiles, setTiles] = useState<TileType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchTiles();
        setTiles(data);
        setError('');
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(`Failed to fetch tiles: ${err.message}`);
        } else {
          setError('Failed to fetch tiles: Unknown error');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { tiles, loading, error, setTiles };
}
