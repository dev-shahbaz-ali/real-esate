// src/pages/Leads.jsx
import React from 'react';
import { FiPlus, FiSearch, FiTarget, FiMoreVertical } from 'react-icons/fi';

export default function Leads() {
  const leads = [
    { id: 1, name: "Alice Walker", location: "Seattle, WA", source: "Zillow", status: "New", interest: "$850k - $1M" },
    { id: 2, name: "Mark Spencer", location: "Miami, FL", source: "Referral", status: "Contacted", interest: "$1.2M - $1.5M" },
    { id: 3, name: "Laura Peterson", location: "Austin, TX", source: "Website", status: "Qualified", interest: "$450k - $600k" },
    { id: 4, name: "Kevin Martinez", location: "Denver, CO", source: "Open House", status: "New", interest: "$700k - $850k" },
  ];

  return (
    <div className="p-8 space-y-6 w-full max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Leads</h2>
          <p className="text-slate-500 mt-1 text-sm">Track and convert incoming leads.</p>
        </div>
        <button className="bg-[#0f3b9e] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-800 transition">
          <FiPlus size={18} /> Add Lead
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
           <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500"><FiTarget /></div>
           <div><p className="text-slate-500 text-xs font-medium uppercase">New Leads</p><h3 className="text-xl font-bold text-slate-900">24</h3></div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
           <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-500"><FiTarget /></div>
           <div><p className="text-slate-500 text-xs font-medium uppercase">Qualified</p><h3 className="text-xl font-bold text-slate-900">18</h3></div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
           <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500"><FiTarget /></div>
           <div><p className="text-slate-500 text-xs font-medium uppercase">Converted</p><h3 className="text-xl font-bold text-slate-900">8</h3></div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="relative w-full max-w-md">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Search leads..." className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm text-slate-500">
          <thead className="bg-slate-50 text-slate-700 font-medium border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Lead Name</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Source</th>
              <th className="px-6 py-4">Budget</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4 font-medium text-slate-900">{lead.name}</td>
                <td className="px-6 py-4">{lead.location}</td>
                <td className="px-6 py-4">{lead.source}</td>
                <td className="px-6 py-4 font-semibold text-slate-900">{lead.interest}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase 
                    ${lead.status === 'New' ? 'bg-blue-100 text-blue-700' : 
                      lead.status === 'Contacted' ? 'bg-orange-100 text-orange-700' :
                      'bg-purple-100 text-purple-700'}`}>
                    {lead.status}
                  </span>
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