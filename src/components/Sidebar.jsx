import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Video, Target, Truck, Briefcase, Settings, Home } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', route: '/dashboard' },
  { icon: Video, label: 'Creator', route: '/creator' },
  { icon: Target, label: 'Sales', route: '/sales' },
  { icon: Truck, label: 'Logistics', route: '/logistics' },
  { icon: Briefcase, label: 'Career', route: '/career' },
  { icon: Settings, label: 'Settings', route: '/settings' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-[72px] bg-[#1F2937] border-r border-gray-700 flex flex-col items-center py-6 gap-4">
      {navItems.map(({ icon: Icon, label, route }) => {
        const isActive = location.pathname === route;
        return (
          <Link
            key={route}
            to={route}
            className={`relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 group ${
              isActive
                ? 'bg-[#4F46E5] text-white'
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
            title={label}
          >
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-8 bg-[#4F46E5] rounded-r-full" />
            )}
            <Icon className="w-5 h-5" />
            <span className="absolute left-full ml-4 px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
