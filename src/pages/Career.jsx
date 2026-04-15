import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassmorphicCard } from '../components/GlassmorphicCard';
import { Sparkles, Mic } from 'lucide-react';

export function Career() {
  const [matchScore, setMatchScore] = useState(null);
  const [isMatching, setIsMatching] = useState(false);

  const handleMatch = () => {
    setIsMatching(true);
    setTimeout(() => {
      setMatchScore(85);
      setIsMatching(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold text-gray-900">Career Intelligence Hub</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <GlassmorphicCard>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Your Resume</h3>
          <textarea
            className="w-full min-h-[250px]"
            placeholder="Paste your resume here..."
          />
        </GlassmorphicCard>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
          <button
            onClick={handleMatch}
            disabled={isMatching}
            className="w-12 h-12 bg-[#4F46E5] rounded-full flex items-center justify-center evantai-btn shadow-lg disabled:opacity-50"
          >
            <Sparkles className="w-5 h-5 text-white" />
          </button>
        </div>

        <GlassmorphicCard>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Job Description</h3>
          <textarea
            className="w-full min-h-[250px]"
            placeholder="Paste the job description here..."
          />
        </GlassmorphicCard>
      </div>

      {matchScore && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GlassmorphicCard className="text-center">
            <div className="relative inline-block">
              <svg width="200" height="200" className="transform -rotate-90">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="rgba(79, 70, 229, 0.1)"
                  strokeWidth="12"
                  fill="none"
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#4F46E5"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: '502.4', strokeDashoffset: '502.4' }}
                  animate={{ strokeDashoffset: `${502.4 - (502.4 * matchScore) / 100}` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-[#4F46E5]">{matchScore}%</span>
                <span className="text-sm text-gray-600">Match</span>
              </div>
            </div>
            <p className="mt-6 text-gray-600">Strong alignment with job requirements</p>
          </GlassmorphicCard>
        </motion.div>
      )}

      <GlassmorphicCard>
        <div className="flex items-center gap-3 mb-6">
          <Mic className="w-6 h-6 text-[#4F46E5]" />
          <h3 className="text-xl font-semibold text-gray-900">Interview Simulator</h3>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-6">
          <div className="flex items-center justify-center gap-1 h-16">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="wave-bar"
                style={{ animationDelay: `${i * 0.05}s` }}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#4F46E5] rounded-xl px-6 py-3 text-white font-semibold evantai-btn">
            Start Interview
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Practice common interview questions with AI-powered feedback
          </p>
        </div>
      </GlassmorphicCard>
    </motion.div>
  );
}
