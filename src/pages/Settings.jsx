import React from 'react';
import { motion } from 'framer-motion';
import { GlassmorphicCard } from '../components/GlassmorphicCard';
import { Settings as SettingsIcon, User, Bell, Shield, Palette } from 'lucide-react';

export function Settings() {
  const sections = [
    { icon: User, title: 'Profile', desc: 'Manage your account information' },
    { icon: Bell, title: 'Notifications', desc: 'Configure alert preferences' },
    { icon: Shield, title: 'Security', desc: 'Password and authentication settings' },
    { icon: Palette, title: 'Appearance', desc: 'Customize your workspace' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <GlassmorphicCard className="cursor-pointer">
              <section.icon className="w-8 h-8 text-[#4F46E5] mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">{section.title}</h3>
              <p className="text-sm text-gray-600">{section.desc}</p>
            </GlassmorphicCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
