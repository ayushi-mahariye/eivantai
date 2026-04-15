import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const role = email.includes('creator') ? 'creator' : 
                 email.includes('sales') ? 'sales' : 
                 email.includes('logistics') ? 'logistics' : 'career';
    login(email, password, role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.img
            src="https://codewords-uploads.s3.amazonaws.com/runtime_v2/a5c15bc6baf54cae9966a78e1d6422c051628c9bfe9f479485b436a43254b8d3/ChatGPT_Image_Feb_16__2026__10_18_38_PM.png"
            alt="Evantai Logo"
            className="w-32 h-32 mx-auto mb-6 animate-pulse-cyan"
            style={{ boxShadow: '0 0 60px rgba(0,229,255,0.3)' }}
            animate={{ boxShadow: ['0 0 60px rgba(0,229,255,0.3)', '0 0 80px rgba(0,229,255,0.5)', '0 0 60px rgba(0,229,255,0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Evantai</h1>
          <p className="text-gray-600">The Industry OS</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl py-3 font-semibold evantai-btn"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#F5F7FA] text-gray-500">Or continue with</span>
            </div>
          </div>
          <button className="mt-4 w-full bg-white border border-gray-200 text-gray-700 rounded-xl py-3 font-medium hover:bg-gray-50 transition-all">
            Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Demo: Use email with 'creator', 'sales', 'logistics', or 'career' to access different hubs
        </p>
      </motion.div>
    </div>
  );
}
