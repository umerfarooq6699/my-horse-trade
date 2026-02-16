"use client";

import { Search, Filter, AlertTriangle, MoreVertical, MessageSquare } from "lucide-react";

const disputes = [
    { id: "#DS-1021", user: "Anne B.", against: "Sarah Miller", reason: "Item not as described", date: "3 hours ago", status: "Action Required" },
    { id: "#DS-0928", user: "Mike Ross", against: "Alex Rider", reason: "Payment issue", date: "1 day ago", status: "In Progress" },
    { id: "#DS-0812", user: "Emma Wilson", against: "Sarah Miller", reason: "Shipping delay", date: "2 days ago", status: "Resolved" },
];

export default function DisputeCenter() {
    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-[32px] font-black text-[#1E293B] tracking-tight mb-2">Dispute Center</h1>
                    <p className="text-[#64748B] font-medium tracking-tight">Review and resolve conflicts between users.</p>
                </div>
            </div>

            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
                <div className="p-8 border-b border-[#F8FAFC] flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="relative max-w-md w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input type="text" placeholder="Search disputes..." className="w-full pl-12 pr-6 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-[#2563EB]/10" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-[#F8FAFC]">
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">DS ID</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Plaintiff</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Defendant</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Reason</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Status</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F8FAFC]">
                            {disputes.map((item, i) => (
                                <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                                    <td className="px-8 py-5 font-bold text-sm text-[#1E293B]">{item.id}</td>
                                    <td className="px-8 py-5 text-sm font-bold text-[#1E293B]">{item.user}</td>
                                    <td className="px-8 py-5 text-sm font-bold text-[#64748B]">{item.against}</td>
                                    <td className="px-8 py-5 text-sm text-[#64748B] font-medium italic">"{item.reason}"</td>
                                    <td className="px-8 py-5">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${item.status === "Resolved" ? "bg-[#F0FDF4] text-[#22C55E]" :
                                                item.status === "In Progress" ? "bg-[#FFF7ED] text-[#F97316]" :
                                                    "bg-[#FEF2F2] text-[#EF4444]"
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                            <button className="p-2 text-[#64748B] hover:text-[#2563EB] rounded-lg hover:bg-blue-50 transition-all" title="View Chat">
                                                <MessageSquare className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 text-[#CBD5E1] hover:text-[#1E293B] rounded-lg transition-all">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
