import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { TileType } from '../../types';
import axios from 'axios';
import { API_ENDPOINTS } from '../../api/endpoints';
import { InitialsBadge, SubscriptionBadge } from '../Badges';
import TileCategory from '../TileCategory';
import { X } from 'lucide-react';
import FullDescription from './FullDescription';
import PaymentDialog from '../PaymentDialog';
import { useFavoriteTile } from '../../hooks/useFavoriteTile';
import FavoriteButton from '../FavoriteButton';

interface TileModalProps {
  tile: TileType;
  onClose: () => void;
  setTiles: React.Dispatch<React.SetStateAction<TileType[]>>;
}

const TileModal: React.FC<TileModalProps> = ({ tile, onClose, setTiles }) => {
  const { isFavorite, toggleFavorite } = useFavoriteTile(tile._id);
  const [showPaymentDialog, setShowPaymentDialog] = React.useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleInstall = async () => {
    if (tile.subscription_type.type === 'Paid') {
      setShowPaymentDialog(true);
      return;
    }
    try {
      const res = await axios.post(API_ENDPOINTS.installTile, {
        tile_id: tile._id,
        name: tile.name,
        metadata: tile.metadata,
      });
      const updatedTile = res.data;
      setTiles((prevTiles) =>
        prevTiles.map((t) =>
          t._id === updatedTile._id ? { ...t, installed: updatedTile.installed } : t,
        ),
      );
      onClose();
    } catch (err) {
      alert('Install failed: ' + err);
    }
  };

  const handlePaymentAgree = async () => {
    setShowPaymentDialog(false);
    try {
      const res = await axios.post(API_ENDPOINTS.installTile, {
        tile_id: tile._id,
        name: tile.name,
        metadata: tile.metadata,
      });
      const updatedTile = res.data;
      setTiles((prevTiles) =>
        prevTiles.map((t) =>
          t._id === updatedTile._id ? { ...t, installed: updatedTile.installed } : t,
        ),
      );
      onClose();
    } catch (err) {
      alert('Install failed: ' + err);
    }
  };

  const handlePaymentCancel = () => {
    setShowPaymentDialog(false);
  };

  const handleUninstall = async () => {
    try {
      const res = await axios.delete(API_ENDPOINTS.uninstallTile(tile._id));
      const updatedTile = res.data;
      setTiles((prevTiles) =>
        prevTiles.map((t) =>
          t._id === updatedTile._id ? { ...t, installed: updatedTile.installed } : t,
        ),
      );
      onClose();
    } catch (err) {
      alert('Uninstall failed: ' + err);
    }
  };

  const modalContent = (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl relative">
        <div className="relative overflow-hidden">
          <img
            src={tile.image_path}
            alt="banner"
            className="h-48 w-full object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={toggleFavorite}
            className="absolute bottom-4 right-4"
          />
          <SubscriptionBadge
            type={tile.subscription_type.type}
            className="absolute top-4 left-4 px-3 py-2 text-lg font-medium w-fit"
          />
          <InitialsBadge name={tile.name} className="absolute -bottom-4 left-6 p-8" />
        </div>
        <div className="overflow-y-auto max-h-60 p-6">
          <div className="mb-2">
            <div className="font-bold text-2xl truncate max-w-[240px]" title={tile.name}>
              {tile.name}
            </div>
            <TileCategory
              category={tile.category}
              className="w-fit bg-gray-100 text-gray-600 rounded-xl font-semibold mt-4"
            />
          </div>
          <h3 className="font-semibold text-lg mt-4">About</h3>
          <div className="text-gray-600 text-sm mb-2">
            <FullDescription description={tile.complete_description} />
          </div>
          <div className="flex gap-4 mt-4">
            {!tile.installed ? (
              <button
                className="px-4 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 cursor-pointer w-full"
                onClick={handleInstall}
              >
                Install
              </button>
            ) : (
              <button
                className="px-4 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 cursor-pointer w-full"
                onClick={handleUninstall}
              >
                Uninstall
              </button>
            )}
            <button
              className="ml-auto px-4 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 cursor-pointer"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <PaymentDialog
            open={showPaymentDialog}
            onAgree={handlePaymentAgree}
            onCancel={handlePaymentCancel}
            price={tile.subscription_type.cost}
          />
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default TileModal;
