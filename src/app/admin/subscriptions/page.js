"use client";

import { Search, ChevronRight, Plus, Users, DollarSign, RefreshCw, BarChart3, TrendingUp, TrendingDown, Calendar, Filter, CheckCircle2, Clock, MoreVertical } from "lucide-react";

const subscriptions = [
    {
        user: "Sarah Jenkins",
        id: "#8823",
        avatar: "https://avatar.iran.liara.run/public/girl?username=Sarah",
        tier: "Platinum",
        status: "Active",
        startDate: "Oct 12, 2023",
        renewalDate: "Oct 12, 2024",
        payment: "Paid"
    },
    {
        user: "Michael Ross",
        id: "#8824",
        avatar: "https://avatar.iran.liara.run/public/boy?username=Michael",
        tier: "Premium",
        status: "Expired",
        startDate: "Sep 01, 2023",
        renewalDate: "Sep 01, 2024",
        payment: "Pending"
    },
    {
        user: "David Kim",
        id: "#8825",
        avatar: "https://avatar.iran.liara.run/public/boy?username=David",
        tier: "Free",
        status: "Active",
        startDate: "Jan 15, 2024",
        renewalDate: "N/A",
        payment: "Free"
    },
    {
        user: "Emily Watson",
        id: "#8826",
        avatar: "https://avatar.iran.liara.run/public/girl?username=Emily",
        tier: "Premium",
        status: "Canceled",
        startDate: "Mar 22, 2023",
        renewalDate: "Mar 22, 2024",
        payment: "Paid"
    },
    {
        user: "John Doe",
        id: "#8827",
        avatar: "https://avatar.iran.liara.run/public/boy?username=John",
        tier: "Platinum",
        status: "Active",
        startDate: "Dec 05, 2023",
        renewalDate: "Dec 05, 2024",
        payment: "Paid"
    },
];

export default function SubscriptionManagement() {
    return (
        <div className="space-y-6 sm:space-y-8 pb-10">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-4">
                        <span>Home</span>
                        <ChevronRight className="w-3 h-3" />
                        <span>Dashboard</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-[#1E293B]">Subscription</span>
                    </div>
                    <h1 className="text-[24px] sm:text-[32px] font-[600] text-[#1E293B] tracking-tight mb-2">Subscription Management</h1>
                    <p className="text-gray-400">
                        View and manage user subscription tiers and renewals
                    </p>
                </div>
                <div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                        <Plus className="w-4 h-4" />
                        Add New Subscription
                    </button>
                </div>
            </div>

            {/* Stats Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Users className="w-5 h-5" />
                        </div>
                        <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-lg flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +5.2%
                        </span>
                    </div>
                    <p className="text-xs font-bold text-gray-400 mb-1 leading-none">Active Subscriptions</p>
                    <h3 className="text-[20px] sm:text-[28px] font-[700] text-[#1E293B] leading-none">1,240</h3>
                </div>

                <div className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <DollarSign className="w-5 h-5" />
                        </div>
                        <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-lg flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +3.1%
                        </span>
                    </div>
                    <p className="text-xs font-bold text-gray-400 mb-1 leading-none">Monthly Revenue</p>
                    <h3 className="text-[20px] sm:text-[28px] font-[700] text-[#1E293B] leading-none">$12,400</h3>
                </div>

                <div className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <RefreshCw className="w-5 h-5" />
                        </div>
                        <span className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-lg flex items-center gap-1">
                            <TrendingDown className="w-3 h-3" />
                            -1.0%
                        </span>
                    </div>
                    <p className="text-xs font-bold text-gray-400 mb-1 leading-none">Pending Renewals</p>
                    <h3 className="text-[20px] sm:text-[28px] font-[700] text-[#1E293B] leading-none">45</h3>
                </div>

                <div className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <BarChart3 className="w-5 h-5" />
                        </div>
                        <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-lg flex items-center gap-1">
                            <TrendingDown className="w-3 h-3" />
                            -0.5%
                        </span>
                    </div>
                    <p className="text-xs font-bold text-gray-400 mb-1 leading-none">Churn Rate</p>
                    <h3 className="text-[20px] sm:text-[28px] font-[700] text-[#1E293B] leading-none">2.1%</h3>
                </div>
            </div>

            {/* Content Table Card */}
            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
                {/* Table Filters */}
                <div className="p-4 sm:p-6 border-b border-[#F8FAFC] flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-sm">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                            type="text"
                            placeholder="Search subscriptions..."
                            className="w-full pl-12 pr-6 py-2.5 bg-[#F8FAFC] border-none rounded-xl font-medium transition-all outline-none focus:ring-2 focus:ring-[#2563EB]/10"
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative">
                            <select className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-xl font-bold text-[#64748B] outline-none">
                                <option>Tier: All</option>
                            </select>
                            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90 text-[#94A3B8]" />
                        </div>
                        <div className="relative">
                            <select className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-xl font-bold text-[#64748B] outline-none">
                                <option>Status: Active</option>
                            </select>
                            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90 text-[#94A3B8]" />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl font-bold text-[#64748B] hover:text-[#1E293B] transition-all">
                            <Calendar className="w-4 h-4 text-[#94A3B8]" />
                            Renewal Date
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl font-bold text-[#64748B] hover:text-[#1E293B] transition-all">
                            <Filter className="w-4 h-4 text-[#94A3B8]" />
                            More Filters
                        </button>
                    </div>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[1000px] lg:min-w-full">
                        <thead>
                            <tr className="border-b border-[#F8FAFC]">
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest pl-8">User</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Tier</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-center">Status</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Start Date</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Renewal</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Payment</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-right pr-8">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F8FAFC]">
                            {subscriptions.map((item, i) => (
                                <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                                    <td className="px-6 py-5 pl-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full border border-[#F1F5F9] overflow-hidden flex-shrink-0">
                                                <img src={item.avatar} alt={item.user} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">{item.user}</p>
                                                <p className="text-[11px] text-[#94A3B8] font-medium">ID: {item.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${item.tier === "Platinum" ? "bg-purple-50 text-purple-600" :
                                            item.tier === "Premium" ? "bg-orange-50 text-orange-600" :
                                                "bg-gray-50 text-gray-500"
                                            }`}>
                                            {item.tier}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${item.status === "Active" ? "bg-[#F0FDF4] text-[#22C55E]" :
                                            item.status === "Expired" ? "bg-[#FEF2F2] text-[#EF4444]" :
                                                "bg-gray-50 text-gray-500"
                                            }`}>
                                            <div className={`w-1.5 h-1.5 rounded-full ${item.status === "Active" ? "bg-[#22C55E]" :
                                                item.status === "Expired" ? "bg-[#EF4444]" :
                                                    "bg-gray-400"
                                                }`} />
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-sm text-[#64748B] font-medium">{item.startDate}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`text-sm font-bold ${item.status === "Expired" ? "text-[#EF4444]" : "text-[#1E293B]"
                                            }`}>{item.renewalDate}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            {item.payment === "Paid" ? (
                                                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                            ) : item.payment === "Pending" ? (
                                                <Clock className="w-3.5 h-3.5 text-gray-400" />
                                            ) : null}
                                            <span className={`text-sm font-bold ${item.payment === "Paid" ? "text-green-600" : "text-[#64748B]"
                                                }`}>{item.payment}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right pr-8">
                                        <button className="p-2 text-[#CBD5E1] hover:text-[#1E293B] rounded-lg transition-all">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-6 border-t border-[#F8FAFC] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] font-bold text-[#94A3B8]">Showing 1 to 5 of 1240 results</p>
                    <div className="flex items-center gap-2">
                        <button className="px-5 py-2.5 rounded-xl border border-[#E2E8F0] text-[#CBD5E1] text-sm font-bold hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                            Previous
                        </button>
                        <div className="flex items-center gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2563EB] text-white text-sm font-bold transition-all shadow-lg shadow-blue-100">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#E2E8F0] text-[#64748B] text-sm font-bold hover:bg-gray-50 transition-all">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#E2E8F0] text-[#64748B] text-sm font-bold hover:bg-gray-50 transition-all">3</button>
                            <span className="px-1 text-[#94A3B8] font-bold">...</span>
                        </div>
                        <button className="px-5 py-2.5 rounded-xl border border-[#E2E8F0] text-[#64748B] text-sm font-bold hover:bg-gray-50 transition-all">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
