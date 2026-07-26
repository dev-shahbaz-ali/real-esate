// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiHome, FiUsers, FiTarget, FiCheckSquare, FiCalendar,
  FiFileText, FiBarChart2, FiSettings, FiMessageCircle,
  FiHelpCircle, FiPieChart, FiBox, FiChevronLeft, FiChevronRight
} from "react-icons/fi";

export default function Sidebar({ isOpen, onClose }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      {isOpen && <button aria-label="Close navigation" onClick={onClose} className="sidebar-backdrop" />}
    <aside className={`app-sidebar ${isOpen ? 'is-open' : ''} ${collapsed ? 'is-collapsed' : ''}`}>
      {/* Logo Area */}
      <div className="px-6 py-5 flex flex-col items-start border-b border-slate-800/50 shrink-0">
        <h1 className="brand-lockup text-lg font-bold text-slate-900 tracking-[0.15em] leading-tight">
          <span className="brand-mark">H</span><span className="brand-name">HORIZON</span>
          <span className="brand-subtitle block text-[9px] text-blue-600 font-semibold tracking-[0.2em] mt-0.5">REALTY GROUP</span>
        </h1>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-3 py-6 space-y-0.5">
        <SidebarItem as={NavLink} onClick={onClose} to="/" icon={<FiPieChart size={18} />} text="Dashboard" />
        <SidebarItem as={NavLink} onClick={onClose} to="/deals" icon={<FiBox size={18} />} text="Deals" />
        <SidebarItem as={NavLink} onClick={onClose} to="/properties" icon={<FiHome size={18} />} text="Properties" />
        <SidebarItem as={NavLink} onClick={onClose} to="/clients" icon={<FiUsers size={18} />} text="Clients" />
        <SidebarItem as={NavLink} onClick={onClose} to="/leads" icon={<FiTarget size={18} />} text="Leads" badge="10" />
        <SidebarItem as={NavLink} onClick={onClose} to="/tasks" icon={<FiCheckSquare size={18} />} text="Tasks" />
        <SidebarItem as={NavLink} onClick={onClose} to="/calendar" icon={<FiCalendar size={18} />} text="Calendar" />
        <SidebarItem as={NavLink} onClick={onClose} to="/documents" icon={<FiFileText size={18} />} text="Documents" />
        <SidebarItem as={NavLink} onClick={onClose} to="/reports" icon={<FiBarChart2 size={18} />} text="Reports" />
        <SidebarItem as={NavLink} onClick={onClose} to="/marketing" icon={<FiMessageCircle size={18} />} text="Marketing" />
      </nav>

      {/* Bottom Settings */}
      <div className="px-3 py-4 border-t border-slate-800/50 space-y-0.5 shrink-0">
        <SidebarItem as={NavLink} onClick={onClose} to="/settings" icon={<FiSettings size={18} />} text="Settings" />
        <SidebarItem as={NavLink} onClick={onClose} to="/help" icon={<FiHelpCircle size={18} />} text="Help & Support" />
        <button type="button" title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} onClick={() => setCollapsed((value) => !value)} className="sidebar-collapse-button mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-slate-400 hover:bg-blue-50 hover:text-blue-700">
          {collapsed ? <FiChevronRight size={18} /> : <FiChevronLeft size={18} />}<span className="nav-label text-[13px] font-medium">{collapsed ? 'Expand menu' : 'Collapse menu'}</span>
        </button>
      </div>
    </aside></>
  );
}

// Sidebar Item Helper (Fixed Active Class Logic)
function SidebarItem({ as: Component = 'div', to, icon, text, badge, onClick }) {
  const baseClasses = "flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-colors text-slate-500 hover:bg-blue-50 hover:text-blue-700";
  
  if (Component === NavLink) {
    return (
      <NavLink
        to={to}
        onClick={onClick}
        title={text}
        className={({ isActive }) => 
          `${baseClasses} ${isActive ? "bg-blue-50 text-blue-700 shadow-sm" : ""}`
        }
      >
        <div className="nav-item-content flex items-center gap-3.5">
          <span className="nav-icon text-slate-400">{icon}</span>
          <span className="nav-label text-[14px] font-medium">{text}</span>
        </div>
        {badge && (
          <span className="nav-badge bg-orange-100 text-orange-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </NavLink>
    );
  }

  return (
    <div className={baseClasses} title={text}>
      <div className="nav-item-content flex items-center gap-3.5">
        <span className="nav-icon text-slate-400">{icon}</span>
        <span className="nav-label text-[14px] font-medium">{text}</span>
      </div>
    </div>
  );
}
