import React from 'react';

export function GlassmorphicCard({ children, className = '' }) {
  return (
    <div className={`bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 ease-out hover:border-[#4F46E5] hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
}
