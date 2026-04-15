import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassmorphicCard } from '../components/GlassmorphicCard';
import { Upload, Scissors, Maximize, Sparkles } from 'lucide-react';

export function Creator() {
  const [isDragging, setIsDragging] = useState(false);
  const timeOfDay = new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 18 ? 'Afternoon' : 'Evening';

  const features = [
    { icon: Scissors, title: 'Auto-Clip', desc: 'AI splits your video into viral-ready segments.' },
    { icon: Maximize, title: 'Reframing', desc: 'Auto-crop to 9:16, 1:1, or 16:9 for any platform.' },
    { icon: Sparkles, title: 'Hook Generator', desc: 'Generate scroll-stopping hooks from your transcript.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold text-gray-900">Good {timeOfDay}, Creator. Your hooks are ready.</h1>

      <GlassmorphicCard className="relative">
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
          className={`border-2 border-dashed rounded-2xl min-h-[300px] flex flex-col items-center justify-center transition-all duration-300 ${
            isDragging ? 'border-[#4F46E5] shadow-lg bg-indigo-50' : 'border-gray-300 bg-gray-50'
          }`}
        >
          <Upload className="w-12 h-12 text-[#4F46E5] mb-4" />
          <p className="text-lg text-gray-900 font-medium mb-2">Drop your MP4 here or click to browse</p>
          <p className="text-sm text-gray-500">Support for videos up to 2GB</p>
          <input type="file" accept="video/mp4" className="hidden" />
        </div>
      </GlassmorphicCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <GlassmorphicCard className="relative">
              <span className="absolute top-3 right-3 text-[10px] bg-indigo-50 text-[#4F46E5] border border-[#4F46E5]/30 px-2 py-0.5 rounded-full font-medium">
                Agent
              </span>
              <feature.icon className="w-8 h-8 text-[#4F46E5] mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </GlassmorphicCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
