import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

export default function DealCard({ deal, badge, badgeColor }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition bg-white">
      <div className="relative h-32">
        <img src={deal.image} alt="Property" className="w-full h-full object-cover" />
        <span className={`absolute top-3 left-3 text-[9px] font-bold px-2 py-0.5 rounded text-white uppercase ${badgeColor}`}>
          {badge}
        </span>
        <button className="absolute top-3 right-3 bg-white/80 p-1 rounded-full hover:bg-white text-slate-600">
          <FiMoreVertical size={14} />
        </button>
      </div>
      <div className="p-3">
        <h5 className="font-bold text-[13px] text-slate-800 truncate">{deal.address}</h5>
        <p className="text-[10px] text-slate-500">{deal.location}</p>
        <div className="flex items-center justify-between mt-1.5">
           <span className="font-bold text-sm text-slate-900">{deal.price}</span>
        </div>
        <div className="flex items-center gap-2 mt-2.5">
           <img src="https://i.pravatar.cc/100?img=33" className="w-5 h-5 rounded-full" alt="lead" />
           <span className="text-[10px] text-slate-500 font-medium">Lead: {deal.lead}</span>
        </div>
      </div>
    </div>
  );
}