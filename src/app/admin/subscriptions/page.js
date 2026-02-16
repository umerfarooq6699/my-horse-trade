"use client";

import { Search, CreditCard, ChevronRight, FileText } from "lucide-react";

const subs = [
    { user: "John Doe", plan: "Premium Seller", cycle: "Monthly", amount: "$49.00", expiry: "Mar 12, 2026", status: "Active" },
    { user: "Emma Wilson", plan: "Standard Plan", cycle: "Yearly", amount: "$299.00", expiry: "Jan 15, 2027", status: "Active" },
    { user: "Michael Ross", plan: "Premium Seller", cycle: "Monthly", amount: "$49.00", expiry: "Feb 18, 2026", status: "Expiring Soon" },
];

export default function SubscriptionManagement() {
    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-[32px] font-black text-[#1E293B] tracking-tight mb-2">Subscriptions</h1>
                    <p className="text-[#64748B] font-medium tracking-tight">Manage user subscription plans and billing cycles.</p>
                </div>
            </div>

            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
                <div className="p-8 border-b border-[#F8FAFC]">
                    <div className="relative max-w-md w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input type="text" placeholder="Search subscriptions..." className="w-full pl-12 pr-6 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-[#2563EB]/10" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-[#F8FAFC]">
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">User</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Plan</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Cycle</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Amount</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Expiry</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F8FAFC]">
                            {subs.map((item, i) => (
                                <tr key={i} className="group hover:bg-gray-50/50 transition-all cursor-pointer">
                                    <td className="px-8 py-5 font-bold text-sm text-[#1E293B] group-hover:text-[#2563EB] transition-colors">{item.user}</td>
                                    <td className="px-8 py-5 text-sm font-bold text-[#1E293B]">{item.plan}</td>
                                    <td className="px-8 py-5 text-sm text-[#64748B] font-medium">{item.cycle}</td>
                                    <td className="px-8 py-5 text-sm font-black text-[#1E293B]">{item.amount}</td>
                                    <td className="px-8 py-5 text-sm text-[#64748B] font-medium">{item.expiry}</td>
                                    <td className="px-8 py-5">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${item.status === "Active" ? "bg-[#F0FDF4] text-[#22C55E]" : "bg-[#FFF7ED] text-[#F97316]"
                                            }`}>
                                            {item.status}
                                        </span>
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
