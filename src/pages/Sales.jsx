import React from 'react';
import { motion } from 'framer-motion';
import { GlassmorphicCard } from '../components/GlassmorphicCard';

export function Sales() {
  const columns = [
    {
      name: 'Cold',
      count: 5,
      leads: [
        { name: 'Sarah Chen', company: 'Stripe', role: 'VP Engineering', status: 'cold' },
        { name: 'Marcus Rivera', company: 'Notion', role: 'Head of Growth', status: 'cold' },
        { name: 'Aisha Patel', company: 'Linear', role: 'CTO', status: 'cold' },
        { name: 'James Wu', company: 'Figma', role: 'Director of Sales', status: 'cold' },
        { name: 'Elena Volkov', company: 'Vercel', role: 'Product Lead', status: 'cold' },
      ],
    },
    {
      name: 'Warm',
      count: 3,
      leads: [
        { name: 'David Kim', company: 'Shopify', role: 'Engineering Manager', status: 'warm' },
        { name: 'Lisa Anderson', company: 'Atlassian', role: 'VP Product', status: 'warm' },
        { name: 'Omar Hassan', company: 'Slack', role: 'Head of Sales', status: 'warm' },
      ],
    },
    {
      name: 'Closing',
      count: 2,
      leads: [
        { name: 'Rachel Green', company: 'Dropbox', role: 'Chief Revenue Officer', status: 'closing' },
        { name: 'Tom Bradley', company: 'Zoom', role: 'VP Enterprise', status: 'closing' },
      ],
    },
  ];

  const statusColors = {
    cold: 'bg-[#4F46E5]',
    warm: 'bg-[#3B82F6]',
    closing: 'bg-green-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold text-gray-900">Sales Command Center</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column, colIndex) => (
          <motion.div
            key={column.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: colIndex * 0.1, duration: 0.4 }}
          >
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{column.name}</h3>
                <span className="rounded-full bg-indigo-100 text-[#4F46E5] text-xs px-2 py-1 font-medium">
                  {column.count}
                </span>
              </div>
              <div className="space-y-3">
                {column.leads.map((lead, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (colIndex * 0.1) + (i * 0.05), duration: 0.3 }}
                  >
                    <GlassmorphicCard className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-1.5 ${statusColors[lead.status]}`} />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">{lead.name}</p>
                          <p className="text-sm text-gray-600 truncate">{lead.company}</p>
                          <p className="text-xs text-gray-500 mt-1">{lead.role}</p>
                        </div>
                      </div>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <GlassmorphicCard>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Drafter</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Draft Email</label>
            <textarea
              className="w-full min-h-[200px]"
              placeholder="Compose your outreach email..."
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Tone Analysis</label>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between text-xs text-gray-600 mb-2">
                <span>Formal</span>
                <span>Casual</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-[#4F46E5] to-[#3B82F6] rounded-full"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4">Your email strikes a professional yet approachable tone.</p>
            </div>
          </div>
        </div>
      </GlassmorphicCard>
    </motion.div>
  );
}
