"use client";

import { Search, Shield, ChevronRight } from "lucide-react";

const roles = [
    { name: "Super Admin", users: 2, level: "Full Access", status: "Active" },
    { name: "Support Manager", users: 5, level: "Management", status: "Active" },
    { name: "Listing Moderator", users: 12, level: "Limited", status: "Active" },
    { name: "User", users: 12450, level: "Client", status: "Active" },
];

export default function RoleManagement() {
    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-[32px] font-black text-[#1E293B] tracking-tight mb-2">Role Management</h1>
                    <p className="text-[#64748B] font-medium tracking-tight">Define and manage platform permission levels.</p>
                </div>
            </div>

            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-[#F8FAFC]">
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Role Name</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Users Assigned</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Access Level</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Status</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F8FAFC]">
                            {roles.map((item, i) => (
                                <tr key={i} className="group hover:bg-gray-50/50 transition-all cursor-pointer">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563EB]">
                                                <Shield className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">{item.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-sm font-bold text-[#1E293B]">{item.users.toLocaleString()}</td>
                                    <td className="px-8 py-5">
                                        <span className="text-sm text-[#64748B] font-medium">{item.level}</span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#F0FDF4] text-[#22C55E]">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="p-2 text-[#CBD5E1] hover:text-[#1E293B] rounded-lg transition-all">
                                            <ChevronRight className="w-5 h-5" />
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
