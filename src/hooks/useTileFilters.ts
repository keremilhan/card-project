import { useState } from 'react';
import useDebounce from './useDebounce';
import type { TileType } from '../types';
import { filterTiles } from '../utils/filterTiles';
import type { SubscriptionType, InstalledOption } from '../types';

interface FiltersState {
  subscription: SubscriptionType;
  category: string;
  installed: InstalledOption;
}

export function useTileFilters(tiles: TileType[]) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);
  const initialFilters: FiltersState = {
    subscription: 'All',
    category: 'All',
    installed: 'All',
  };
  const [filters, setFilters] = useState<FiltersState>(initialFilters);

  const filteredTiles = filterTiles(tiles, filters, debouncedSearch);

  return {
    filters,
    setFilters,
    search,
    setSearch,
    debouncedSearch,
    filteredTiles,
  };
}
