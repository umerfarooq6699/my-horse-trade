"use client";

import {
    Search, Filter, Plus, FileDown, MoreVertical,
    Eye, CheckCircle, XCircle, Pencil, Trash2,
    ChevronRight, ChevronDown, AlertTriangle, Calendar, X
} from "lucide-react";
import { useState } from "react";
import ListingDetailsModal from "@/components/admin/listings/ListingDetailsModal";
import Link from "next/link";
import { mockHorses } from "@/components/marketplace/HorseGrid";

const stats = [
    { label: "Total Listings", value: "1,240", trend: "+12%", type: "listings" },
    { label: "Pending Review", value: "15", trend: "-5%", type: "pending", icon: AlertTriangle },
    { label: "Active Auctions", value: "45", trend: "+2%", type: "auctions" },
];

const listings = mockHorses;

export default function ListingManagement() {
    const [selectedListing, setSelectedListing] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                        <span className="text-[#1E293B]">Listing Management</span>
                    </div>
                    <h1 className="text-[24px] sm:text-[32px] font-[600] text-[#1E293B] tracking-tight mb-2">Listing Management</h1>
                    <p className="text-gray-400">
                        Manage, review, and moderate horse listings.
                    </p>
                </div>
                <div className="flex">
                    <Link 
                        href="/sell-horse"
                        className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-[#2563EB] text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 w-fit cursor-pointer"
                    >
                        <Plus className="w-4 h-4" />
                        Add New Listing
                    </Link>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm flex items-center justify-between relative overflow-hidden group">
                        <div className="space-y-1 z-10">
                            <p className="text-xs font-bold text-gray-500 tracking-tight uppercase">{stat.label}</p>
                            <div className="flex items-baseline gap-3">
                                <h3 className="text-[20px] sm:text-[28px] font-[700] text-[#1E293B] leading-none">{stat.value}</h3>
                                <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-lg ${stat.trend.startsWith('+') ? "text-[#22C55E] bg-[#F0FDF4]" : "text-[#EF4444] bg-[#FEF2F2]"
                                    }`}>
                                    {stat.trend}
                                </span>
                            </div>
                        </div>
                        {stat.icon && (
                            <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] flex items-center justify-center text-[#F97316]">
                                <stat.icon className="w-6 h-6" />
                            </div>
                        )}
                        {!stat.icon && i === 0 && (
                            <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                                <FileDown className="w-24 h-24" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Filters & Search */}
            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm p-4 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="relative w-full lg:max-w-[280px]">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                    <input
                        type="text"
                        placeholder="Search listings..."
                        className="w-full pl-12 pr-6 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium transition-all outline-none focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full lg:w-auto">
                    <div className="relative flex-1 sm:flex-none min-w-[120px] sm:min-w-[140px]">
                        <select className="appearance-none w-full sm:w-36 px-5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm font-bold text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/10 transition-all cursor-pointer pr-10">
                            <option>Status: All</option>
                            <option>Active</option>
                            <option>Pending</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
                    </div>
                    <div className="relative flex-1 sm:flex-none min-w-[120px] sm:min-w-[140px]">
                        <select className="appearance-none w-full sm:w-36 px-5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm font-bold text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/10 transition-all cursor-pointer pr-10">
                            <option>Type: All</option>
                            <option>Auction</option>
                            <option>Fixed</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
                    </div>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm font-bold text-[#1E293B] hover:bg-gray-50 transition-all cursor-pointer">
                        <Calendar className="w-4 h-4 text-[#64748B]" />
                        <span className="whitespace-nowrap text-xs sm:text-sm">Date: Last 30 Days</span>
                    </button>
                    <button className="flex-shrink-0 flex items-center gap-2 text-sm font-bold text-[#94A3B8] hover:text-[#EF4444] transition-colors ml-auto sm:ml-2 cursor-pointer">
                        <X className="w-4 h-4" />
                        Clear
                    </button>
                </div>
            </div>

            {/* Listings Table */}
            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
                <div className="overflow-x-auto lg:overflow-x-visible">
                    <table className="w-full text-left border-collapse min-w-[1000px] lg:min-w-0">
                        <thead>
                            <tr className="border-b border-[#F8FAFC]">
                                <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest pl-4 sm:pl-8">Horse Details</th>
                                <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Seller</th>
                                <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Type & Price</th>
                                <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest px-4 sm:px-8">Status</th>
                                <th className="pb-4 text-[11px] font-bold text-[#93A3B8] uppercase tracking-widest px-4 sm:px-8">Date Posted</th>
                                <th className="pb-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-right pr-4 sm:pr-8">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F8FAFC]">
                            {listings.map((item, i) => (
                                <tr key={i} className={`group hover:bg-gray-50 transition-all ${item.status === "Pending Review" ? "bg-[#FFFBF2]/30 hover:bg-[#FFFBF2]/50" : ""}`}>
                                    <td className="py-5 pl-4 sm:pl-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-[#F1F5F9]">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">{item.name}</h4>
                                                <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">ID: {item.id} • {item.breed}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 sm:px-8">
                                        <div className="flex items-center gap-2">
                                            <img src={item.sellerAvatar} className="w-6 h-6 rounded-full" />
                                            <span className="text-sm font-bold text-[#64748B]">{item.seller}</span>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 sm:px-8">
                                        <div className="space-y-1">
                                            <span className="px-2 py-0.5 rounded-lg bg-[#F5F3FF] text-[#7C3AED] text-[10px] font-bold">{item.type}</span>
                                            <p className="text-sm font-black text-[#1E293B]">{item.type === "Auction" ? `Bid: $${item.price.toLocaleString()}` : `$${item.price.toLocaleString()}`}</p>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 sm:px-8">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${item.status === "Active" ? "bg-[#22C55E]" :
                                                item.status === "Pending Review" ? "bg-[#F97316]" :
                                                    item.status === "Sold" ? "bg-[#CBD5E1]" : "bg-[#EF4444]"
                                                }`} />
                                            <span className={`text-[11px] font-black uppercase tracking-wider ${item.status === "Active" ? "text-[#22C55E]" :
                                                item.status === "Pending Review" ? "text-[#F97316]" :
                                                    item.status === "Sold" ? "text-[#94A3B8]" : "text-[#EF4444]"
                                                }`}>
                                                {item.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 sm:px-8">
                                        <span className="text-sm text-[#64748B] font-medium">{item.date}</span>
                                    </td>
                                    <td className="py-5 text-right pr-4 sm:pr-8">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => { setSelectedListing(item); setIsModalOpen(true); }}
                                                className="p-2 text-[#94A3B8] hover:text-[#2563EB] hover:bg-blue-50 rounded-lg transition-all cursor-pointer"
                                            >
                                                <Eye className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 text-[#EF4444] hover:bg-red-50 rounded-lg transition-all cursor-pointer">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#F8FAFC]">
                    <p className="text-xs font-bold text-[#94A3B8]">Showing 1-5 of 1,240 results</p>
                    <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto max-w-full">
                        <button className="text-[11px] sm:text-xs font-bold text-[#94A3B8] hover:text-[#1E293B] disabled:opacity-50 whitespace-nowrap" disabled>Previous</button>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#2563EB] text-white text-[11px] sm:text-xs font-bold">1</button>
                            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hover:bg-white text-[#64748B] text-[11px] sm:text-xs font-bold border border-transparent hover:border-[#E2E8F0]">2</button>
                            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hover:bg-white text-[#64748B] text-[11px] sm:text-xs font-bold border border-transparent hover:border-[#E2E8F0]">3</button>
                            <span className="px-2 text-[#94A3B8] text-[11px] sm:text-xs">...</span>
                        </div>
                        <button className="text-[11px] sm:text-xs font-bold text-[#64748B] hover:text-[#1E293B] whitespace-nowrap">Next</button>
                    </div>
                </div>
            </div>
            <ListingDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                listing={selectedListing}
            />
        </div>
    );
}

