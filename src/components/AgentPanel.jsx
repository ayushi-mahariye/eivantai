import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

export function AgentPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Agent');

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 w-14 h-14 bg-[#4F46E5] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40 animate-pulse-blue"
      >
        <Sparkles className="w-6 h-6 text-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-[380px] bg-white border-l border-gray-200 z-50 flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4F46E5] flex items-center justify-center animate-pulse-blue">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">Evantai</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="flex gap-6">
                {['Agent', 'Copilot', 'Chat'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 text-sm font-medium transition-colors relative ${
                      activeTab === tab ? 'text-[#4F46E5]' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F46E5]"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
              <div className="text-sm text-gray-600">
                <p className="mb-4">AI Assistant ready to help you with:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F46E5]">•</span>
                    <span>Content creation and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F46E5]">•</span>
                    <span>Sales outreach and lead analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F46E5]">•</span>
                    <span>Supply chain insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F46E5]">•</span>
                    <span>Career guidance and interview prep</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
