// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Documents from './pages/Documents'; // <--- YEH IMPORT ADD KIYA HAI
import Reports from './pages/Reports';
import Marketing from './pages/Marketing';
import Settings from './pages/Settings';
import Help from './pages/Help';



// Pages Import karein
import Dashboard from './pages/Dashboard';
import Deals from './pages/Deals';
import Properties from './pages/Properties';
import Clients from './pages/Clients';
import Leads from './pages/Leads';
import Tasks from './pages/Tasks';
import Calendar from './pages/Calendar';
import './App.css'; // Import your CSS file for styling

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="app-shell flex h-screen bg-[#f8fafc] font-sans overflow-hidden text-slate-800">
        {/* Fixed Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content Area */}
        <div className="flex-1 h-full overflow-y-auto bg-[#f8fafc]">
          {/* Sticky Topbar */}
          <Topbar onMenuClick={() => setSidebarOpen(true)} searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          {/* Routes (Pages change yahan honge) */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/documents" element={<Documents />} /> {/* <--- YEH ROUTE ADD KIYA HAI */}
<Route path="/reports" element={<Reports />} />
<Route path="/marketing" element={<Marketing />} />
<Route path="/settings" element={<Settings />} />
<Route path="/help" element={<Help />} />

            <Route path="/clients" element={<Clients />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
