import React from 'react';
import { FiPlus, FiUsers, FiCheckCircle, FiTarget, FiEdit2 } from 'react-icons/fi';

export default function ActivityFeed({ activities }) {
  const iconMap = {
    plus: <FiPlus size={14} />,
    users: <FiUsers size={14} />,
    check: <FiCheckCircle size={14} />,
    target: <FiTarget size={14} />,
    edit: <FiEdit2 size={14} />
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <h4 className="text-sm font-bold text-slate-800 mb-5">Recent Activity</h4>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
            <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 ${activity.color}`}>
              {iconMap[activity.icon]}
            </div>
            <div className="flex-1 flex justify-between items-center">
              <p className="text-[13px] text-slate-700 leading-snug w-3/4">{activity.text}</p>
              <p className="text-[11px] text-slate-400 whitespace-nowrap">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}