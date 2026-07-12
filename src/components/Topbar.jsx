// src/components/Topbar.jsx
import React from 'react';
import {
  FiBell, FiSearch, FiMenu, FiMessageCircle, FiChevronDown
} from "react-icons/fi";

export default function Topbar() {
  return (
    <header className="bg-white px-8 py-4 border-b border-slate-200 flex justify-between items-center shrink-0 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button className="text-slate-500 hover:bg-slate-50 p-2 rounded-lg"><FiMenu size={20} /></button>
        <div className="relative w-[500px]">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search properties, clients, or deals..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder:text-slate-400"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded bg-slate-100">⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <FiBell size={22} className="text-slate-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">4</span>
          </div>
          <div className="relative cursor-pointer">
            <FiMessageCircle size={22} className="text-slate-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">7</span>
          </div>
        </div>
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200 cursor-pointer">
          <img src="https://i.pravatar.cc/100?img=12" alt="Avatar" className="w-10 h-10 rounded-full" />
          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-slate-900 leading-tight">Michael Carter</p>
            <p className="text-[11px] text-slate-500">michael@horizonrealty.com</p>
          </div>
          <FiChevronDown className="text-slate-400 text-sm" />
        </div>
      </div>
    </header>
  );
}