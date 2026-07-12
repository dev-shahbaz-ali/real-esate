// src/pages/Deals.jsx
import React from 'react';
import { FiFilter, FiPlus, FiSearch, FiMoreVertical, FiDollarSign, FiHome } from 'react-icons/fi';

export default function Deals() {
  const deals = [
    { id: 1, address: "125 Maple Street", location: "Denver, CO", price: "$425,000", status: "New", agent: "Sarah Johnson" },
    { id: 2, address: "4301 Beverly Hills Dr", location: "Los Angeles, CA", price: "$750,000", status: "Qualified", agent: "Emily Davis" },
    { id: 3, address: "789 Park Avenue", location: "New York, NY", price: "$1,250,000", status: "Negotiation", agent: "Robert Brown" },
    { id: 4, address: "22 Lakeview Road", location: "Chicago, IL", price: "$1,150,000", status: "Closed", agent: "Michael Carter" },
  ];

  return (
    <div className="p-8 space-y-6 w-full max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Deals Pipeline</h2>
          <p className="text-slate-500 mt-1 text-sm">Manage and track all your real estate deals.</p>
        </div>
        <button className="bg-[#0f3b9e] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-800 transition">
          <FiPlus size={18} /> New Deal
        </button>
      </div>

      {/* 3 Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm">Total Active Deals</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-1">28</h3>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm">Total Value</p>
          <h3 className="text-3xl font-bold text-green-600 mt-1">$24.6M</h3>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm">Closed This Month</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-1">6</h3>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
        <div className="relative w-96">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Search deals..." className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">
          <FiFilter /> Filter
        </button>
      </div>

      {/* Deals Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm text-slate-500">
          <thead className="bg-slate-50 text-slate-700 font-medium border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Property</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Agent</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {deals.map((deal) => (
              <tr key={deal.id} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-900">{deal.address}</span>
                    <span className="text-xs">{deal.location}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-slate-900">{deal.price}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase 
                    ${deal.status === 'New' ? 'bg-blue-100 text-blue-700' : 
                      deal.status === 'Qualified' ? 'bg-purple-100 text-purple-700' :
                      deal.status === 'Negotiation' ? 'bg-orange-100 text-orange-700' :
                      'bg-green-100 text-green-700'}`}>
                    {deal.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <img src="https://i.pravatar.cc/100?img=33" className="w-6 h-6 rounded-full" /> {deal.agent}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-700"><FiMoreVertical /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}