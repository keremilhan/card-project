import type { TileType } from '../types';

interface TileFilters {
  subscription: string;
  category: string;
  installed: string;
}

export function filterTiles(
  tiles: TileType[],
  filters: TileFilters,
  debouncedSearch: string,
): TileType[] {
  return tiles.filter((tile) => {
    const matchesSearch =
      tile.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      tile.short_description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      tile.complete_description.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesSubscription =
      filters.subscription === 'All' || tile.subscription_type.type === filters.subscription;
    const matchesCategory = filters.category === 'All' || tile.category === filters.category;
    const matchesInstalled =
      filters.installed === 'All' ||
      (filters.installed === 'Installed' && tile.installed) ||
      (filters.installed === 'Not Installed' && !tile.installed);
    return matchesSearch && matchesSubscription && matchesCategory && matchesInstalled;
  });
}
