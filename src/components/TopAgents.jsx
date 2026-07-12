import React from 'react';

export default function TopAgents({ agents }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold text-slate-800">Top Performing Agents</h4>
        <button className="text-blue-600 text-xs font-medium">View Leaderboard &gt;</button>
      </div>
      <div className="space-y-2">
        {agents.map((agent) => (
          <div key={agent.id} className={`flex items-center justify-between p-2 rounded-lg ${agent.active ? 'bg-blue-50' : 'hover:bg-slate-50'}`}>
            <div className="flex items-center gap-3">
              <span className={`w-6 h-6 flex items-center justify-center text-[11px] rounded-full font-bold ${agent.active ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                {agent.id}
              </span>
              <span className="text-[13px] font-medium text-slate-700">{agent.name}</span>
            </div>
            <span className="text-[13px] font-semibold text-slate-800">{agent.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}