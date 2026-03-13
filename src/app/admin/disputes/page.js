"use client";

import { Search, ChevronRight, Filter, MoreVertical, LayoutGrid, Clock, AlertCircle, FileText, CheckCircle2, Eye, Trash2 } from "lucide-react";
import { useState } from "react";
import DisputeDetailsModal from "@/components/admin/disputes/DisputeDetailsModal";

const disputes = [
    {
        id: "#DIS-9921",
        horse: { name: "Thunderbolt", price: "$12,500", image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=200" },
        parties: { 
            buyer: "JD", buyerName: "John Doe", buyerId: "USR-8823",
            seller: "SS", sellerName: "Sara Jenkins", sellerId: "USR-8827"
        },
        type: "Medical",
        status: "Evidence Review",
        created: "2 hrs ago"
    },
    {
        id: "#DIS-9920",
        horse: { name: "Stardust", price: "$8,000", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=200" },
        parties: { 
            buyer: "MK", buyerName: "Michael Ross", buyerId: "USR-8824",
            seller: "AL", sellerName: "Alex Morgan", sellerId: "USR-8821"
        },
        type: "Delivery",
        status: "Action Required",
        created: "1 day ago"
    },
    {
        id: "#DIS-9884",
        horse: { name: "Midnight Runner", price: "$22,000", image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&q=80&w=200" },
        parties: { 
            buyer: "TR", buyerName: "Tom Richards", buyerId: "USR-8850",
            seller: "BM", sellerName: " Beth Miller", sellerId: "USR-8851"
        },
        type: "Payment",
        status: "Pending Buyer",
        created: "3 days ago"
    },
    {
        id: "#DIS-9842",
        horse: { name: "Silver Arrow", price: "$45,000", image: "https://images.unsplash.com/photo-1551150441-3f3828204ef0?auto=format&fit=crop&q=80&w=200" },
        parties: { 
            buyer: "PL", buyerName: "Paul Logan", buyerId: "USR-8860",
            seller: "ZK", sellerName: "Zane King", sellerId: "USR-8861"
        },
        type: "Condition",
        status: "Closed",
        created: "1 week ago"
    },
];

export default function DisputeCenter() {
    const [selectedDispute, setSelectedDispute] = useState(null);

    return (
        <div className="space-y-6 sm:space-y-8 pb-10">
            {/* Modal */}
            <DisputeDetailsModal
                isOpen={!!selectedDispute}
                onClose={() => setSelectedDispute(null)}
                dispute={selectedDispute}
            />
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-1">
                <div>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-4">
                        <span>Home</span>
                        <ChevronRight className="w-3 h-3" />
                        <span>Dashboard</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-[#1E293B]">Dispute</span>
                    </div>
                    <h1 className="text-[24px] sm:text-[32px] font-[600] text-[#1E293B] tracking-tight mb-2">Dispute Center</h1>
                    <p className="text-gray-400">
                        Manage and resolve transaction conflicts efficiently.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
                {/* Tabs and Search Bar */}
                <div className="px-6 border-b border-[#F8FAFC]">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex items-center gap-8 py-4 sm:py-0 sm:h-20">
                            {[
                                { name: "Needs Attention", count: 4, active: true },
                                { name: "All Open" },
                                { name: "Resolved" },
                                { name: "Archived" }
                            ].map((tab, i) => (
                                <button
                                    key={i}
                                    className={`relative h-full flex items-center gap-2 text-sm font-bold transition-all whitespace-nowrap ${tab.active ? "text-[#2563EB]" : "text-[#94A3B8] hover:text-[#64748B]"
                                        }`}
                                >
                                    {tab.name}
                                    {tab.count && (
                                        <span className="w-5 h-5 flex items-center justify-center bg-[#2563EB] text-white text-[10px] font-bold rounded-full">
                                            {tab.count}
                                        </span>
                                    )}
                                    {tab.active && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-t-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                        <div className="relative py-4 lg:py-0 w-full lg:max-w-xs">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                            <input
                                type="text"
                                placeholder="..."
                                className="w-full pl-12 pr-6 py-2 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium outline-none focus:ring-1 focus:ring-[#2563EB]/10"
                            />
                        </div>
                    </div>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px] lg:min-w-full">
                        <thead>
                            <tr className="border-b border-[#F8FAFC]">
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest pl-8">Dispute ID</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Horse</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Parties</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Type</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Created</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-right pr-8">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F8FAFC]">
                            {disputes.map((item, i) => (
                                <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                                    <td className="px-6 py-5 pl-8 text-sm font-bold text-[#1E293B]">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-[#F1F5F9]">
                                                <img src={item.horse.image} alt={item.horse.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-[#1E293B] line-clamp-1">{item.horse.name}</p>
                                                <p className="text-[11px] text-[#94A3B8] font-medium">{item.horse.price}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center -space-x-1.5">
                                            <div className="w-8 h-8 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[10px] font-bold flex items-center justify-center border-2 border-white uppercase">{item.parties.buyer}</div>
                                            <div className="w-8 h-8 rounded-full bg-[#EDE9FE] text-[#7C3AED] text-[10px] font-bold flex items-center justify-center border-2 border-white uppercase">{item.parties.seller}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-sm text-[#334155] font-medium">{item.type}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${item.status === "Evidence Review" ? "bg-[#FFFBEB] text-[#D97706]" :
                                            item.status === "Action Required" ? "bg-[#FEF2F2] text-[#EF4444]" :
                                                item.status === "Pending Buyer" ? "bg-[#EFF6FF] text-[#2563EB]" :
                                                    "bg-[#F8FAFC] text-[#64748B]"
                                            }`}>
                                            <div className={`w-1.5 h-1.5 rounded-full ${item.status === "Evidence Review" ? "bg-[#D97706]" :
                                                item.status === "Action Required" ? "bg-[#EF4444]" :
                                                    item.status === "Pending Buyer" ? "bg-[#2563EB]" :
                                                        "bg-[#94A3B8]"
                                                }`} />
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-xs text-[#94A3B8] font-medium">{item.created}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right pr-8">
                                        <div className="flex items-center justify-end gap-1">
                                            <button 
                                                onClick={() => setSelectedDispute(item)}
                                                className="p-2 text-gray-400 hover:text-[#2563EB] hover:bg-blue-50 rounded-lg transition-all cursor-pointer"
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
            </div>
        </div>
    );
}
