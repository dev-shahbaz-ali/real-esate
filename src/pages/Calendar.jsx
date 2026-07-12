import React from 'react';
import {
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiClock,
  FiUser,
  FiHome,
  FiPhone,
  FiMoreVertical,
  FiFilter
} from "react-icons/fi";

export default function CalendarPage() {
  
  // Dummy Data for Upcoming Events
  const upcomingEvents = [
    {
      id: 1,
      title: "Property Showing: 125 Maple Street",
      type: "Showing",
      time: "10:00 AM - 11:00 AM",
      date: "May 15, 2026",
      agent: "Sarah Johnson",
      icon: <FiHome />
    },
    {
      id: 2,
      title: "Client Meeting: Robert Brown",
      type: "Meeting",
      time: "1:30 PM - 2:15 PM",
      date: "May 15, 2026",
      agent: "Michael Carter",
      icon: <FiUser />
    },
    {
      id: 3,
      title: "Open House: 4301 Beverly Hills Dr",
      type: "Open House",
      time: "11:00 AM - 2:00 PM",
      date: "May 16, 2026",
      agent: "Emily Davis",
      icon: <FiHome />
    },
    {
      id: 4,
      title: "Phone Call: James Wilson (Lead)",
      type: "Call",
      time: "4:00 PM - 4:30 PM",
      date: "May 16, 2026",
      agent: "Michael Carter",
      icon: <FiPhone />
    },
    {
      id: 5,
      title: "Home Inspection: 22 Lakeview Road",
      type: "Inspection",
      time: "9:00 AM - 10:30 AM",
      date: "May 18, 2026",
      agent: "David Thompson",
      icon: <FiHome />
    }
  ];

  // Dummy Grid for Week Days
  const weekDays = [
    { day: "Sun", date: "11", events: [] },
    { day: "Mon", date: "12", events: ["Inspection"] },
    { day: "Tue", date: "13", events: ["Meeting"] },
    { day: "Wed", date: "14", events: [] },
    { day: "Thu", date: "15", events: ["Showing", "Meeting"] },
    { day: "Fri", date: "16", events: ["Open House", "Call"] },
    { day: "Sat", date: "17", events: [] }
  ];

  return (
    <div className="p-8 space-y-6 w-full max-w-[1400px] mx-auto">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Calendar</h2>
          <p className="text-slate-500 mt-1 text-sm">Schedule appointments, showings, and meetings.</p>
        </div>
        <button onClick={() => console.log('Add Event button clicked')} className="bg-[#0f3b9e] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-800 transition">
          <FiPlus size={18} /> Add Event
        </button>
      </div>

      {/* --- STATS GRID --- */}
      <div className="grid grid-cols-4 gap-6 shrink-0">
        <StatCard title="This Week's Events" value="12" growth="+3 vs last week" bg="bg-blue-500" icon={<FiCalendar className="text-white" />} />
        <StatCard title="Showings" value="4" growth="+1 vs last week" bg="bg-green-500" icon={<FiHome className="text-white" />} />
        <StatCard title="Meetings" value="5" growth="+2 vs last week" bg="bg-orange-500" icon={<FiUser className="text-white" />} />
        <StatCard title="Pending Tasks" value="8" growth="Due this week" bg="bg-purple-500" icon={<FiClock className="text-white" />} />
      </div>

      {/* --- MAIN LAYOUT: WEEK CALENDAR + RIGHT SIDEBAR --- */}
      <div className="flex gap-6 shrink-0">
        
        {/* LEFT: CALENDAR GRID (WEEK VIEW) */}
        <div className="flex-[2] bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          
          {/* Calendar Header */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <button onClick={() => console.log('Previous month/week button clicked')} className="p-1.5 bg-slate-100 rounded hover:bg-slate-200 text-slate-600 transition">
                <FiChevronLeft size={20} />
              </button>
              <h3 className="text-lg font-bold text-slate-800">May 11 - 17, 2026</h3>
              <button onClick={() => console.log('Next month/week button clicked')} className="p-1.5 bg-slate-100 rounded hover:bg-slate-200 text-slate-600 transition">
                <FiChevronRight size={20} />
              </button>
            </div>
            <div className="flex gap-2" role="group"> {/* Added role for accessibility */}
              <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition">Day</button>
              <button className="px-4 py-1.5 bg-[#0f3b9e] text-white rounded-lg text-sm font-medium shadow-sm">Week</button>
              <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition">Month</button>
            </div>
          </div>

          {/* Calendar Grid (7 Days) */}
          <div className="grid grid-cols-7 gap-2 text-center">
            {weekDays.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition">
                <span className="text-xs font-medium text-slate-400 uppercase">{item.day}</span>
                <span className={`text-lg font-bold mt-1 ${item.events.length > 0 ? 'text-blue-600' : 'text-slate-800'}`}>
                  {item.date}
                </span>
                {/* Event Dots */}
                <div className="flex flex-col gap-0.5 mt-2 h-full justify-center">
                  {item.events.length > 0 ? (
                    item.events.map((ev, i) => (
                      <span key={i} className="text-[8px] font-bold text-white bg-blue-500 px-2 py-0.5 rounded-full uppercase">
                        {ev}
                      </span>
                    ))
                  ) : (
                    <span className="text-[10px] text-slate-300 mt-2">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: UPCOMING EVENTS LIST */}
        <div className="flex-1 flex flex-col gap-6 max-w-[380px]">
          
          {/* Upcoming Events Widget */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 h-full">
            <div className="flex justify-between items-center mb-5">
              <h4 onClick={() => console.log('Upcoming Events header clicked')} className="text-sm font-bold text-slate-800 cursor-pointer">Upcoming Events</h4>
              <button className="flex items-center gap-1 text-xs text-blue-600 font-medium hover:underline">
                <FiFilter size={14} /> Filter
              </button>
            </div>
            
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:shadow-sm transition bg-white">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg shrink-0
                    ${event.type === 'Showing' ? 'bg-green-500' : 
                      event.type === 'Meeting' ? 'bg-blue-500' :
                      event.type === 'Open House' ? 'bg-purple-500' :
                      event.type === 'Call' ? 'bg-orange-500' :
                      'bg-slate-500'}`}>
                    {event.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h5 className="text-sm font-bold text-slate-800 leading-tight">{event.title}</h5>
                      <button className="text-slate-300 hover:text-slate-600"><FiMoreVertical size={16} /></button>
                    </div> {/* This button needs an onClick */}
                    
                    <div className="flex items-center gap-4 mt-1.5 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5"><FiCalendar size={12} /> {event.date}</span>
                      <span className="flex items-center gap-1.5"><FiClock size={12} /> {event.time}</span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-50">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <FiUser size={12} /> <span className="font-medium text-slate-600">{event.agent}</span>
                      </div>
                      <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full 
                        ${event.type === 'Showing' ? 'bg-green-100 text-green-700' : 
                          event.type === 'Meeting' ? 'bg-blue-100 text-blue-700' :
                          event.type === 'Open House' ? 'bg-purple-100 text-purple-700' :
                          'bg-orange-100 text-orange-700'}`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <button onClick={() => console.log('View All Events button clicked')} className="w-full py-2 text-sm text-blue-600 font-medium hover:bg-slate-50 rounded-lg transition">
                View All Events
              </button>
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

function StatCard({ title, value, growth, bg, icon }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${bg}`}>
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