# Card Project Frontend

A responsive frontend for a tile-based app store interface. Users can browse, search, filter, and favorite tiles, view details in a modal, and install/uninstall tiles. Built with React, TypeScript, and Tailwind CSS. Dockerized for easy setup.

## Features

- Responsive grid of tiles
- Search by name and description (debounced)
- Filter and sort tiles
- View details in modal
- Install/uninstall
- Favorite tiles (localStorage)
- Payment confirmation for paid tiles

## Technical Notes

- Search uses a debounced custom hook for smooth UX.
- Favorite state is managed with a custom hook and localStorage.
- Payment confirmation is handled via a modal dialog.
- Components and hooks are organized by feature.

## Getting Started

### Prerequisites

- Docker

### Run with Docker

```sh
docker build -t card-project .
docker run -p 3000:80 card-project
```

App runs at [http://localhost:3000](http://localhost:3000).

### Development

```sh
npm install
npm run dev
```

## Structure

- `src/components/` – UI components
- `src/hooks/` – Custom hooks
- `src/utils/` – Utility functions
- `src/api/` – API endpoints

## Notes

- Favorites are stored in localStorage.

## License

This project is for demonstration and interview purposes.

---
