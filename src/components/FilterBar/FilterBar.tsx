import { ChevronDown } from 'lucide-react';
import React from 'react';

interface FilterBarProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ label, value, options, onChange }) => {
  return (
    <div className="flex flex-col w-full max-w-xs">
      <label className="text-xs text-gray-500 mb-1 pl-1">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-full max-w-[240px] bg-white appearance-none"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <ChevronDown className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
};

export default FilterBar;
