import React, { useState } from 'react';
import {
  FiUser,
  FiBell,
  FiLock,
  FiCreditCard,
  FiShield,
  FiGlobe,
  FiSave,
  FiUpload,
  FiMail,
  FiPhone,
  FiMapPin,
  FiToggleLeft,
  FiToggleRight,
  FiCheckCircle,
  FiAlertCircle
} from "react-icons/fi";

export default function Settings() {
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('profile');
  
  // State for toggles
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  // Navigation items for Settings
  const navItems = [
    { id: 'profile', label: 'My Profile', icon: <FiUser size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <FiBell size={18} /> },
    { id: 'security', label: 'Security', icon: <FiLock size={18} /> },
    { id: 'preferences', label: 'Preferences', icon: <FiGlobe size={18} /> },
  ];

  return (
    <div className="p-8 space-y-6 w-full max-w-[1400px] mx-auto">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Settings</h2>
          <p className="text-slate-500 mt-1 text-sm">Manage your account settings, preferences, and security.</p>
        </div>
      </div>

      {/* --- SETTINGS LAYOUT: LEFT NAV + RIGHT CONTENT --- */}
      <div className="flex gap-6 shrink-0 min-h-[600px]">
        
        {/* LEFT: SETTINGS NAVIGATION */}
        <div className="w-[260px] bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col shrink-0 h-fit">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                  ${activeTab === item.id 
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <span className={activeTab === item.id ? 'text-blue-600' : 'text-slate-400'}>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-100">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition">
              <FiShield size={18} /> Logout
            </button>
          </div>
        </div>

        {/* RIGHT: SETTINGS CONTENT */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          
          {/* --- TAB 1: PROFILE --- */}
          {activeTab === 'profile' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">My Profile</h4>
                  <p className="text-sm text-slate-500">Update your personal information and profile photo.</p>
                </div>
              </div>

              {/* Profile Photo */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img 
                    src="https://i.pravatar.cc/150?img=12" 
                    alt="Profile" 
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover" 
                  />
                  <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 shadow-lg transition">
                    <FiUpload onClick={() => console.log('Upload profile photo button clicked')} size={16} />
                  </button>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800">Michael Carter</h5>
                  <p className="text-sm text-slate-500">Senior Agent</p>
                  <button className="mt-2 text-xs text-blue-600 font-medium hover:underline">Change Photo</button>
                </div>
              </div> {/* This button needs an onClick */}

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">First Name</label>
                  <input type="text" defaultValue="Michael" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Last Name</label>
                  <input type="text" defaultValue="Carter" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Email Address</label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="email" defaultValue="michael@horizonrealty.com" className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Phone Number</label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="text" defaultValue="+1 (555) 123-4567" className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                  </div>
                </div>
                <div className="space-y-1 col-span-2">
                  <label className="text-xs font-semibold text-slate-700">Office Address</label>
                  <div className="relative">
                    <FiMapPin className="absolute left-3 top-3 text-slate-400" size={16} />
                    <input type="text" defaultValue="123 Real Estate Blvd, Suite 100, New York, NY 10001" className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button onClick={() => console.log('Save Changes button clicked')} className="bg-[#0f3b9e] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-800 transition">
                  <FiSave size={18} /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* --- TAB 2: NOTIFICATIONS --- */}
          {activeTab === 'notifications' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Notifications</h4>
                  <p className="text-sm text-slate-500">Manage how you receive notifications and alerts.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-800">Email Notifications</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Receive email updates about deals, leads, and team activities.</p>
                  </div>
                  <button 
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className={`text-2xl transition-colors ${emailNotifications ? 'text-blue-600' : 'text-slate-300'}`}
                  >
                    {emailNotifications ? <FiToggleRight /> : <FiToggleLeft />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-800">Push Notifications</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Get real-time push alerts on your desktop and mobile device.</p>
                  </div>
                  <button 
                    onClick={() => setPushNotifications(!pushNotifications)}
                    className={`text-2xl transition-colors ${pushNotifications ? 'text-blue-600' : 'text-slate-300'}`}
                  >
                    {pushNotifications ? <FiToggleRight /> : <FiToggleLeft />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-800">SMS Notifications</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Receive important notifications via text message.</p>
                  </div>
                  <button 
                    onClick={() => setSmsNotifications(!smsNotifications)}
                    className={`text-2xl transition-colors ${smsNotifications ? 'text-blue-600' : 'text-slate-300'}`}
                  >
                    {smsNotifications ? <FiToggleRight /> : <FiToggleLeft />}
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button onClick={() => console.log('Save Notifications Preferences button clicked')} className="bg-[#0f3b9e] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-800 transition">
                  <FiSave size={18} /> Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* --- TAB 3: SECURITY --- */}
          {activeTab === 'security' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Security</h4>
                  <p className="text-sm text-slate-500">Manage your password and two-factor authentication.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h5 className="text-sm font-semibold text-slate-800 mb-4">Change Password</h5>
                  <div className="grid gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Current Password</label>
                      <input type="password" placeholder="Enter current password" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">New Password</label>
                      <input type="password" placeholder="Enter new password" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Confirm New Password</label>
                      <input type="password" placeholder="Confirm new password" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-800">Two-Factor Authentication (2FA)</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Add an extra layer of security to your account.</p>
                  </div>
                  <button 
                    onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                    className={`text-2xl transition-colors ${twoFactorAuth ? 'text-blue-600' : 'text-slate-300'}`}
                  >
                    {twoFactorAuth ? <FiToggleRight /> : <FiToggleLeft />}
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button onClick={() => console.log('Update Security button clicked')} className="bg-[#0f3b9e] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-800 transition">
                  <FiSave size={18} /> Update Security
                </button>
              </div>
            </div>
          )}

          {/* --- TAB 4: BILLING --- */}
          {activeTab === 'billing' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                
              </div>

              {/* Current Plan */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-base font-bold text-blue-800">Horizon CRM - Pro Plan</h5>
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Active</span>
                  </div>
                  <p className="text-sm text-blue-700 mt-1">Next billing date: June 15, 2026</p>
                  <p className="text-xs text-blue-600 mt-0.5">$49.99 / month · 5 team members included</p>
                </div>
                <button onClick={() => console.log('Upgrade Plan button clicked')} className="bg-white border border-blue-300 text-blue-700 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-blue-50 transition">
                  Upgrade Plan
                </button>
              </div>

              {/* Payment Method */}
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-slate-800">Payment Method</h5>
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg bg-white">
                  <div className="flex items-center gap-3">
                    <FiCreditCard className="text-slate-400" size={20} />
                    <div>
                      <p className="text-sm font-medium text-slate-700">•••• •••• •••• 4242</p>
                      <p className="text-xs text-slate-500">Expires 12/2028</p>
                    </div>
                  </div>
                  <button onClick={() => console.log('Edit Payment Method button clicked')} className="text-xs text-blue-600 font-medium hover:underline">Edit</button>
                </div>
                <button className="text-sm text-blue-600 font-medium hover:underline flex items-center gap-1 mt-1">
                  <FiPlus size={14} /> Add Payment Method
                </button>
              </div>

              {/* Billing History */}
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-slate-800">Billing History</h5>
                <div className="border border-slate-200 rounded-lg divide-y divide-slate-200">
                  <div className="flex justify-between p-4 text-sm">
                    <span className="text-slate-600">May 15, 2026</span>
                    <span className="font-medium text-slate-700">Horizon CRM Pro</span>
                    <span className="font-bold text-slate-800">$49.99</span>
                  </div>
                  <div className="flex justify-between p-4 text-sm">
                    <span className="text-slate-600">April 15, 2026</span>
                    <span className="font-medium text-slate-700">Horizon CRM Pro</span>
                    <span className="font-bold text-slate-800">$49.99</span>
                  </div>
                  <div className="flex justify-between p-4 text-sm bg-slate-50/50">
                    <span className="text-slate-600">March 15, 2026</span>
                    <span className="font-medium text-slate-700">Horizon CRM Pro</span>
                    <span className="font-bold text-slate-800">$49.99</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- TAB 5: PREFERENCES --- */}
          {activeTab === 'preferences' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Preferences</h4>
                  <p className="text-sm text-slate-500">Customize your dashboard, language, and time zone.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Language</label>
                  <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Time Zone</label>
                  <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                    <option>Eastern Time (ET)</option>
                    <option>Central Time (CT)</option>
                    <option>Mountain Time (MT)</option>
                    <option>Pacific Time (PT)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Date Format</label>
                  <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Currency</label>
                  <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button onClick={() => console.log('Save Preferences button clicked')} className="bg-[#0f3b9e] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:bg-blue-800 transition">
                  <FiSave size={18} /> Save Preferences
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}