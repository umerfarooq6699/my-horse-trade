"use client";

import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

const activities = [
    {
        user: "Sarah Jenkins",
        userId: "USR-7721",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
        activity: "Listed a Horse",
        idRef: "AL-4921",
        date: "2 mins ago",
        status: "Pending Review",
        statusColor: "bg-[#FFF7ED] text-[#F97316]"
    },
    {
        user: "Mike Ross",
        userId: "USR-7722",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
        activity: "Transaction",
        idRef: "$4,500",
        date: "1 hour ago",
        status: "Completed",
        statusColor: "bg-[#F0FDF4] text-[#22C55E]"
    },
    {
        user: "Anne B.",
        userId: "USR-7723",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
        activity: "Dispute Filed",
        idRef: "ID-221",
        date: "3 hours ago",
        status: "Action Required",
        statusColor: "bg-[#FEF2F2] text-[#EF4444]",
        hasAction: true
    },
    {
        user: "James K.",
        userId: "USR-7724",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
        activity: "New Seller Account",
        idRef: "-",
        date: "5 hours ago",
        status: "Verified",
        statusColor: "bg-[#EFF6FF] text-[#3B82F6]"
    },
];

export default function RecentActivity() {
    return (
        <div className="bg-white p-4 sm:p-8 rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
            <div className="sm:flex items-center justify-between mb-8">
                <h3 className="mobile_heading lg_heading">Recent Activity</h3>
                <button className="mt-3 sm:mt-0 text-[#2563EB] text-sm font-bold hover:underline">View All Activity</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="border-b border-[#F8FAFC]">
                            <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest pl-2">User</th>
                            <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">User ID</th>
                            <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Activity</th>
                            <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">ID/REF</th>
                            <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Date</th>
                            <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest pr-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F8FAFC]">
                        {activities.map((item, i) => (
                            <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                                <td className="py-5 pl-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full border border-[#F1F5F9] overflow-hidden flex-shrink-0">
                                            <img src={item.avatar} alt={item.user} className="w-full h-full object-cover" />
                                        </div>
                                        <span className="text-sm font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">{item.user}</span>
                                    </div>
                                </td>
                                <td className="py-5">
                                    <span className="text-sm text-[#94A3B8] font-bold">{item.userId}</span>
                                </td>
                                <td className="py-5">
                                    <span className="text-sm text-[#64748B] font-medium">{item.activity}</span>
                                </td>
                                <td className="py-5">
                                    <span className="text-sm text-[#1E293B] font-bold">{item.idRef}</span>
                                </td>
                                <td className="py-5">
                                    <span className="text-sm text-[#64748B] font-medium">{item.date}</span>
                                </td>
                                <td className="py-5 pr-2">
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${item.statusColor}`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between mt-8">
                <p className="text-xs font-bold text-[#94A3B8]">Showing 4 of 24 recent activities</p>
                <div className="flex items-center gap-2">
                    <button className="px-5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-bold text-[#94A3B8] hover:text-[#1E293B] hover:border-[#CBD5E1] transition-all flex items-center gap-2">
                        Previous
                    </button>
                    <button className="px-5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-bold text-[#1E293B] hover:border-[#2563EB] hover:bg-blue-50 transition-all flex items-center gap-2">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
