import React, { useState } from 'react';
import {
  FiHelpCircle,
  FiMessageCircle,
  FiFileText,
  FiCheckCircle,
  FiPlus,
  FiSearch,
  FiChevronDown,
  FiChevronUp,
  FiMail,
  FiPhone,
  FiClock,
  FiUser,
  FiAlertCircle,
  FiSend,
  FiPhoneCall,
  FiVideo,
  FiArrowRight
} from "react-icons/fi";

export default function Help() {
  
  // State for FAQ Accordion
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle FAQ function
  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Dummy Data for FAQs
  const faqsData = [
    {
      id: 1,
      question: "How do I add a new property listing?",
      answer: "Navigate to the 'Properties' tab in the sidebar, click on the 'Add Property' button, and fill in the details like address, price, images, and amenities. Once saved, it will appear in your active listings."
    },
    {
      id: 2,
      question: "How can I generate a sales report?",
      answer: "Go to the 'Reports' section in the sidebar. You can filter by date range and export the report as a PDF or CSV file for your records."
    },
    {
      id: 3,
      question: "What is the best way to manage client leads?",
      answer: "Use the 'Leads' tab to track all incoming inquiries. You can assign leads to agents, add notes, and update their status (New, Contacted, Qualified) to manage your pipeline effectively."
    },
    {
      id: 4,
      question: "How do I reset my password?",
      answer: "Go to 'Settings' > 'Security'. You can change your password there. If you are locked out, click on 'Forgot Password' on the login screen."
    }
  ];

  // Dummy Data for Support Tickets
  const ticketsData = [
    { id: "#TKT-2024", subject: "Unable to upload property images", status: "Open", date: "2 hours ago", priority: "High" },
    { id: "#TKT-2023", subject: "Billing inquiry for Pro Plan", status: "In Progress", date: "2 days ago", priority: "Medium" },
    { id: "#TKT-2022", subject: "User permissions for new agent", status: "Resolved", date: "1 week ago", priority: "Low" },
  ];

  return (
    <div className="p-8 space-y-6 w-full max-w-[1400px] mx-auto">
      
      {/* --- HEADER & SEARCH SECTION --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Help & Support</h2>
          <p className="text-slate-500 mt-1 text-sm">Find answers to your questions or get in touch with our support team.</p>
        </div>
      </div>

      {/* --- HERO SEARCH BAR --- */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-center text-center">
        <div className="bg-blue-50 p-3 rounded-full mb-4">
          <FiHelpCircle className="text-blue-600" size={32} />
        </div>
        <h3 className="text-lg font-bold text-slate-800">How can we help you today?</h3>
        <p className="text-sm text-slate-500 mt-1 mb-4">Search our knowledge base or browse FAQs below.</p>
        <div className="relative w-full max-w-2xl">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search for help articles, FAQs, or topics..."
            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50"
          />
        </div>
      </div>

      {/* --- STATS GRID --- */}
      <div className="grid grid-cols-3 gap-6 shrink-0">
        <StatCard icon={<FiFileText className="text-white" />} title="Knowledge Base" value="45 Articles" growth="Browse guides" bg="bg-blue-500" />
        <StatCard icon={<FiCheckCircle className="text-white" />} title="Open Tickets" value="2" growth="Awaiting response" bg="bg-orange-500" />
        <StatCard icon={<FiMessageCircle className="text-white" />} title="Avg. Response Time" value="< 1 Hour" growth="90% resolved within 24h" bg="bg-green-500" />
      </div>

      {/* --- MAIN LAYOUT: FAQs + TICKETS --- */}
      <div className="flex gap-6 shrink-0">
        
        {/* LEFT: FAQ ACCORDION */}
        <div className="flex-[2] bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-800">Frequently Asked Questions</h4>
              <p className="text-xs text-slate-500 mt-0.5">Quick answers to the most common questions.</p>
            </div>
          </div>

          <div className="space-y-3">
            {faqsData.map((faq) => (
              <div key={faq.id} className="border border-slate-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition bg-white"
                >
                  <span className="text-sm font-medium text-slate-800">{faq.question}</span>
                  <span className="text-slate-400">
                    {openFAQ === faq.id ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                  </span>
                </button>
                {openFAQ === faq.id && (
                  <div className="p-4 pt-0 bg-white border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <button className="text-sm text-blue-600 font-medium hover:underline">View Full Knowledge Base →</button>
          </div>
        </div>

        {/* RIGHT: SUPPORT WIDGETS */}
        <div className="flex-1 flex flex-col gap-6 max-w-[340px]">
          
          {/* Recent Support Tickets */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-bold text-slate-800">Recent Tickets</h4>
              <button className="text-blue-600 text-xs font-medium hover:underline">View All</button>
            </div>
            <div className="space-y-3">
              {ticketsData.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition cursor-pointer">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-800">{ticket.id}</span>
                      <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full
                        ${ticket.status === 'Open' ? 'bg-red-100 text-red-700' : 
                          ticket.status === 'In Progress' ? 'bg-orange-100 text-orange-700' : 
                          'bg-green-100 text-green-700'}`}>
                        {ticket.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 truncate mt-0.5">{ticket.subject}</p>
                    <div className="flex items-center gap-3 mt-1 text-[10px] text-slate-400">
                      <span className="flex items-center gap-1"><FiClock size={10} /> {ticket.date}</span>
                      <span className="flex items-center gap-1"><FiAlertCircle size={10} /> {ticket.priority}</span>
                    </div>
                  </div>
                  <FiArrowRight className="text-slate-400" size={16} />
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm text-blue-600 font-medium hover:bg-slate-50 rounded-lg border border-slate-200 transition flex items-center justify-center gap-2">
              <FiPlus size={16} /> Create New Ticket
            </button>
          </div>

          {/* Contact Support Form */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-bold text-slate-800">Contact Support</h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100 cursor-pointer hover:bg-blue-100 transition">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <FiMail size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Email Support</p>
                  <p className="text-[10px] text-blue-600">support@horizonrealty.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100 cursor-pointer hover:bg-green-100 transition">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
                  <FiPhoneCall size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Call Us</p>
                  <p className="text-[10px] text-green-600">+1 (800) 555-0199</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100 cursor-pointer hover:bg-purple-100 transition">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  <FiVideo size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Live Chat</p>
                  <p className="text-[10px] text-purple-600">Available 9 AM - 6 PM EST</p>
                </div>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-xs font-medium text-slate-700 mb-2">Send a quick message</p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type your question..." 
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-[#0f3b9e] text-white p-2 rounded-lg hover:bg-blue-800 transition">
                  <FiSend size={16} />
                </button>
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
        <p className="text-slate-500 text-[10px] font-medium mt-1">{growth}</p>
      </div>
    </div>
  );
}