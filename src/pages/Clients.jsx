// src/pages/Clients.jsx
import React from 'react';
import { FiPlus, FiSearch, FiUser, FiMail, FiPhone, FiMoreVertical } from 'react-icons/fi';

export default function Clients() {
  const clients = [
    { id: 1, name: "Sarah Johnson", email: "sarah.j@email.com", phone: "+1 (303) 555-0101", type: "Buyer", deals: 2 },
    { id: 2, name: "Robert Brown", email: "robert.b@email.com", phone: "+1 (212) 555-0199", type: "Seller", deals: 3 },
    { id: 3, name: "Emily Davis", email: "emily.d@email.com", phone: "+1 (310) 555-0123", type: "Investor", deals: 5 },
    { id: 4, name: "James Wilson", email: "james.w@email.com", phone: "+1 (512) 555-0145", type: "Buyer", deals: 1 },
    { id: 5, name: "David Thompson", email: "david.t@email.com", phone: "+1 (305) 555-0187", type: "Seller", deals: 4 },
  ];

  return (
    <div className="p-8 space-y-6 w-full max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Clients</h2>
          <p className="text-slate-500 mt-1 text-sm">Manage your client relationships and history.</p>
        </div>
        <button onClick={() => console.log('Add Client button clicked')} className="bg-[#0f3b9e] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-800 transition">
          <FiPlus size={18} /> Add Client
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-xs uppercase font-medium">Total Clients</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">245</h3>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-xs uppercase font-medium">Active Buyers</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">118</h3>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-xs uppercase font-medium">Active Sellers</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">74</h3>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-xs uppercase font-medium">This Month</p>
          <h3 className="text-2xl font-bold text-green-600 mt-1">+12</h3>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="relative w-full max-w-md">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Search clients by name or email..." className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      {/* Client Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm text-slate-500">
          <thead className="bg-slate-50 text-slate-700 font-medium border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Contact</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Active Deals</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                    {client.name.charAt(0)}
                  </div>
                  <span className="font-medium text-slate-900">{client.name}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 text-xs"><FiMail /> {client.email}</span>
                    <span className="flex items-center gap-2 text-xs"><FiPhone /> {client.phone}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase
                    ${client.type === 'Buyer' ? 'bg-blue-50 text-blue-600' : 
                      client.type === 'Seller' ? 'bg-green-50 text-green-600' : 
                      'bg-purple-50 text-purple-600'}`}>
                    {client.type}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-slate-900">{client.deals}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-700"><FiMoreVertical /></button>
                </td> {/* This button needs an onClick */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}