import React, { useState } from 'react';
import {
  FiPlus,
  FiSearch,
  FiFilter,
  FiMoreVertical,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiCalendar,
  FiUser,
  FiFlag,
  FiCheckSquare
} from "react-icons/fi";
import ActionModal from '../components/ActionModal';

export default function Tasks() {
  const [showForm, setShowForm] = useState(false);
  
  // Dummy Data for Tasks
  const tasksData = [
    {
      id: 1,
      title: "Finalize contract for 125 Maple Street",
      description: "Review legal documents and send to buyer's attorney.",
      assignee: "Michael Carter",
      dueDate: "May 18, 2026",
      priority: "High",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Schedule inspection for 4301 Beverly Hills Dr",
      description: "Coordinate with home inspector and property owner.",
      assignee: "Sarah Johnson",
      dueDate: "May 20, 2026",
      priority: "Medium",
      status: "Pending"
    },
    {
      id: 3,
      title: "Prepare CMA report for 789 Park Avenue",
      description: "Compile recent sales data for client meeting.",
      assignee: "Emily Davis",
      dueDate: "May 15, 2026",
      priority: "High",
      status: "Completed"
    },
    {
      id: 4,
      title: "Follow up with James Wilson (Lead)",
      description: "Call to discuss financing options for the loan.",
      assignee: "Michael Carter",
      dueDate: "Today",
      priority: "High",
      status: "In Progress"
    },
    {
      id: 5,
      title: "Update marketing flyers for 22 Lakeview Road",
      description: "Add new interior photos and schedule printing.",
      assignee: "David Thompson",
      dueDate: "May 22, 2026",
      priority: "Low",
      status: "Pending"
    },
    {
      id: 6,
      title: "Team meeting - Weekly Review",
      description: "Go over weekly sales numbers and upcoming listings.",
      assignee: "All Agents",
      dueDate: "May 16, 2026",
      priority: "Medium",
      status: "Pending"
    }
  ];

  // Helper function to color code priority
  const getPriorityColors = (priority) => {
    if (priority === "High") return "text-red-600 bg-red-100 border-red-200";
    if (priority === "Medium") return "text-orange-600 bg-orange-100 border-orange-200";
    return "text-green-600 bg-green-100 border-green-200";
  };

  // Helper function to color code status
  const getStatusColors = (status) => {
    if (status === "Completed") return "text-white bg-green-600";
    if (status === "In Progress") return "text-white bg-blue-600";
    return "text-white bg-slate-500";
  };

  return (
    <div className="p-8 space-y-6 w-full max-w-[1400px] mx-auto">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Tasks</h2>
          <p className="text-slate-500 mt-1 text-sm">View and manage all team tasks and to-dos.</p>
        </div>
        <button onClick={() => setShowForm(true)} className="bg-[#3568d4] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-700 transition">
          <FiPlus size={18} /> Add New Task
        </button>
      </div>

      {/* --- STATS GRID --- */}
      <div className="grid grid-cols-4 gap-6 shrink-0">
        <StatCard icon={<FiCheckSquare className="text-white" />} title="Total Tasks" value="24" growth="+5 this week" bg="bg-blue-500" />
        <StatCard icon={<FiClock className="text-white" />} title="In Progress" value="8" growth="+2 vs last week" bg="bg-orange-500" />
        <StatCard icon={<FiCheckCircle className="text-white" />} title="Completed" value="12" growth="+4 vs last week" bg="bg-green-500" />
        <StatCard icon={<FiAlertCircle className="text-white" />} title="Overdue Tasks" value="4" growth="Needs Attention" bg="bg-red-500" />
      </div>

      {/* --- SEARCH, FILTER & VIEW TOGGLE --- */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-wrap gap-4 justify-between items-center">
        <div className="relative flex-1 min-w-[300px]">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search tasks by title or assignee..."
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
        <div className="flex items-center gap-3">
          <select className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>Filter by Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <select className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>Filter by Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <button onClick={() => console.log('Filter tasks button clicked')} className="flex items-center gap-2 border border-slate-200 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 bg-white">
            <FiFilter size={16} /> Filter
          </button>
        </div>
      </div>

      {/* --- TASKS TABLE --- */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-500">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 w-10">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 cursor-pointer" />
                </th>
                <th className="px-6 py-4">Task Title</th>
                <th className="px-6 py-4">Assignee</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4">Priority</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tasksData.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50 transition group">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 cursor-pointer" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-900">{task.title}</span>
                      <span className="text-xs text-slate-400 line-clamp-1">{task.description}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FiUser size={14} className="text-slate-400" /> 
                      <span className="text-xs font-medium">{task.assignee}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={14} className="text-slate-400" /> 
                      <span className="text-xs">{task.dueDate}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${getPriorityColors(task.priority)}`}>
                      <FiFlag size={12} /> {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${getStatusColors(task.status)}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => console.log(`More options for task ${task.id} clicked`)} className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition">
                      <FiMoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* --- TABLE FOOTER --- */}
        <div className="px-6 py-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500 bg-slate-50/50">
          <span>Showing 1 to 6 of 24 tasks</span>
          <div className="flex gap-2" role="group"> {/* Added role for accessibility */}
            <button onClick={() => console.log('Previous tasks page clicked')} className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
            <button onClick={() => console.log('Next tasks page clicked')} className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>

      <ActionModal open={showForm} onClose={() => setShowForm(false)} onSubmit={() => setShowForm(false)} title="Add task" description="Create a task for yourself or a team member." fields={[{ label: 'Task title', placeholder: 'Follow up with new lead', full: true }, { label: 'Assignee', placeholder: 'Michael Carter' }, { label: 'Due date', type: 'date' }, { label: 'Priority', type: 'select', options: ['High', 'Medium', 'Low'] }]} />
    </div>
  );
}

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

function StatCard({ icon, title, value, growth, bg }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${bg}`}>
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <p className="text-slate-500 text-[13px]">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 leading-tight mt-0.5">{value}</h3>
        <p className={`text-[11px] font-medium mt-1 ${growth === 'Needs Attention' ? 'text-red-500' : 'text-green-600'}`}>
          {growth}
        </p>
      </div>
    </div>
  );
}
