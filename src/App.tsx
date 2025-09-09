import { useTiles } from './hooks/useTiles';
import { useTileFilters } from './hooks/useTileFilters';
import TileGrid from './components/TileGrid';
import { SearchBar } from './components/SearchBar';
import FilterBar from './components/FilterBar/FilterBar';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { categories, subscriptionTypes, installedOptions } from './constants/filters';
import PageHeader from './components/PageHeader';
import ResultCount from './components/ResultCount';
import type { InstalledOption, SubscriptionType } from './types';

function App() {
  const { tiles, loading, error, setTiles } = useTiles();
  const { filters, setFilters, search, setSearch, filteredTiles } = useTileFilters(tiles);

  return (
    <div className="container px-4 py-8 mx-auto">
      <PageHeader />
      <div className="flex flex-wrap gap-4 my-6 items-center">
        <SearchBar value={search} onChange={setSearch} />
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <FilterBar
              label="Subscription"
              value={filters.subscription}
              options={subscriptionTypes}
              onChange={(val) =>
                setFilters((f) => ({ ...f, subscription: val as SubscriptionType }))
              }
            />
            <FilterBar
              label="Category"
              value={filters.category}
              options={categories}
              onChange={(val) => setFilters((f) => ({ ...f, category: val }))}
            />
            <FilterBar
              label="Installed"
              value={filters.installed}
              options={installedOptions}
              onChange={(val) => setFilters((f) => ({ ...f, installed: val as InstalledOption }))}
            />
          </div>
          <ResultCount count={filteredTiles.length} />
        </div>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <TileGrid tiles={filteredTiles} setTiles={setTiles} />
      )}
    </div>
  );
}

export default App;
