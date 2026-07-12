import React from 'react';
import {
  FiCalendar,
  FiDollarSign,
  FiHome,
  FiUsers,
  FiTrendingUp,
  FiFilter,
  FiDownload,
  FiMoreVertical,
  FiArrowUp,
  FiArrowDown
} from "react-icons/fi";

export default function Reports() {
  
  // Dummy Data for Recent Deals/Sales
  const recentSalesData = [
    { id: 1, property: "125 Maple Street", price: "$425,000", date: "May 14, 2026", agent: "Sarah Johnson", status: "Closed" },
    { id: 2, property: "4301 Beverly Hills Dr", price: "$750,000", date: "May 12, 2026", agent: "Emily Davis", status: "Pending" },
    { id: 3, property: "789 Park Avenue", price: "$1,250,000", date: "May 10, 2026", agent: "Robert Brown", status: "Closed" },
    { id: 4, property: "22 Lakeview Road", price: "$1,150,000", date: "May 08, 2026", agent: "Michael Carter", status: "Closed" },
    { id: 5, property: "55 Sunset Blvd", price: "$980,000", date: "May 05, 2026", agent: "Lisa Anderson", status: "Pending" },
  ];

  return (
    <div className="p-8 space-y-6 w-full max-w-[1400px] mx-auto">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Reports & Analytics</h2>
          <p className="text-slate-500 mt-1 text-sm">Track your sales performance and business insights.</p>
        </div>
        <div className="flex gap-3">
          <button className="border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm hover:bg-slate-50 transition">
            <FiCalendar size={18} /> May 2026
          </button>
          <button className="bg-[#0f3b9e] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-800 transition">
            <FiDownload size={18} /> Export
          </button>
        </div>
      </div>

      {/* --- STATS GRID (KPI CARDS) --- */}
      <div className="grid grid-cols-4 gap-6 shrink-0">
        <StatCard icon={<FiDollarSign className="text-white" />} title="Total Revenue" value="$2.48M" growth="+18.7%" bg="bg-blue-500" up />
        <StatCard icon={<FiHome className="text-white" />} title="Total Deals Closed" value="48" growth="+12 vs last month" bg="bg-green-500" up />
        <StatCard icon={<FiUsers className="text-white" />} title="New Clients" value="24" growth="+8 vs last month" bg="bg-purple-500" up />
        <StatCard icon={<FiTrendingUp className="text-white" />} title="Avg. Deal Size" value="$51.6K" growth="-2.1% vs last month" bg="bg-orange-500" down />
      </div>

      {/* --- MAIN CHARTS SECTION --- */}
      <div className="flex gap-6 shrink-0">
        
        {/* LEFT: REVENUE CHART (BAR CHART STYLE) */}
        <div className="flex-[2] bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-800">Revenue Overview</h4>
              <p className="text-xs text-slate-500 mt-0.5">Monthly revenue for the last 6 months</p>
            </div>
            <button className="flex items-center gap-2 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-slate-50">
              <FiFilter size={14} /> Filter
            </button>
          </div>

          {/* Mock Bar Chart */}
          <div className="flex justify-between items-end h-56 px-4 pb-4 border-b border-slate-100 relative">
            {/* Y-axis labels (Mock) */}
            <div className="absolute -left-2 top-0 bottom-4 flex flex-col justify-between text-[10px] text-slate-400 font-medium">
              <span>$500k</span>
              <span>$400k</span>
              <span>$300k</span>
              <span>$200k</span>
              <span>$100k</span>
              <span>$0</span>
            </div>

            {/* Chart Bars */}
            <div className="flex-1 flex justify-between items-end pl-8 gap-4 h-full">
              <div className="flex flex-col items-center gap-2 group w-full">
                <div className="w-full max-w-[40px] bg-blue-100 rounded-t-sm relative h-[60%] group-hover:bg-blue-200 transition">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition">$320k</div>
                </div>
                <span className="text-[10px] text-slate-500 font-medium">Dec</span>
              </div>
              <div className="flex flex-col items-center gap-2 group w-full">
                <div className="w-full max-w-[40px] bg-blue-200 rounded-t-sm relative h-[45%] group-hover:bg-blue-300 transition">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition">$240k</div>
                </div>
                <span className="text-[10px] text-slate-500 font-medium">Jan</span>
              </div>
              <div className="flex flex-col items-center gap-2 group w-full">
                <div className="w-full max-w-[40px] bg-blue-300 rounded-t-sm relative h-[70%] group-hover:bg-blue-400 transition">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition">$380k</div>
                </div>
                <span className="text-[10px] text-slate-500 font-medium">Feb</span>
              </div>
              <div className="flex flex-col items-center gap-2 group w-full">
                <div className="w-full max-w-[40px] bg-blue-400 rounded-t-sm relative h-[55%] group-hover:bg-blue-500 transition">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition">$290k</div>
                </div>
                <span className="text-[10px] text-slate-500 font-medium">Mar</span>
              </div>
              <div className="flex flex-col items-center gap-2 group w-full">
                <div className="w-full max-w-[40px] bg-blue-500 rounded-t-sm relative h-[85%] group-hover:bg-blue-600 transition">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition">$450k</div>
                </div>
                <span className="text-[10px] text-slate-500 font-medium">Apr</span>
              </div>
              <div className="flex flex-col items-center gap-2 group w-full">
                <div className="w-full max-w-[40px] bg-blue-600 rounded-t-sm relative h-[95%] group-hover:bg-blue-700 transition">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition">$520k</div>
                </div>
                <span className="text-[10px] text-slate-500 font-medium">May</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-6 text-[10px] text-slate-500">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Revenue</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-slate-200 rounded-full"></span> Target</span>
          </div>
        </div>

        {/* RIGHT: QUICK INSIGHTS */}
        <div className="flex-1 flex flex-col gap-6 max-w-[340px]">
          
          {/* Top Deals Widget */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h4 className="text-sm font-bold text-slate-800 mb-4">Top Deals This Month</h4>
            <div className="space-y-4">
              <InsightItem property="789 Park Avenue" price="$1,250,000" agent="Robert Brown" icon={<FiHome />} />
              <InsightItem property="22 Lakeview Road" price="$1,150,000" agent="Michael Carter" icon={<FiHome />} />
              <InsightItem property="55 Sunset Blvd" price="$980,000" agent="Lisa Anderson" icon={<FiHome />} />
              <InsightItem property="4301 Beverly Hills Dr" price="$750,000" agent="Emily Davis" icon={<FiHome />} />
            </div>
          </div>

          {/* Quick Stats Widget */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-bold text-slate-800">Quick Stats</h4>
              <button className="text-blue-600 text-xs font-medium hover:underline">View All</button>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-slate-100 text-xs">
                <span className="text-slate-500">Lead Conversion Rate</span>
                <span className="font-bold text-green-600">24.8%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 text-xs">
                <span className="text-slate-500">Avg. Days to Close</span>
                <span className="font-bold text-slate-800">45 Days</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 text-xs">
                <span className="text-slate-500">Client Satisfaction</span>
                <span className="font-bold text-green-600">4.9 ⭐</span>
              </div>
              <div className="flex justify-between py-2 text-xs">
                <span className="text-slate-500">Active Listings</span>
                <span className="font-bold text-slate-800">42</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- RECENT SALES TABLE --- */}
      <div className="space-y-3 shrink-0">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-bold text-slate-700">Recent Sales & Deals</h4>
          <button className="text-xs text-blue-600 font-medium hover:underline">View All Deals →</button>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left text-sm text-slate-500">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Property</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Agent</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentSalesData.map((sale) => (
                <tr key={sale.id} className="hover:bg-slate-50 transition group">
                  <td className="px-6 py-4 font-medium text-slate-900">{sale.property}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900">{sale.price}</td>
                  <td className="px-6 py-4 text-xs">{sale.date}</td>
                  <td className="px-6 py-4 text-xs flex items-center gap-2">
                     <img src="https://i.pravatar.cc/100?img=33" className="w-5 h-5 rounded-full" /> 
                     {sale.agent}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase
                      ${sale.status === 'Closed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                      {sale.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition">
                      <FiMoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

function StatCard({ icon, title, value, growth, bg, up }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${bg}`}>
        <span className="text-xl">{icon}</span>
      </div>
      <div className="flex-1">
        <p className="text-slate-500 text-[13px]">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 leading-tight mt-0.5">{value}</h3>
        <div className={`flex items-center gap-1 text-[11px] font-medium mt-1 ${up ? 'text-green-600' : 'text-red-500'}`}>
          {up ? <FiArrowUp size={12} /> : <FiArrowDown size={12} />}
          {growth}
        </div>
      </div>
    </div>
  );
}

function InsightItem({ property, price, agent, icon }) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition group cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 text-sm">
          {icon}
        </div>
        <div>
          <p className="text-xs font-bold text-slate-800 truncate max-w-[120px]">{property}</p>
          <p className="text-[10px] text-slate-500">{agent}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs font-bold text-slate-900">{price}</p>
      </div>
    </div>
  );
}