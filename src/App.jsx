import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Creator } from './pages/Creator';
import { Sales } from './pages/Sales';
import { Logistics } from './pages/Logistics';
import { Career } from './pages/Career';
import { Settings } from './pages/Settings';
import './styles/globals.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/creator" element={<Creator />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/career" element={<Career />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
