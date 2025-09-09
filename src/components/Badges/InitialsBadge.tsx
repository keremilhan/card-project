import React from 'react';
import { getInitials } from '../../utils/helpers';

interface InitialsBadgeProps {
  name: string;
  className?: string;
}

const InitialsBadge: React.FC<InitialsBadgeProps> = ({ name, className = '' }) => {
  return (
    <div
      className={`h-8 w-8 rounded-xl bg-white flex items-center justify-center text-blue-700 font-bold text-3xl border-2 border-white ${className}`}
    >
      {getInitials(name)}
    </div>
  );
};

export default InitialsBadge;
