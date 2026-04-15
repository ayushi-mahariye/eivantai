import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassmorphicCard } from '../components/GlassmorphicCard';
import { Package, Truck, Briefcase, Target, ArrowRight, ArrowLeft, Clock, Plus, Calendar as CalendarIcon, User, Star, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const timeOfDay = new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 18 ? 'Afternoon' : 'Evening';
  const [activeTab, setActiveTab] = useState('overview');

  const apps = [
    { icon: Target, name: 'Sales Agent', desc: 'Sales & Outreach Hub', route: '/sales', color: '#4F46E5' },
    { icon: Package, name: 'Creator Agent', desc: 'Content Creator Hub', route: '/creator', color: '#7C3AED' },
    { icon: Truck, name: 'Supply Chain Agent', desc: 'Logistics & Supply Chain', route: '/logistics', color: '#7C3AED' },
    { icon: Briefcase, name: 'Career Agent', desc: 'Career & Job Seeker Hub', route: '/career', color: '#A78BFA' },
  ];

  const todos = [
    { id: 1, text: 'Urgent Submit Report', priority: 'Urgent', done: false },
    { id: 2, text: 'Review my SOP', priority: 'General', done: true },
    { id: 3, text: 'Finding new customers', priority: 'General', done: false },
    { id: 4, text: 'Finding new customers', priority: 'General', done: false },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <>
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Agents</h2>
                <Link to="/creator" className="text-sm text-[#4F46E5] hover:underline">View all</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {apps.map((app, i) => (
                  <motion.div
                    key={app.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link to={app.route}>
                      <GlassmorphicCard className="relative hover:shadow-xl cursor-pointer group">
                        <div className="flex items-start justify-between mb-12">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{app.name}</h3>
                            <p className="text-xs text-gray-500">{app.desc}</p>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600">⋮</button>
                        </div>
                        <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                          <app.icon className="w-16 h-16" style={{ color: app.color }} />
                        </div>
                        <div className="flex gap-2 text-gray-400">
                          <button className="hover:text-gray-600"><FileText className="w-4 h-4" /></button>
                          <button className="hover:text-gray-600"><Zap className="w-4 h-4" /></button>
                          <button className="hover:text-gray-600">♡</button>
                        </div>
                      </GlassmorphicCard>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassmorphicCard>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">My Punches</h3>
                  <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Present 3h 24min</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center justify-center">
                    <ArrowLeft className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Total working hours</span>
                    </div>
                    <span className="font-medium text-gray-900">48 h 32min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <span>✓</span>
                      <span>Last punch in</span>
                    </div>
                    <span className="font-medium text-gray-900">Today 9:32am</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <span>→</span>
                      <span>Out time</span>
                    </div>
                    <span className="font-medium text-gray-900">32min</span>
                  </div>
                </div>
              </GlassmorphicCard>

              <GlassmorphicCard>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">To-Do List</h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3">
                  {todos.map((todo) => (
                    <div key={todo.id} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={todo.done}
                          className="w-4 h-4 rounded border-gray-300"
                          readOnly
                        />
                        <span className={`text-sm ${todo.done ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                          {todo.text}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        todo.priority === 'Urgent' 
                          ? 'bg-orange-100 text-orange-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {todo.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassmorphicCard>
            </div>
          </>
        );
      case 'agents':
        return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {apps.map((app, i) => (
              <motion.div key={app.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link to={app.route}>
                  <GlassmorphicCard className="hover:shadow-xl cursor-pointer text-center">
                    <div className="flex items-center justify-center mb-4">
                      <app.icon className="w-12 h-12" style={{ color: app.color }} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{app.name}</h3>
                    <p className="text-xs text-gray-500">{app.desc}</p>
                  </GlassmorphicCard>
                </Link>
              </motion.div>
            ))}
          </div>
        );
      case 'punches':
        return (
          <GlassmorphicCard>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">My Punches</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 flex flex-col items-center justify-center">
                <ArrowRight className="w-12 h-12 text-emerald-600 mb-2" />
                <span className="text-sm font-medium text-emerald-700">Punch In</span>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 flex flex-col items-center justify-center">
                <ArrowLeft className="w-12 h-12 text-red-600 mb-2" />
                <span className="text-sm font-medium text-red-700">Punch Out</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Total working hours</span>
                <span className="font-semibold text-gray-900">48 h 32min</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Last punch in</span>
                <span className="font-semibold text-gray-900">Today 9:32am</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Out time</span>
                <span className="font-semibold text-gray-900">32min</span>
              </div>
            </div>
          </GlassmorphicCard>
        );
      case 'todo':
        return (
          <GlassmorphicCard>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">To-Do List</h2>
              <button className="bg-[#4F46E5] text-white px-4 py-2 rounded-lg hover:bg-[#4338CA] flex items-center gap-2">
                <Plus className="w-4 h-4" /> Add Task
              </button>
            </div>
            <div className="space-y-3">
              {todos.map((todo) => (
                <div key={todo.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={todo.done} className="w-5 h-5 rounded border-gray-300" readOnly />
                    <span className={`${todo.done ? 'line-through text-gray-400' : 'text-gray-900'}`}>{todo.text}</span>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    todo.priority === 'Urgent' ? 'bg-orange-100 text-orange-600' : 'bg-gray-200 text-gray-600'
                  }`}>{todo.priority}</span>
                </div>
              ))}
            </div>
          </GlassmorphicCard>
        );
      case 'calendar':
        return (
          <GlassmorphicCard>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Calendar</h2>
            <div className="text-center py-12">
              <CalendarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No events scheduled</p>
              <button className="mt-4 bg-[#4F46E5] text-white px-6 py-2 rounded-lg hover:bg-[#4338CA]">Add Event</button>
            </div>
          </GlassmorphicCard>
        );
      case 'profile':
        return (
          <GlassmorphicCard>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile</h2>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-24 h-24 bg-[#4F46E5] rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">User Profile</h3>
                <p className="text-gray-500">user@evantai.com</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Role</span>
                <p className="font-medium text-gray-900">Team Member</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Department</span>
                <p className="font-medium text-gray-900">Operations</p>
              </div>
            </div>
          </GlassmorphicCard>
        );
      case 'moments':
        return (
          <GlassmorphicCard>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Moments</h2>
            <div className="text-center py-12">
              <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No moments captured yet</p>
              <button className="mt-4 bg-[#4F46E5] text-white px-6 py-2 rounded-lg hover:bg-[#4338CA]">Create Moment</button>
            </div>
          </GlassmorphicCard>
        );
      case 'preferences':
        return (
          <GlassmorphicCard>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">User Preferences</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Notifications</h3>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                  <span className="text-sm text-gray-600">Email notifications</span>
                </label>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Theme</h3>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  <option>Light Mode</option>
                  <option>Dark Mode</option>
                </select>
              </div>
            </div>
          </GlassmorphicCard>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Good {timeOfDay}</h1>
      </div>

      <div className="flex gap-4 text-sm border-b border-gray-200 pb-2 overflow-x-auto">
        <button onClick={() => setActiveTab('overview')} className={`font-medium pb-2 whitespace-nowrap ${activeTab === 'overview' ? 'text-gray-900 border-b-2 border-[#4F46E5]' : 'text-gray-600 hover:text-gray-900'}`}>Overview</button>
        <button onClick={() => setActiveTab('agents')} className={`pb-2 whitespace-nowrap ${activeTab === 'agents' ? 'text-gray-900 border-b-2 border-[#4F46E5]' : 'text-gray-600 hover:text-gray-900'}`}>Agents</button>
        <button onClick={() => setActiveTab('punches')} className={`pb-2 whitespace-nowrap ${activeTab === 'punches' ? 'text-gray-900 border-b-2 border-[#4F46E5]' : 'text-gray-600 hover:text-gray-900'}`}>My Punches</button>
        <button onClick={() => setActiveTab('todo')} className={`pb-2 whitespace-nowrap ${activeTab === 'todo' ? 'text-gray-900 border-b-2 border-[#4F46E5]' : 'text-gray-600 hover:text-gray-900'}`}>To-Do</button>
        <button onClick={() => setActiveTab('calendar')} className={`pb-2 whitespace-nowrap ${activeTab === 'calendar' ? 'text-gray-900 border-b-2 border-[#4F46E5]' : 'text-gray-600 hover:text-gray-900'}`}>Calendar</button>
        <button onClick={() => setActiveTab('profile')} className={`pb-2 whitespace-nowrap ${activeTab === 'profile' ? 'text-gray-900 border-b-2 border-[#4F46E5]' : 'text-gray-600 hover:text-gray-900'}`}>Profile</button>
        <button onClick={() => setActiveTab('moments')} className={`pb-2 whitespace-nowrap ${activeTab === 'moments' ? 'text-gray-900 border-b-2 border-[#4F46E5]' : 'text-gray-600 hover:text-gray-900'}`}>Moments</button>
        <button onClick={() => setActiveTab('preferences')} className={`pb-2 whitespace-nowrap ${activeTab === 'preferences' ? 'text-gray-900 border-b-2 border-[#4F46E5]' : 'text-gray-600 hover:text-gray-900'}`}>User Preferences</button>
      </div>

      {renderContent()}
    </motion.div>
  );
}
