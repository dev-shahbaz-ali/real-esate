import React from 'react';
import {
  FiPlus,
  FiSearch,
  FiFilter,
  FiMoreVertical,
  FiMail,
  FiUsers,
  FiTrendingUp,
  FiTarget,
  FiClock,
  FiCheckCircle,
  FiCalendar,
  FiBarChart2,
  FiArrowUp,
  FiArrowDown,
  FiSend
} from "react-icons/fi";

export default function Marketing() {
  
  // Dummy Data for Email Campaigns
  const campaignsData = [
    {
      id: 1,
      name: "Summer Listing Launch",
      subject: "New Beachfront Properties Available",
      sent: 1245,
      opened: 832,
      clicked: 145,
      status: "Active",
      date: "May 15, 2026"
    },
    {
      id: 2,
      name: "Client Appreciation Week",
      subject: "Exclusive Offers for Our Valued Clients",
      sent: 856,
      opened: 689,
      clicked: 302,
      status: "Scheduled",
      date: "May 20, 2026"
    },
    {
      id: 3,
      name: "Spring Market Update",
      subject: "Market Trends & New Listings in Your Area",
      sent: 2340,
      opened: 1456,
      clicked: 289,
      status: "Completed",
      date: "May 05, 2026"
    },
    {
      id: 4,
      name: "Open House Invitation",
      subject: "Join Us at 789 Park Avenue This Weekend",
      sent: 450,
      opened: 320,
      clicked: 98,
      status: "Active",
      date: "May 12, 2026"
    }
  ];

  // Dummy Data for Lead Sources
  const leadSources = [
    { source: "Social Media", count: 45, growth: "+12%" },
    { source: "Website Forms", count: 38, growth: "+8%" },
    { source: "Referrals", count: 28, growth: "+15%" },
    { source: "Open Houses", count: 22, growth: "-5%" },
    { source: "Zillow/Realtor.com", count: 18, growth: "+3%" },
  ];

  return (
    <div className="p-8 space-y-6 w-full max-w-[1400px] mx-auto">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Marketing & Campaigns</h2>
          <p className="text-slate-500 mt-1 text-sm">Manage your email campaigns and lead generation efforts.</p>
        </div>
        <button onClick={() => console.log('Create Campaign button clicked')} className="bg-[#0f3b9e] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-800 transition">
          <FiPlus size={18} /> Create Campaign
        </button>
      </div>

      {/* --- STATS GRID (KPI CARDS) --- */}
      <div className="grid grid-cols-4 gap-6 shrink-0">
        <StatCard icon={<FiMail className="text-white" />} title="Total Emails Sent" value="12.5K" growth="+3,240 this month" bg="bg-blue-500" />
        <StatCard icon={<FiUsers className="text-white" />} title="Leads Generated" value="185" growth="+24 vs last month" bg="bg-green-500" />
        <StatCard icon={<FiTarget className="text-white" />} title="Avg. Open Rate" value="42.8%" growth="+6.2% vs last month" bg="bg-purple-500" />
        <StatCard icon={<FiTrendingUp className="text-white" />} title="Click-Through Rate" value="18.4%" growth="+2.1% vs last month" bg="bg-orange-500" />
      </div>

      {/* --- MAIN LAYOUT: CAMPAIGNS + RIGHT SIDEBAR --- */}
      <div className="flex gap-6 shrink-0">
        
        {/* LEFT: CAMPAIGNS LIST */}
        <div className="flex-[2] bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-800">Active Email Campaigns</h4>
              <p className="text-xs text-slate-500 mt-0.5">Recent and scheduled marketing campaigns</p>
            </div>
            <div className="flex gap-3" role="group"> {/* Added role for accessibility */}
              <button className="flex items-center gap-2 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-slate-50">
                <FiFilter size={14} /> Filter
              </button>
            </div>
          </div>

          {/* Campaign Cards */}
          <div className="space-y-4">
            {campaignsData.map((campaign) => (
              <div key={campaign.id} className="p-4 border border-slate-200 rounded-lg hover:shadow-md hover:border-slate-300 transition bg-white">
                {/* Top Row */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
                      <FiSend size={18} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800">{campaign.name}</h5>
                      <p className="text-xs text-slate-500 mt-0.5">{campaign.subject}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase
                      ${campaign.status === 'Active' ? 'bg-green-100 text-green-700 border border-green-200' : 
                        campaign.status === 'Scheduled' ? 'bg-orange-100 text-orange-700 border border-orange-200' : 
                        'bg-slate-100 text-slate-700 border border-slate-200'}`}>
                      {campaign.status}
                    </span> {/* This button needs an onClick */}
                    <button className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition">
                      <FiMoreVertical size={16} />
                    </button>
                  </div>
                </div>

                {/* Middle Stats Row */}
                <div className="grid grid-cols-4 gap-4 mt-4 text-xs">
                  <div className="text-center">
                    <p className="text-slate-400 text-[10px] uppercase font-medium">Sent</p>
                    <p className="font-bold text-slate-800 mt-0.5 text-sm">{campaign.sent.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-400 text-[10px] uppercase font-medium">Opened</p>
                    <p className="font-bold text-slate-800 mt-0.5 text-sm">{campaign.opened.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-400 text-[10px] uppercase font-medium">Clicked</p>
                    <p className="font-bold text-slate-800 mt-0.5 text-sm">{campaign.clicked.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-400 text-[10px] uppercase font-medium">Open Rate</p>
                    <p className="font-bold text-green-600 mt-0.5 text-sm">
                      {Math.round((campaign.opened / campaign.sent) * 100)}%
                    </p>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                  <span className="flex items-center gap-1.5"><FiCalendar size={12} /> {campaign.date}</span>
                  <button onClick={() => console.log(`View Details for campaign ${campaign.id} clicked`)} className="text-blue-600 font-medium hover:underline">View Details</button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <button onClick={() => console.log('View All Campaigns button clicked')} className="w-full py-2 text-sm text-blue-600 font-medium hover:bg-slate-50 rounded-lg transition">
              View All Campaigns
            </button>
          </div>
        </div>

        {/* RIGHT: ANALYTICS WIDGETS */}
        <div className="flex-1 flex flex-col gap-6 max-w-[340px]">
          
          {/* Lead Sources Widget */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h4 onClick={() => console.log('Lead Sources header clicked')} className="text-sm font-bold text-slate-800 cursor-pointer">Lead Sources</h4>
              <button className="text-blue-600 text-xs font-medium hover:underline">View All</button>
            </div>
            <div className="space-y-3">
              {leadSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 text-xs">
                      {index === 0 ? '📱' : index === 1 ? '🌐' : index === 2 ? '🤝' : index === 3 ? '🏠' : '🏢'}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-700">{source.source}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-right">
                    <span className="text-xs font-bold text-slate-800">{source.count}</span>
                    <span className={`text-[10px] font-medium ${source.growth.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                      {source.growth}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Overview Widget (Mini Chart) */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h4 onClick={() => console.log('Performance Overview header clicked')} className="text-sm font-bold text-slate-800 cursor-pointer">Performance Overview</h4>
              <button className="text-blue-600 text-xs font-medium hover:underline">Full Report</button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Email Conversion Rate</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">12.5%</span>
                  <span className="text-green-600 flex items-center gap-0.5"><FiArrowUp size={10} /> 1.2%</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Lead Cost (CPL)</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">$18.40</span>
                  <span className="text-red-500 flex items-center gap-0.5"><FiArrowDown size={10} /> -$2.10</span>
                </div>
              </div>
              
              {/* Mini Bar Chart */}
              <div className="mt-4 h-20 flex items-end gap-2 justify-between px-1 pt-4 border-t border-slate-100">
                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="w-full h-12 bg-blue-100 rounded-t-sm relative">
                    <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-blue-400 rounded-t-sm"></div>
                  </div>
                  <span className="text-[8px] text-slate-400">Mon</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="w-full h-12 bg-blue-100 rounded-t-sm relative">
                    <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-blue-400 rounded-t-sm"></div>
                  </div>
                  <span className="text-[8px] text-slate-400">Tue</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="w-full h-12 bg-blue-100 rounded-t-sm relative">
                    <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-blue-400 rounded-t-sm"></div>
                  </div>
                  <span className="text-[8px] text-slate-400">Wed</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="w-full h-12 bg-blue-100 rounded-t-sm relative">
                    <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-blue-400 rounded-t-sm"></div>
                  </div>
                  <span className="text-[8px] text-slate-400">Thu</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="w-full h-12 bg-blue-100 rounded-t-sm relative">
                    <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-blue-500 rounded-t-sm"></div>
                  </div>
                  <span className="text-[8px] text-slate-400">Fri</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="w-full h-12 bg-blue-100 rounded-t-sm relative">
                    <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-blue-400 rounded-t-sm"></div>
                  </div>
                  <span className="text-[8px] text-slate-400">Sat</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="w-full h-12 bg-blue-100 rounded-t-sm relative">
                    <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-blue-400 rounded-t-sm"></div>
                  </div>
                  <span className="text-[8px] text-slate-400">Sun</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

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
        <p className="text-green-600 text-[11px] font-medium mt-1">{growth}</p>
      </div>
    </div>
  );
}