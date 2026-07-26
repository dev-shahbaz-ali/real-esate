// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import {
  FiPlus,
  FiDollarSign,
  FiTarget,
  FiCheckCircle,
  FiClock,
  FiFilter,
  FiChevronDown,
  FiMoreVertical,
  FiUsers,
  FiCheckSquare // 👈 YEH IMPORT ADD KIYA HAI (Error yahin tha)
} from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [showDealForm, setShowDealForm] = useState(false);
  const [notice, setNotice] = useState('');
  const [tasks, setTasks] = useState([false, false, false, false, false]);
  const notify = (message) => { setNotice(message); window.setTimeout(() => setNotice(''), 2500); };
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back, Michael</h2>
          <p className="text-slate-500 mt-1 text-sm">Here's what's happening with your real estate business today.</p>
        </div>
        <button onClick={() => setShowDealForm(true)} className="bg-[#3568d4] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-700 transition">
          <FiPlus size={18} /> Add New Deal
        </button>
      </div>

      {/* --- STATS GRID --- */}
      <div className="grid grid-cols-4 gap-6 shrink-0">
        <StatCard icon={<FiDollarSign className="text-white" />} title="Total Pipeline" value="$24.6M" growth="+12.5% vs last month" bg="bg-blue-500" />
        <StatCard icon={<FiTarget className="text-white" />} title="Active Deals" value="28" growth="+7 vs last month" bg="bg-purple-500" />
        <StatCard icon={<FiCheckCircle className="text-white" />} title="Closed This Month" value="6" growth="+2 vs last month" bg="bg-green-500" />
        <StatCard icon={<FiClock className="text-white" />} title="Avg. Deal Size" value="$875K" growth="+8.3% vs last month" bg="bg-orange-500" />
      </div>

      {/* --- MAIN LAYOUT: PIPELINE + RIGHT SIDEBAR --- */}
      <div className="flex gap-6 shrink-0">
        {/* PIPELINE SECTION */}
        <div className="flex-[2.3] bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-5">
            <h3 onClick={() => console.log('Deals Pipeline header clicked')} className="text-base font-bold text-slate-800 cursor-pointer">Deals Pipeline</h3>
            <button onClick={() => console.log('Filter pipeline button clicked')} className="flex items-center gap-2 text-sm font-medium border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 text-slate-600">
              <FiFilter size={14} /> Filter <FiChevronDown size={14} />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <PipelineColumn title="New Leads (8)" amount="$3.2M">
              <PropertyCard image="https://images.unsplash.com/photo-1600596542815-2d4b0a5c30b0" price="$425,000" address="125 Maple Street" location="Denver, CO" badge="New" badgeColor="bg-blue-500" lead="Sarah Johnson" />
              <PropertyCard image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" price="$310,000" address="210 Oak Avenue" location="Austin, TX" badge="New" badgeColor="bg-blue-500" lead="James Wilson" />
              <button onClick={() => navigate('/leads')} className="w-full text-center text-blue-600 text-xs font-medium mt-2 hover:underline py-2">View all 8 leads</button>
            </PipelineColumn>
            <PipelineColumn title="Qualified (7)" amount="$6.5M">
              <PropertyCard image="https://images.unsplash.com/photo-1568605114967-8130f3a36994" price="$750,000" address="4301 Beverly Hills Dr" location="Los Angeles, CA" badge="Qualified" badgeColor="bg-purple-500" lead="Emily Davis" />
              <PropertyCard image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" price="$620,000" address="178 Ocean Drive" location="Miami, FL" badge="Qualified" badgeColor="bg-purple-500" lead="Daniel Martinez" />
              <button onClick={() => navigate('/deals')} className="w-full text-center text-blue-600 text-xs font-medium mt-2 hover:underline py-2">View all 7 deals</button>
            </PipelineColumn>
            <PipelineColumn title="In Negotiation (5)" amount="$8.1M">
              <PropertyCard image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" price="$1,250,000" address="789 Park Avenue" location="New York, NY" badge="Negotiation" badgeColor="bg-orange-500" lead="Robert Brown" />
              <PropertyCard image="https://images.unsplash.com/photo-1600607686527-6fb886090705" price="$980,000" address="55 Sunset Blvd" location="Los Angeles, CA" badge="Negotiation" badgeColor="bg-orange-500" lead="Lisa Anderson" />
              <button onClick={() => navigate('/deals')} className="w-full text-center text-blue-600 text-xs font-medium mt-2 hover:underline py-2">View all 5 deals</button>
            </PipelineColumn>
            <PipelineColumn title="Closed Won (8)" amount="$6.8M">
              <PropertyCard image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" price="$1,150,000" address="22 Lakeview Road" location="Chicago, IL" badge="Closed" badgeColor="bg-green-500" lead="Michael Carter" />
              <PropertyCard image="https://images.unsplash.com/photo-1600607688084-865a4a2f3b55" price="$540,000" address="350 Pine Street" location="Seattle, WA" badge="Closed" badgeColor="bg-green-500" lead="David Thompson" />
              <button onClick={() => navigate('/deals')} className="w-full text-center text-blue-600 text-xs font-medium mt-2 hover:underline py-2">View all 8 deals</button>
            </PipelineColumn>
          </div>
        </div>

        {/* RIGHT SIDEBAR WIDGETS */}
        <div className="flex-1 flex flex-col gap-6 max-w-[360px]">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-4"> {/* This button needs an onClick */}
              <h4 onClick={() => console.log('Tasks header clicked')} className="text-sm font-bold text-slate-800 cursor-pointer">Tasks</h4>
              <button onClick={() => navigate('/tasks')} className="text-blue-600 text-xs font-medium">View all</button>
            </div>
            <div className="space-y-3">
              <TaskItem checked={tasks[0]} onChange={() => setTasks((items) => items.map((item, index) => index === 0 ? !item : item))} text="Follow up with Sarah Johnson" time="Today, 10:00 AM" />
              <TaskItem checked={tasks[1]} onChange={() => setTasks((items) => items.map((item, index) => index === 1 ? !item : item))} text="Property showing - 125 Maple St" time="Today, 2:00 PM" />
              <TaskItem checked={tasks[2]} onChange={() => setTasks((items) => items.map((item, index) => index === 2 ? !item : item))} text="Prepare CMA for 789 Park Ave" time="Tomorrow, 9:00 AM" />
              <TaskItem checked={tasks[3]} onChange={() => setTasks((items) => items.map((item, index) => index === 3 ? !item : item))} text="Team meeting" time="May 16, 11:00 AM" />
              <TaskItem checked={tasks[4]} onChange={() => setTasks((items) => items.map((item, index) => index === 4 ? !item : item))} text="Review offer documents" time="May 17, 3:00 PM" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-bold text-slate-800">Upcoming Showings</h4>
              <button onClick={() => navigate('/calendar')} className="text-blue-600 text-xs font-medium">View all</button>
            </div>
            <div className="space-y-4">
              <ShowingItem image="https://images.unsplash.com/photo-1600596542815-2d4b0a5c30b0" address="125 Maple Street" location="Denver, CO" date="May 15, 10:00 AM" agent="Sarah Johnson" />
              <ShowingItem image="https://images.unsplash.com/photo-1568605114967-8130f3a36994" address="4301 Beverly Hills Dr" location="Beverly Hills, CA" date="May 15, 1:00 PM" agent="Emily Davis" />
              <ShowingItem image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" address="178 Ocean Drive" location="Miami, FL" date="May 16, 11:00 AM" agent="Daniel Martinez" />
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM GRID (3 COLUMNS) --- */}
      <div className="grid grid-cols-3 gap-6 shrink-0">
        {/* Recent Activity */}
        <div onClick={() => console.log('Recent Activity section clicked')} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 cursor-pointer">
          <h4 className="text-sm font-bold text-slate-800 mb-5">Recent Activity</h4>
          <div className="space-y-4">
            <ActivityItem icon={<FiPlus size={14} className="text-blue-500" />} text="You added a new deal 125 Maple Street" time="2 minutes ago" />
            <ActivityItem icon={<FiUsers size={14} className="text-purple-500" />} text="Sarah Johnson viewed 3 properties" time="1 hour ago" />
            <ActivityItem icon={<FiCheckCircle size={14} className="text-green-500" />} text="Deal closed: 22 Lakeview Road" time="3 hours ago" />
            <ActivityItem icon={<FiTarget size={14} className="text-orange-500" />} text="New lead assigned: James Wilson" time="5 hours ago" />
            <ActivityItem icon={<FiCheckSquare size={14} className="text-blue-400" />} text="You updated deal 789 Park Avenue" time="1 day ago" />
          </div>
        </div>

        {/* Market Insights */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h4 onClick={() => console.log('Market Insights header clicked')} className="text-sm font-bold text-slate-800 cursor-pointer">Market Insights</h4>
            <button onClick={() => console.log('View Market Report button clicked')} className="text-blue-600 text-xs font-medium">View Report &gt;</button>
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

        {/* Top Performing Agents */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h4 onClick={() => console.log('Top Performing Agents header clicked')} className="text-sm font-bold text-slate-800 cursor-pointer">Top Performing Agents</h4>
            <button onClick={() => console.log('View Leaderboard button clicked')} className="text-blue-600 text-xs font-medium">View Leaderboard &gt;</button>
          </div>
          <div className="space-y-2">
            <AgentRank name="Emily Rodriguez" amount="$2.4M" rank={1} />
            <AgentRank name="Michael Carter" amount="$2.1M" rank={2} active />
            <AgentRank name="David Thompson" amount="$1.8M" rank={3} />
            <AgentRank name="Jessica Lee" amount="$1.2M" rank={4} />
            <AgentRank name="Robert Brown" amount="$1.1M" rank={5} />
          </div>
        </div>
      </div>
      {notice && <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-slate-900 px-4 py-3 text-sm text-white shadow-xl">{notice}</div>}
      {showDealForm && <DealForm onClose={() => setShowDealForm(false)} onSave={() => { setShowDealForm(false); notify('New deal added to your pipeline.'); }} />}
    </div>
  );
}

// Dashboard ke andar ke helper components
function StatCard({ icon, title, value, growth, bg }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${bg}`}>
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <p className="text-slate-500 text-[13px]">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 leading-tight mt-0.5">{value}</h3>
        <p className="text-green-600 text-[11px] font-medium mt-1">{growth}</p>
      </div>
    </div>
  );
}
function PipelineColumn({ title, amount, children }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-[11px] font-medium text-slate-500 mb-3 pb-2 border-b border-slate-100">
        <span>{title}</span>
        <span>{amount}</span>
      </div>
      <div className="space-y-4 h-full flex flex-col">{children}</div>
    </div>
  );
}
function PropertyCard({ image, price, address, location, badge, badgeColor, lead }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition bg-white">
      <div className="relative h-32">
        <img src={image} alt="Property" className="w-full h-full object-cover" />
        <span className={`absolute top-3 left-3 text-[9px] font-bold px-2 py-0.5 rounded text-white uppercase ${badgeColor}`}>
          {badge} {/* This button needs an onClick */}
        </span>
        <button className="absolute top-3 right-3 bg-white/80 p-1 rounded-full hover:bg-white text-slate-600">
          <FiMoreVertical size={14} />
        </button>
      </div>
      <div className="p-3">
        <h5 className="font-bold text-[13px] text-slate-800 truncate">{address}</h5>
        <p className="text-[10px] text-slate-500">{location}</p>
        <div className="flex items-center justify-between mt-1.5">
           <span className="font-bold text-sm text-slate-900">{price}</span>
        </div>
        <div className="flex items-center gap-2 mt-2.5">
           <img src="https://i.pravatar.cc/100?img=33" className="w-5 h-5 rounded-full" alt="lead" />
           <span onClick={() => console.log(`Lead ${lead} clicked`)} className="text-[10px] text-slate-500 font-medium cursor-pointer">Lead: {lead}</span>
        </div>
      </div>
    </div>
  );
}
function TaskItem({ text, time, checked, onChange }) {
  return (
    <div className="flex items-start gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
      <input type="checkbox" checked={checked} onChange={onChange} className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
      <div>
        <p className="text-[13px] font-medium text-slate-700 leading-snug">{text}</p>
        <p className="text-[11px] text-slate-400 mt-0.5">{time}</p>
      </div>
    </div>
  );
}
function ShowingItem({ image, address, location, date, agent }) {
  return (
    <div className="flex gap-3 items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0">
      <img src={image} className="w-14 h-14 rounded-lg object-cover shrink-0" alt="Property" />
      <div className="flex-1">
        <p className="text-[13px] font-bold text-slate-800 truncate">{address}</p>
        <p className="text-[11px] text-slate-500">{location}</p>
        <p className="text-[11px] text-slate-400 mt-0.5">{date}</p>
        <p className="text-[11px] text-blue-600 font-medium mt-0.5">Agent: {agent}</p>
      </div>
    </div>
  );
}
function ActivityItem({ icon, text, time }) {
  return (
    <div className="flex items-center gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1 flex justify-between items-center">
        <p className="text-[13px] text-slate-700 leading-snug w-3/4">{text}</p>
        <p className="text-[11px] text-slate-400 whitespace-nowrap">{time}</p>
      </div>
    </div>
  );
}
function AgentRank({ name, amount, rank, active }) {
  return (
    <div className={`flex items-center justify-between p-2 rounded-lg ${active ? 'bg-blue-50' : 'hover:bg-slate-50'}`}>
      <div className="flex items-center gap-3">
        <span className={`w-6 h-6 flex items-center justify-center text-[11px] rounded-full font-bold ${active ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
          {rank}
        </span>
        <span className="text-[13px] font-medium text-slate-700">{name}</span>
      </div>
      <span className="text-[13px] font-semibold text-slate-800">{amount}</span>
    </div>
  );
}
function DealForm({ onClose, onSave }) {
  return <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/20 p-4" role="dialog" aria-modal="true">
    <form onSubmit={(event) => { event.preventDefault(); onSave(); }} className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
      <div className="flex items-start justify-between"><div><h3 className="text-lg font-bold text-slate-900">Add new deal</h3><p className="mt-1 text-sm text-slate-500">Capture the next opportunity for your pipeline.</p></div><button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-700" aria-label="Close">×</button></div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="text-sm font-medium text-slate-700">Property address<input required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-400" placeholder="125 Maple Street" /></label><label className="text-sm font-medium text-slate-700">Deal value<input required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-400" placeholder="$425,000" /></label><label className="text-sm font-medium text-slate-700 sm:col-span-2">Client name<input required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-400" placeholder="Sarah Johnson" /></label></div>
      <div className="mt-6 flex justify-end gap-3"><button type="button" onClick={onClose} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</button><button className="rounded-lg bg-[#3568d4] px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Save deal</button></div>
    </form>
  </div>;
}
