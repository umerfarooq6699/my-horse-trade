"use client";

import { Search, Filter, FileDown, MoreVertical, CreditCard } from "lucide-react";

const transactions = [
    { id: "#TR-9421", user: "John Doe", type: "Purchase", amount: "$4,500", date: "Feb 12, 2026", status: "Completed" },
    { id: "#TR-8329", user: "Sarah Miller", type: "Listing Fee", amount: "$25.00", date: "Feb 14, 2026", status: "Pending" },
    { id: "#TR-1920", user: "Emma Wilson", type: "Purchase", amount: "$12,800", date: "Feb 15, 2026", status: "In Escrow" },
    { id: "#TR-0291", user: "David Chen", type: "Withdrawal", amount: "$3,200", date: "Feb 16, 2026", status: "Failed" },
];

export default function TransactionManagement() {
    return (
        <div className="space-y-8 pb-10">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-[32px] font-black text-[#1E293B] tracking-tight mb-2">Transactions</h1>
                    <p className="text-[#64748B] font-medium tracking-tight">
                        Track and manage all financial activities and escrow payments.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm font-bold text-[#1E293B] hover:bg-gray-50 transition-all shadow-sm">
                        <FileDown className="w-4 h-4" />
                        Financial Report
                    </button>
                </div>
            </div>

            {/* Transactions Card */}
            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
                {/* Table Filters */}
                <div className="p-8 border-b border-[#F8FAFC] flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="relative max-w-md w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                            type="text"
                            placeholder="Search by ID or user..."
                            className="w-full pl-12 pr-6 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium transition-all outline-none focus:ring-2 focus:ring-[#2563EB]/10"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm font-bold text-[#64748B] hover:text-[#1E293B] transition-all">
                            <Filter className="w-4 h-4" />
                            Status
                        </button>
                    </div>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-[#F8FAFC]">
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">TX ID</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">User</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Type</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Amount</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Date</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Status</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F8FAFC]">
                            {transactions.map((item, i) => (
                                <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                                    <td className="px-8 py-5 font-bold text-sm text-[#1E293B]">{item.id}</td>
                                    <td className="px-8 py-5 text-sm font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">{item.user}</td>
                                    <td className="px-8 py-5 text-sm text-[#64748B] font-medium">{item.type}</td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2 text-sm font-black text-[#1E293B]">
                                            <CreditCard className="w-3.5 h-3.5 text-[#2563EB]" />
                                            {item.amount}
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-sm text-[#64748B] font-medium">{item.date}</td>
                                    <td className="px-8 py-5">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${item.status === "Completed" ? "bg-[#F0FDF4] text-[#22C55E]" :
                                                item.status === "Pending" ? "bg-[#FFF7ED] text-[#F97316]" :
                                                    item.status === "In Escrow" ? "bg-[#EFF6FF] text-[#3B82F6]" :
                                                        "bg-[#FEF2F2] text-[#EF4444]"
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="p-2 text-[#CBD5E1] hover:text-[#1E293B] rounded-lg transition-all">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
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
