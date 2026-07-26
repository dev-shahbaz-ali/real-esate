import React, { useState } from 'react';
import {
  FiPlus,
  FiSearch,
  FiFilter,
  FiMoreVertical, // This is an icon, but often used as a clickable menu trigger
  // FiMoreVertical, // This is an icon, but often used as a clickable menu trigger
  FiHome,
  FiDollarSign,
  FiCalendar,
  FiMapPin
} from "react-icons/fi";
import ActionModal from '../components/ActionModal';

export default function Properties() {
  const [showForm, setShowForm] = useState(false);
  
  // Dummy Data for Properties
  const propertiesData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-2d4b0a5c30b0",
      title: "Modern Waterfront Villa",
      address: "125 Maple Street",
      location: "Denver, CO 80202",
      price: "$425,000",
      status: "Active",
      beds: 4,
      baths: 3,
      sqft: "2,400"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      title: "Luxury Penthouse",
      address: "4301 Beverly Hills Dr",
      location: "Los Angeles, CA 90210",
      price: "$750,000",
      status: "Pending",
      beds: 3,
      baths: 2,
      sqft: "1,800"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      title: "Family Estate Home",
      address: "789 Park Avenue",
      location: "New York, NY 10021",
      price: "$1,250,000",
      status: "Active",
      beds: 5,
      baths: 4,
      sqft: "3,500"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Cozy Suburban House",
      address: "22 Lakeview Road",
      location: "Chicago, IL 60601",
      price: "$540,000",
      status: "Sold",
      beds: 3,
      baths: 2,
      sqft: "1,900"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      title: "Downtown Loft",
      address: "55 Sunset Blvd",
      location: "Los Angeles, CA 90001",
      price: "$980,000",
      status: "Active",
      beds: 2,
      baths: 2,
      sqft: "1,500"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705",
      title: "Beachfront Paradise",
      address: "178 Ocean Drive",
      location: "Miami, FL 33139",
      price: "$620,000",
      status: "Pending",
      beds: 4,
      baths: 3,
      sqft: "2,200"
    }
  ];

  return (
    <div className="p-8 space-y-6 w-full max-w-[1400px] mx-auto">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Properties</h2>
          <p className="text-slate-500 mt-1 text-sm">Manage your listings and property portfolio.</p>
        </div>
        <button onClick={() => setShowForm(true)} className="bg-[#3568d4] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-700 transition">
          <FiPlus size={18} /> Add Property
        </button>
      </div>

      {/* --- STATS GRID --- */}
      <div className="grid grid-cols-4 gap-6 shrink-0">
        <StatCard title="Total Properties" value="156" growth="+12 this month" bg="bg-blue-500" icon={<FiHome className="text-white" />} />
        <StatCard title="Active Listings" value="42" growth="+3 vs last month" bg="bg-green-500" icon={<FiDollarSign className="text-white" />} />
        <StatCard title="Pending Sales" value="18" growth="+5 vs last month" bg="bg-orange-500" icon={<FiCalendar className="text-white" />} />
        <StatCard title="Total Value" value="$48.2M" growth="+8.3% vs last month" bg="bg-purple-500" icon={<FiDollarSign className="text-white" />} />
      </div>

      {/* --- SEARCH & FILTER BAR --- */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-wrap gap-4 justify-between items-center">
        <div className="relative flex-1 min-w-[300px]">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by address, city, or zip code..."
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
        <div className="flex items-center gap-3">
          <select className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Sold</option>
          </select>
          <select className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>Property Type</option>
            <option>Single Family</option>
            <option>Condo</option>
            <option>Townhouse</option>
          </select>
          <button onClick={() => console.log('Filter button clicked')} className="flex items-center gap-2 border border-slate-200 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 bg-white">
            <FiFilter size={16} /> Filter
          </button>
        </div>
      </div>

      {/* --- PROPERTIES GRID (CARDS) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {propertiesData.map((property) => (
          <div key={property.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition group">
            {/* Image */}
            <div className="relative h-56">
              <img src={property.image} alt={property.address} className="w-full h-full object-cover" />
              <div onClick={() => console.log(`More options for property ${property.id} clicked`)} className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full hover:bg-white cursor-pointer shadow-sm">
                <FiMoreVertical size={16} className="text-slate-700" />
              </div>
              <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase text-white
                ${property.status === 'Active' ? 'bg-green-500' : 
                  property.status === 'Pending' ? 'bg-orange-500' : 
                  'bg-slate-600'}`}>
                {property.status}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-slate-800 leading-tight">{property.title}</h3>
                <span className="text-lg font-bold text-slate-900">{property.price}</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-3">
                <FiMapPin size={14} /> {property.address} <span className="text-slate-300">|</span> {property.location}
              </div>

              {/* Details (Beds, Baths, Sqft) */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-800 font-bold">{property.beds}</span> Beds
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-800 font-bold">{property.baths}</span> Baths
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-800 font-bold">{property.sqft}</span> Sqft
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button onClick={() => console.log(`View Details for property ${property.id} clicked`)} className="flex-1 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 transition">View Details</button>
                <button onClick={() => console.log(`Schedule Showing for property ${property.id} clicked`)} className="flex-1 py-2 bg-[#0f3b9e] hover:bg-blue-800 text-white rounded-lg text-xs font-medium transition">Schedule Showing</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ActionModal open={showForm} onClose={() => setShowForm(false)} onSubmit={() => setShowForm(false)} title="Add property" description="Create a new listing for your portfolio." fields={[{ label: 'Property title', placeholder: 'Modern waterfront villa' }, { label: 'Price', placeholder: '$425,000' }, { label: 'Address', placeholder: '125 Maple Street', full: true }, { label: 'Property status', type: 'select', options: ['Active', 'Pending', 'Sold'] }]} />
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
