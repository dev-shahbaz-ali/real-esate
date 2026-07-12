import React from 'react';
import {
  FiPlus,
  FiSearch,
  FiFilter,
  FiMoreVertical,
  FiFolder,
  FiFileText,
  FiImage,
  FiFile,
  FiDownload,
  FiTrash2,
  FiStar,
  FiShare2,
  FiCalendar,
  FiUser
} from "react-icons/fi";

export default function Documents() {
  
  // Dummy Data for Folders
  const foldersData = [
    { id: 1, name: "Active Deals", files: 24, size: "1.2 GB" },
    { id: 2, name: "Closed Deals", files: 18, size: "850 MB" },
    { id: 3, name: "Templates & Forms", files: 12, size: "420 MB" },
    { id: 4, name: "Client Disclosures", files: 45, size: "2.4 GB" },
  ];

  // Dummy Data for Recent Files
  const filesData = [
    {
      id: 1,
      name: "Purchase_Agreement_125_Maple.pdf",
      type: "PDF",
      size: "2.4 MB",
      modified: "2 days ago",
      property: "125 Maple Street",
      icon: <FiFileText className="text-red-500" />
    },
    {
      id: 2,
      name: "Property_Disclosure_Beverly_Hills.docx",
      type: "DOCX",
      size: "850 KB",
      modified: "5 days ago",
      property: "4301 Beverly Hills Dr",
      icon: <FiFileText className="text-blue-500" />
    },
    {
      id: 3,
      name: "Home_Inspection_Report_Park_Av.pdf",
      type: "PDF",
      size: "5.1 MB",
      modified: "1 week ago",
      property: "789 Park Avenue",
      icon: <FiFileText className="text-red-500" />
    },
    {
      id: 4,
      name: "Interior_Photos_Lakeview_Road.jpg",
      type: "JPG",
      size: "3.8 MB",
      modified: "2 weeks ago",
      property: "22 Lakeview Road",
      icon: <FiImage className="text-green-500" />
    },
    {
      id: 5,
      name: "Counter_Offer_Draft_Sunset_Blvd.docx",
      type: "DOCX",
      size: "600 KB",
      modified: "1 hour ago",
      property: "55 Sunset Blvd",
      icon: <FiFileText className="text-blue-500" />
    }
  ];

  return (
    <div className="p-8 space-y-6 w-full max-w-[1400px] mx-auto">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Documents</h2>
          <p className="text-slate-500 mt-1 text-sm">Manage contracts, disclosures, and property files.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => console.log('New Folder button clicked')} className="border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm hover:bg-slate-50 transition">
            <FiPlus size={18} /> New Folder
          </button>
          <button onClick={() => console.log('Upload File button clicked')} className="bg-[#0f3b9e] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-800 transition">
            <FiPlus size={18} /> Upload File
          </button>
        </div>
      </div>

      {/* --- STATS GRID --- */}
      <div className="grid grid-cols-4 gap-6 shrink-0">
        <StatCard icon={<FiFolder className="text-white" />} title="Total Folders" value="12" growth="+2 this month" bg="bg-blue-500" />
        <StatCard icon={<FiFileText className="text-white" />} title="Total Files" value="156" growth="+18 this month" bg="bg-purple-500" />
        <StatCard icon={<FiFile className="text-white" />} title="Total Storage Used" value="4.8 GB" growth="85% of 5.6 GB" bg="bg-orange-500" />
        <StatCard icon={<FiStar className="text-white" />} title="Starred Files" value="24" growth="Important docs" bg="bg-green-500" />
      </div>

      {/* --- SEARCH & FILTER BAR --- */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-wrap gap-4 justify-between items-center">
        <div className="relative flex-1 min-w-[300px]">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search for files, folders, or property names..."
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
        <div className="flex items-center gap-3">
          <select className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>File Type</option>
            <option>All Types</option>
            <option>PDF</option>
            <option>Images</option>
            <option>Word</option>
          </select>
          <select className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>Sort by</option>
            <option>Last Modified</option>
            <option>File Size</option>
            <option>Name (A-Z)</option>
          </select>
          <button onClick={() => console.log('Filter documents button clicked')} className="flex items-center gap-2 border border-slate-200 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 bg-white">
            <FiFilter size={16} /> Filter
          </button>
        </div>
      </div>

      {/* --- FOLDERS SECTION --- */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-slate-700">Folders</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {foldersData.map((folder) => (
            <div key={folder.id} onClick={() => console.log(`Folder ${folder.name} clicked`)} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition group cursor-pointer">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 text-2xl">
                    <FiFolder />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">{folder.name}</h5>
                    <p className="text-xs text-slate-500">{folder.files} files</p>
                  </div>
                </div>
                <button onClick={(e) => { e.stopPropagation(); console.log(`More options for folder ${folder.name} clicked`); }} className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition">
                  <FiMoreVertical size={16} />
                </button>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                <span>{folder.size}</span>
                <span className="text-blue-600 font-medium group-hover:underline">Open Folder</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- RECENT FILES TABLE --- */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-slate-700">Recent Files</h4>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left text-sm text-slate-500">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 w-10">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 cursor-pointer" />
                </th>
                <th className="px-6 py-4">File Name</th>
                <th className="px-6 py-4">Property</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Size</th>
                <th className="px-6 py-4">Modified</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filesData.map((file) => (
                <tr key={file.id} className="hover:bg-slate-50 transition group">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 cursor-pointer" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{file.icon}</span>
                    <span onClick={() => console.log(`File ${file.name} clicked`)} className="font-medium text-slate-900 hover:text-blue-600 hover:underline cursor-pointer">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-600">{file.property}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-700 uppercase">
                      {file.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs">{file.size}</td>
                  <td className="px-6 py-4 text-xs">{file.modified}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition">
                      <button onClick={() => console.log(`Download file ${file.name} clicked`)} className="p-1 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded transition"><FiDownload size={16} /></button>
                      <button onClick={() => console.log(`Share file ${file.name} clicked`)} className="p-1 text-slate-400 hover:text-green-600 hover:bg-slate-100 rounded transition"><FiShare2 size={16} /></button>
                      <button onClick={() => console.log(`Delete file ${file.name} clicked`)} className="p-1 text-slate-400 hover:text-red-600 hover:bg-slate-100 rounded transition"><FiTrash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* --- TABLE FOOTER --- */}
          <div className="px-6 py-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500 bg-slate-50/50">
            <span>Showing 5 of 156 files</span>
            <div className="flex gap-2" role="group"> {/* Added role for accessibility */}
              <button onClick={() => console.log('Previous files page clicked')} className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
              <button onClick={() => console.log('Next files page clicked')} className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50">Next</button>
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