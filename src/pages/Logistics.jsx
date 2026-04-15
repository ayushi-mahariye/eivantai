import React from 'react';
import { motion } from 'framer-motion';
import { GlassmorphicCard } from '../components/GlassmorphicCard';
import { AlertCircle } from 'lucide-react';

export function Logistics() {
  const alerts = [
    { priority: 'high', item: 'Lithium Battery Cells', warehouse: 'Shanghai Warehouse', quantity: 120, alert: 'Below safety threshold' },
    { priority: 'high', item: 'Microchip Module X7', warehouse: 'Mumbai Hub', quantity: 45, alert: 'Supplier delay reported' },
    { priority: 'medium', item: 'Packaging Materials', warehouse: 'London Depot', quantity: 800, alert: 'Reorder recommended' },
    { priority: 'medium', item: 'Steel Components', warehouse: 'São Paulo Center', quantity: 350, alert: 'Stock running low' },
    { priority: 'low', item: 'Plastic Casings', warehouse: 'NYC Distribution', quantity: 1200, alert: 'Adequate stock' },
    { priority: 'low', item: 'Assembly Tools', warehouse: 'Tokyo Facility', quantity: 500, alert: 'Normal levels' },
  ];

  const priorityStyles = {
    high: { dot: 'bg-[#4F46E5] shadow-[0_0_8px_#4F46E5]', text: 'text-[#4F46E5]' },
    medium: { dot: 'bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]', text: 'text-yellow-600' },
    low: { dot: 'bg-gray-400', text: 'text-gray-500' },
  };

  const locations = [
    { name: 'NYC', x: '25%', y: '35%' },
    { name: 'London', x: '48%', y: '30%' },
    { name: 'Shanghai', x: '75%', y: '40%' },
    { name: 'Mumbai', x: '68%', y: '50%' },
    { name: 'São Paulo', x: '32%', y: '70%' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold text-gray-900">Global Supply Chain Control</h1>

      <div className="bg-white rounded-2xl border border-gray-200 min-h-[400px] relative overflow-hidden p-6">
        <div className="absolute top-4 left-4 text-sm text-[#4F46E5] z-10">Real-time Global Routes</div>
        
        <svg viewBox="0 0 800 400" className="w-full h-full opacity-30">
          <path
            d="M 50 150 Q 200 100 350 150 T 650 150"
            stroke="rgba(79, 70, 229, 0.2)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 200 140 Q 400 200 600 200"
            stroke="rgba(79, 70, 229, 0.2)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>

        {locations.map((loc, i) => (
          <motion.div
            key={loc.name}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="absolute w-4 h-4 rounded-full bg-[#4F46E5] animate-pulse-blue"
            style={{ left: loc.x, top: loc.y, transform: 'translate(-50%, -50%)' }}
          >
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#4F46E5] whitespace-nowrap">
              {loc.name}
            </div>
          </motion.div>
        ))}
      </div>

      <GlassmorphicCard>
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="w-6 h-6 text-[#4F46E5]" />
          <h3 className="text-xl font-semibold text-gray-900">Inventory Alerts</h3>
        </div>
        <div className="space-y-4">
          {alerts.map((alert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0"
            >
              <div className={`w-2 h-2 rounded-full mt-2 ${priorityStyles[alert.priority].dot}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <p className="font-medium text-gray-900">{alert.item}</p>
                  <span className={`text-xs font-medium uppercase ${priorityStyles[alert.priority].text}`}>
                    {alert.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{alert.warehouse} • {alert.quantity} units</p>
                <p className="text-xs text-gray-500 mt-1">{alert.alert}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassmorphicCard>
    </motion.div>
  );
}
