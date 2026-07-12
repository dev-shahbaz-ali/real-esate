// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiHome, FiUsers, FiTarget, FiCheckSquare, FiCalendar,
  FiFileText, FiBarChart2, FiSettings, FiMessageCircle,
  FiHelpCircle, FiPieChart, FiBox
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="w-[260px] bg-[#0f172a] text-slate-300 flex flex-col shrink-0 h-full">
      {/* Logo Area */}
      <div className="px-6 py-5 flex flex-col items-start border-b border-slate-800/50 shrink-0">
        <h1 className="text-lg font-bold text-white tracking-[0.15em] leading-tight">
          HORIZON
          <span className="block text-[9px] text-slate-400 font-semibold tracking-[0.2em] mt-0.5">REALTY GROUP</span>
        </h1>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-3 py-6 space-y-0.5">
        <SidebarItem as={NavLink} to="/" icon={<FiPieChart size={18} />} text="Dashboard" />
        <SidebarItem as={NavLink} to="/deals" icon={<FiBox size={18} />} text="Deals" />
        <SidebarItem as={NavLink} to="/properties" icon={<FiHome size={18} />} text="Properties" />
        <SidebarItem as={NavLink} to="/clients" icon={<FiUsers size={18} />} text="Clients" />
        <SidebarItem as={NavLink} to="/leads" icon={<FiTarget size={18} />} text="Leads" badge="10" />
        <SidebarItem as={NavLink} to="/tasks" icon={<FiCheckSquare size={18} />} text="Tasks" />
        <SidebarItem as={NavLink} to="/calendar" icon={<FiCalendar size={18} />} text="Calendar" />
        <SidebarItem as={NavLink} to="/documents" icon={<FiFileText size={18} />} text="Documents" />
        <SidebarItem as={NavLink} to="/reports" icon={<FiBarChart2 size={18} />} text="Reports" />
        <SidebarItem as={NavLink} to="/marketing" icon={<FiMessageCircle size={18} />} text="Marketing" />
      </nav>

      {/* Bottom Settings */}
      <div className="px-3 py-4 border-t border-slate-800/50 space-y-0.5 shrink-0">
        <SidebarItem as={NavLink} to="/settings" icon={<FiSettings size={18} />} text="Settings" />
        <SidebarItem as={NavLink} to="/help" icon={<FiHelpCircle size={18} />} text="Help & Support" />
      </div>
    </aside>
  );
}

// Sidebar Item Helper (Fixed Active Class Logic)
function SidebarItem({ as: Component = 'div', to, icon, text, badge }) {
  const baseClasses = "flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors text-slate-400 hover:bg-[#1e293b] hover:text-white";
  
  if (Component === NavLink) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => 
          `${baseClasses} ${isActive ? "bg-[#1e293b] text-white" : ""}`
        }
      >
        <div className="flex items-center gap-3.5">
          <span className="text-slate-400">{icon}</span>
          <span className="text-[14px] font-medium">{text}</span>
        </div>
        {badge && (
          <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </NavLink>
    );
  }

  return (
    <div className={baseClasses}>
      <div className="flex items-center gap-3.5">
        <span className="text-slate-400">{icon}</span>
        <span className="text-[14px] font-medium">{text}</span>
      </div>
    </div>
  );
}