import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { AgentPanel } from '../components/AgentPanel';

export function Layout() {
  return (
    <div className="flex h-screen bg-[#F5F7FA] text-gray-900 overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
      <AgentPanel />
    </div>
  );
}
