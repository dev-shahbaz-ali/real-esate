import React from 'react';
import { FiDollarSign, FiTarget, FiCheckCircle, FiClock } from 'react-icons/fi';

export default function StatCard({ stat }) {
  const iconMap = {
    dollar: <FiDollarSign className="text-white" />,
    target: <FiTarget className="text-white" />,
    check: <FiCheckCircle className="text-white" />,
    clock: <FiClock className="text-white" />
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${stat.color}`}>
        <span className="text-xl">{iconMap[stat.icon]}</span>
      </div>
      <div>
        <p className="text-slate-500 text-[13px]">{stat.title}</p>
        <h3 className="text-2xl font-bold text-slate-900 leading-tight mt-0.5">{stat.value}</h3>
        <p className="text-green-600 text-[11px] font-medium mt-1">{stat.growth}</p>
      </div>
    </div>
  );
}