import IconPaid from '../Icons/IconPaid';
import IconFree from '../Icons/IconFree';

interface SubscriptionBadgeProps {
  type: 'Paid' | 'Free';
  className?: string;
}

const badgeStyles = {
  Paid: 'bg-gradient-to-r from-orange-500 to-red-500',
  Free: 'bg-gradient-to-r from-blue-400 to-emerald-400',
};

export default function SubscriptionBadge({ type, className = '' }: SubscriptionBadgeProps) {
  return (
    <div
      className={`text-white px-2 py-1 rounded-full flex items-center space-x-1 text-xs font-medium ${badgeStyles[type]} ${className}`}
    >
      {type === 'Paid' ? <IconPaid /> : <IconFree />}
      <span>{type}</span>
    </div>
  );
}
