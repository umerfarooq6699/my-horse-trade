"use client";

import { Search, Filter, Plus, FileDown, MoreVertical, Edit2, ChevronRight } from "lucide-react";
import Link from "next/link";

const users = [
    { id: 1, name: "John Doe", role: "Seller", status: "Active", joined: "Jan 12, 2026", avatar: "https://avatar.iran.liara.run/public/boy?username=John" },
    { id: 2, name: "Sarah Miller", role: "Buyer", status: "Active", joined: "Jan 15, 2026", avatar: "https://avatar.iran.liara.run/public/girl?username=Sarah" },
    { id: 3, name: "Michael Ross", role: "Seller", status: "Suspended", joined: "Jan 18, 2026", avatar: "https://avatar.iran.liara.run/public/boy?username=Michael" },
    { id: 4, name: "Emma Wilson", role: "Buyer", status: "Active", joined: "Jan 20, 2026", avatar: "https://avatar.iran.liara.run/public/girl?username=Emma" },
    { id: 5, name: "David Chen", role: "Admin", status: "Active", joined: "Feb 01, 2026", avatar: "https://avatar.iran.liara.run/public/boy?username=David" },
];

export default function UsersManagement() {
    return (
        <div className="space-y-5 sm:space-y-8 pb-10">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-4">
                        <span>Home</span>
                        <ChevronRight className="w-3 h-3" />
                        <span>Dashboard</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-[#1E293B]">User Management</span>
                    </div>
                    <h1 className="text-[24px] sm:text-[32px] font-[600] text-[#1E293B] tracking-tight mb-2">Users Management</h1>
                    <p className="text-gray-400">
                        Manage user access, view details, and update statuses.
                    </p>
                </div>
                <div className="flex">
                    <Link
                        href="/admin/users/add"
                        className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-[#2563EB] text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 w-fit"
                    >
                        <Plus className="w-4 h-4" />
                        Add New User
                    </Link>
                </div>
            </div>

            {/* Users Table Card */}
            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
                {/* Table Filters */}
                <div className="p-4 sm:p-8 border-b border-[#F8FAFC] flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="relative max-w-md w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            className="w-full pl-12 pr-6 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium transition-all outline-none focus:ring-2 focus:ring-[#2563EB]/10"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm font-bold text-[#64748B] hover:text-[#1E293B] transition-all">
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-[#F8FAFC]">
                                <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest pl-4 sm:pl-8">User</th>
                                <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Role</th>
                                <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Status</th>
                                <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Joined Date</th>
                                <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-right pr-4 sm:pr-8">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F8FAFC]">
                            {users.map((user, i) => (
                                <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                                    <td className="py-5 pl-4 sm:pl-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full border border-[#F1F5F9] overflow-hidden flex-shrink-0">
                                                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-sm font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 sm:px-8">
                                        <span className="text-sm text-[#64748B] font-medium">{user.role}</span>
                                    </td>
                                    <td className="py-5 px-4 sm:px-8">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${user.status === "Active" ? "bg-[#F0FDF4] text-[#22C55E]" : "bg-[#FEF2F2] text-[#EF4444]"
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-5 px-4 sm:px-8">
                                        <span className="text-sm text-[#64748B] font-medium">{user.joined}</span>
                                    </td>
                                    <td className="py-5 text-right pr-4 sm:pr-8">
                                        <Link
                                            href={`/admin/users/modify/${user.id}`}
                                            className="p-2 text-[#CBD5E1] hover:text-[#2563EB] rounded-lg hover:bg-blue-50 transition-all inline-flex items-center gap-2 font-bold text-xs"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs font-bold text-[#94A3B8]">Showing 5 of 120 users</p>
                    <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto max-w-full">
                        <button className="text-[11px] sm:text-xs font-bold text-[#94A3B8] hover:text-[#1E293B] disabled:opacity-50 whitespace-nowrap" disabled>Previous</button>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#2563EB] text-white text-[11px] sm:text-xs font-bold">1</button>
                            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hover:bg-white text-[#64748B] text-[11px] sm:text-xs font-bold border border-transparent hover:border-[#E2E8F0]">2</button>
                            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hover:bg-white text-[#64748B] text-[11px] sm:text-xs font-bold border border-transparent hover:border-[#E2E8F0]">3</button>
                        </div>
                        <button className="text-[11px] sm:text-xs font-bold text-[#64748B] hover:text-[#1E293B] whitespace-nowrap">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
