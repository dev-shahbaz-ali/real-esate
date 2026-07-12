import React from 'react';

export default function UpcomingShowings({ showings }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold text-slate-800">Upcoming Showings</h4>
        <button className="text-blue-600 text-xs font-medium">View all</button>
      </div>
      <div className="space-y-4">
        {showings.map((showing, index) => (
          <div key={index} className="flex gap-3 items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0">
            <img src={showing.image} className="w-14 h-14 rounded-lg object-cover shrink-0" alt="Property" />
            <div className="flex-1">
              <p className="text-[13px] font-bold text-slate-800 truncate">{showing.address}</p>
              <p className="text-[11px] text-slate-500">{showing.location}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{showing.date}</p>
              <p className="text-[11px] text-blue-600 font-medium mt-0.5">Agent: {showing.agent}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}