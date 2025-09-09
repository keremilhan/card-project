import { useState, useEffect, useCallback } from 'react';

export function getFavoriteTiles() {
  try {
    return JSON.parse(localStorage.getItem('favoriteTiles') || '[]');
  } catch {
    return [];
  }
}

export function useFavoriteTile(tileId: string) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const updateFavorite = () => {
      const favorites = getFavoriteTiles();
      setIsFavorite(favorites.includes(tileId));
    };
    updateFavorite();
    window.addEventListener('storage', updateFavorite);
    return () => {
      window.removeEventListener('storage', updateFavorite);
    };
  }, [tileId]);

  const toggleFavorite = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      const favorites = getFavoriteTiles();
      let updated;
      if (favorites.includes(tileId)) {
        updated = favorites.filter((id: string) => id !== tileId);
      } else {
        updated = [...favorites, tileId];
      }
      localStorage.setItem('favoriteTiles', JSON.stringify(updated));
      setIsFavorite(updated.includes(tileId));
      window.dispatchEvent(new StorageEvent('storage'));
    },
    [tileId],
  );

  return { isFavorite, toggleFavorite };
}
