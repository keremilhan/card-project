const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ENDPOINTS = {
  getTiles: `${API_BASE_URL}/tiles`,
  installTile: `${API_BASE_URL}/tiles/install`,
  uninstallTile: (tileId: string) => `${API_BASE_URL}/tiles/${tileId}`,
};
