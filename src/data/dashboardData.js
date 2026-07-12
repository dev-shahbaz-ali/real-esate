// src/data/dashboardData.js

export const statsData = [
  { id: 1, title: "Total Pipeline", value: "$24.6M", growth: "+12.5% vs last month", icon: "dollar", color: "bg-blue-500" },
  { id: 2, title: "Active Deals", value: "28", growth: "+7 vs last month", icon: "target", color: "bg-purple-500" },
  { id: 3, title: "Closed This Month", value: "6", growth: "+2 vs last month", icon: "check", color: "bg-green-500" },
  { id: 4, title: "Avg. Deal Size", value: "$875K", growth: "+8.3% vs last month", icon: "clock", color: "bg-orange-500" },
];

export const pipelineData = [
  {
    title: "New Leads (8)", amount: "$3.2M", badge: "New", badgeColor: "bg-blue-500",
    deals: [
      { image: "https://images.unsplash.com/photo-1600596542815-2d4b0a5c30b0", price: "$425,000", address: "125 Maple Street", location: "Denver, CO", lead: "Sarah Johnson" },
      { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", price: "$310,000", address: "210 Oak Avenue", location: "Austin, TX", lead: "James Wilson" }
    ],
    viewAll: "View all 8 leads"
  },
  {
    title: "Qualified (7)", amount: "$6.5M", badge: "Qualified", badgeColor: "bg-purple-500",
    deals: [
      { image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994", price: "$750,000", address: "4301 Beverly Hills Dr", location: "Los Angeles, CA", lead: "Emily Davis" },
      { image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", price: "$620,000", address: "178 Ocean Drive", location: "Miami, FL", lead: "Daniel Martinez" }
    ],
    viewAll: "View all 7 deals"
  },
  {
    title: "In Negotiation (5)", amount: "$8.1M", badge: "Negotiation", badgeColor: "bg-orange-500",
    deals: [
      { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", price: "$1,250,000", address: "789 Park Avenue", location: "New York, NY", lead: "Robert Brown" },
      { image: "https://images.unsplash.com/photo-1600607686527-6fb886090705", price: "$980,000", address: "55 Sunset Blvd", location: "Los Angeles, CA", lead: "Lisa Anderson" }
    ],
    viewAll: "View all 5 deals"
  },
  {
    title: "Closed Won (8)", amount: "$6.8M", badge: "Closed", badgeColor: "bg-green-500",
    deals: [
      { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", price: "$1,150,000", address: "22 Lakeview Road", location: "Chicago, IL", lead: "Michael Carter" },
      { image: "https://images.unsplash.com/photo-1600607688084-865a4a2f3b55", price: "$540,000", address: "350 Pine Street", location: "Seattle, WA", lead: "David Thompson" }
    ],
    viewAll: "View all 8 deals"
  }
];

export const tasksData = [
  { id: 1, text: "Follow up with Sarah Johnson", time: "Today, 10:00 AM" },
  { id: 2, text: "Property showing - 125 Maple St", time: "Today, 2:00 PM" },
  { id: 3, text: "Prepare CMA for 789 Park Ave", time: "Tomorrow, 9:00 AM" },
  { id: 4, text: "Team meeting", time: "May 16, 11:00 AM" },
  { id: 5, text: "Review offer documents", time: "May 17, 3:00 PM" },
];

export const showingsData = [
  { image: "https://images.unsplash.com/photo-1600596542815-2d4b0a5c30b0", address: "125 Maple Street", location: "Denver, CO", date: "May 15, 10:00 AM", agent: "Sarah Johnson" },
  { image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994", address: "4301 Beverly Hills Dr", location: "Beverly Hills, CA", date: "May 15, 1:00 PM", agent: "Emily Davis" },
  { image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", address: "178 Ocean Drive", location: "Miami, FL", date: "May 16, 11:00 AM", agent: "Daniel Martinez" }
];

export const activityData = [
  { id: 1, text: "You added a new deal 125 Maple Street", time: "2 minutes ago", icon: "plus", color: "text-blue-500" },
  { id: 2, text: "Sarah Johnson viewed 3 properties", time: "1 hour ago", icon: "users", color: "text-purple-500" },
  { id: 3, text: "Deal closed: 22 Lakeview Road", time: "3 hours ago", icon: "check", color: "text-green-500" },
  { id: 4, text: "New lead assigned: James Wilson", time: "5 hours ago", icon: "target", color: "text-orange-500" },
  { id: 5, text: "You updated deal 789 Park Avenue", time: "1 day ago", icon: "edit", color: "text-blue-400" }
];

export const agentsData = [
  { id: 1, name: "Emily Rodriguez", amount: "$2.4M" },
  { id: 2, name: "Michael Carter", amount: "$2.1M", active: true },
  { id: 3, name: "David Thompson", amount: "$1.8M" },
  { id: 4, name: "Jessica Lee", amount: "$1.2M" },
  { id: 5, name: "Robert Brown", amount: "$1.1M" }
];