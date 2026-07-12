import React from 'react';

export default function MarketInsights() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold text-slate-800">Market Insights</h4>
        <button className="text-blue-600 text-xs font-medium">View Report &gt;</button>
      </div>
      <div className="flex justify-between items-center mb-4">
         <div>
           <p className="text-[11px] text-slate-500">Median Home Price</p>
           <p className="text-base font-bold text-slate-800">$687,500</p>
           <p className="text-[10px] text-green-600 mt-0.5">+8.3% vs last month</p>
         </div>
         <div>
           <p className="text-[11px] text-slate-500">Active Listings</p>
           <p className="text-base font-bold text-slate-800">1,248</p>
           <p className="text-[10px] text-green-600 mt-0.5">+4.7% vs last month</p>
         </div>
      </div>
      {/* Chart Mockup */}
      <div className="mt-2 h-12 flex items-end gap-1.5 justify-between px-1">
         <div className="w-3 h-8 bg-blue-500/20 rounded-sm"></div>
         <div className="w-3 h-10 bg-blue-500/30 rounded-sm"></div>
         <div className="w-3 h-6 bg-blue-500/40 rounded-sm"></div>
         <div className="w-3 h-12 bg-blue-500/60 rounded-sm"></div>
         <div className="w-3 h-14 bg-blue-500 rounded-sm"></div>
         <div className="w-3 h-8 bg-blue-500/70 rounded-sm"></div>
         <div className="w-3 h-10 bg-blue-500/50 rounded-sm"></div>
      </div>
      <p className="text-[10px] text-slate-400 mt-3">Data based on your market area</p>
    </div>
  );
}