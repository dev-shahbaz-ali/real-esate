import React from 'react';

export default function TaskList({ tasks }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold text-slate-800">Tasks</h4>
        <button className="text-blue-600 text-xs font-medium">View all</button>
      </div>
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
            <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
            <div>
              <p className="text-[13px] font-medium text-slate-700 leading-snug">{task.text}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{task.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}