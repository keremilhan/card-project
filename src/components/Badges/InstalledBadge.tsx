import { CheckCircle } from 'lucide-react';

const InstalledBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span
    className={`inline-flex items-center gap-1 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-full shadow ${className}`}
  >
    <CheckCircle className="w-4 h-4" />
    Installed
  </span>
);

export default InstalledBadge;
