"use client";

import { Search, Filter, FileDown, MoreVertical, CreditCard, ChevronRight, TrendingUp, Lock, AlertCircle, Calendar, Download, Plus, Eye, Trash2, X } from "lucide-react";
import { useState } from "react";
import TransactionDetailsModal from "@/components/admin/transactions/TransactionDetailsModal";


const transactions = [
    {
        id: "#TRX-9921",
        date: "Oct 24, 2023",
        horse: { name: "Thunderbolt", breed: "Thoroughbred", image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=100&h=100&fit=crop" },
        parties: { buyer: "JA", seller: "MA", buyerName: "Jane", sellerName: "Mark", buyerAvatar: "https://i.pravatar.cc/150?u=jane", sellerAvatar: "https://i.pravatar.cc/150?u=mark" },
        amount: "$15,000.00",
        escrowStatus: "Funds Secured",
        deliveryStatus: "In Transit"
    },
    {
        id: "#TRX-9920",
        date: "Oct 23, 2023",
        horse: { name: "Mist Walker", breed: "Arabian", image: "https://images.unsplash.com/photo-1534073737927-85f1df9605d2?w=100&h=100&fit=crop" },
        parties: { buyer: "RO", seller: "EM", buyerName: "Robert", sellerName: "Emily", buyerAvatar: "https://i.pravatar.cc/150?u=robert", sellerAvatar: "https://i.pravatar.cc/150?u=emily" },
        amount: "$8,500.00",
        escrowStatus: "Disputed",
        deliveryStatus: "Delayed"
    },
    {
        id: "#TRX-9918",
        date: "Oct 22, 2023",
        horse: { name: "Midnight Star", breed: "Friesian", image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=100&h=100&fit=crop" },
        parties: { buyer: "DA", seller: "SA", buyerName: "David", sellerName: "Sarah", buyerAvatar: "https://i.pravatar.cc/150?u=david", sellerAvatar: "https://i.pravatar.cc/150?u=sarah" },
        amount: "$22,000.00",
        escrowStatus: "Pending Release",
        deliveryStatus: "Delivered"
    },
    {
        id: "#TRX-9915",
        date: "Oct 20, 2023",
        horse: { name: "Rusty", breed: "Quarter Horse", image: "https://images.unsplash.com/photo-1551150441-3f3828204ef0?w=100&h=100&fit=crop" },
        parties: { buyer: "MI", seller: "TO", buyerName: "Michael", sellerName: "Tom", buyerAvatar: "https://i.pravatar.cc/150?u=michael", sellerAvatar: "https://i.pravatar.cc/150?u=tom" },
        amount: "$5,000.00",
        escrowStatus: "Released",
        deliveryStatus: "Complete"
    },
    {
        id: "#TRX-9930",
        date: "Today, 10:30 AM",
        horse: { name: "Gold Rush", breed: "Palomino", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=100&h=100&fit=crop" },
        parties: { buyer: "LI", seller: "AN", buyerName: "Liam", sellerName: "Anna", buyerAvatar: "https://i.pravatar.cc/150?u=liam", sellerAvatar: "https://i.pravatar.cc/150?u=anna" },
        amount: "$12,750.00",
        escrowStatus: "Awaiting Deposit",
        deliveryStatus: "Not Started"
    },
];

export default function TransactionManagement() {
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewDetails = (transaction) => {
        setSelectedTransaction(transaction);
        setIsModalOpen(true);
    };

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
                        <span className="text-[#1E293B]">Transactions</span>
                    </div>
                    <h1 className="text-[24px] sm:text-[32px] font-[600] text-[#1E293B] tracking-tight mb-2">Transaction Management</h1>
                    <p className="text-gray-400 max-w-2xl">
                        Monitor platform volume, manage escrow funds, and resolve delivery disputes efficiently.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {/* Buttons removed as requested */}
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-lg flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +12%
                        </span>
                    </div>
                    <p className="text-sm font-semibold text-[#64748B] mb-1">Active Transactions</p>
                    <p className="text-[20px] sm:text-[28px] font-[700] text-[#1E293B] leading-none">142</p>
                </div>

                <div className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                            <Lock className="w-5 h-5" />
                        </div>
                        <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-lg flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +5%
                        </span>
                    </div>
                    <p className="text-sm font-semibold text-[#64748B] mb-1">Held in Escrow</p>
                    <p className="text-[20px] sm:text-[28px] font-[700] text-[#1E293B] leading-none">$450,200</p>
                </div>

                <div className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                            <AlertCircle className="w-5 h-5" />
                        </div>
                        <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-lg">
                            0%
                        </span>
                    </div>
                    <p className="text-sm font-semibold text-[#64748B] mb-1">Active Disputes</p>
                    <p className="text-[20px] sm:text-[28px] font-[700] text-[#1E293B] leading-none">2</p>
                </div>
            </div>

            {/* Transactions Card */}
            <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
                {/* Table Filters */}
                <div className="p-4 sm:p-6 border-b border-[#F8FAFC] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                            type="text"
                            placeholder="Search by ID or user..."
                            className="w-full pl-12 pr-6 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium transition-all outline-none focus:ring-2 focus:ring-[#2563EB]/10"
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative">
                            <select className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm font-bold text-[#64748B] outline-none">
                                <option>Status</option>
                            </select>
                            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90 text-[#94A3B8]" />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm font-bold text-[#64748B] hover:text-[#1E293B] transition-all">
                            <Calendar className="w-4 h-4 text-[#94A3B8]" />
                            Last 30 Days
                        </button>
                        <button className="p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[#64748B] hover:text-[#1E293B]">
                            <Filter className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto text-[13px]">
                    <table className="w-full text-left border-collapse min-w-[800px] lg:min-w-full">
                        <thead>
                            <tr className="border-b border-[#F8FAFC]">
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">ID / DATE</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">HORSE</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">PARTIES</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">AMOUNT</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">ESCROW STATUS</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">DELIVERY</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest text-right">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F8FAFC]">
                            {transactions.map((item, i) => (
                                <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <p className="font-bold text-[#2563EB] mb-0.5">{item.id}</p>
                                        <p className="text-[11px] text-[#94A3B8] font-medium">{item.date}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                                                <img src={item.horse.image} alt={item.horse.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#1E293B] mb-0.5">{item.horse.name}</p>
                                                <p className="text-[11px] text-[#94A3B8] font-medium">{item.horse.breed}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center -space-x-1.5">
                                            <div className="w-8 h-8 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[10px] font-bold flex items-center justify-center border-2 border-white uppercase">{item.parties.buyer}</div>
                                            <div className="w-8 h-8 rounded-full bg-[#EDE9FE] text-[#7C3AED] text-[10px] font-bold flex items-center justify-center border-2 border-white uppercase">{item.parties.seller}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-black text-[#1E293B]">
                                        {item.amount}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${item.escrowStatus === "Funds Secured" ? "bg-[#F0FDF4] text-[#22C55E]" :
                                            item.escrowStatus === "Disputed" ? "bg-[#FEF2F2] text-[#EF4444]" :
                                                item.escrowStatus === "Pending Release" ? "bg-[#FFFBEB] text-[#D97706]" :
                                                    item.escrowStatus === "Released" ? "bg-gray-50 text-[#64748B]" :
                                                        "bg-[#EFF6FF] text-[#3B82F6]"
                                            }`}>
                                            {item.escrowStatus === "Funds Secured" && <Lock className="w-3 h-3" />}
                                            {item.escrowStatus === "Disputed" && <AlertCircle className="w-3 h-3" />}
                                            {item.escrowStatus}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${item.deliveryStatus === "In Transit" ? "bg-orange-400" :
                                                item.deliveryStatus === "Delayed" ? "bg-red-400" :
                                                    item.deliveryStatus === "Delivered" ? "bg-green-500" :
                                                        item.deliveryStatus === "Complete" ? "bg-blue-500" :
                                                            "bg-gray-400"
                                                }`} />
                                            <span className="text-[#64748B] font-bold">{item.deliveryStatus}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleViewDetails(item)}
                                                className="p-2 text-[#94A3B8] hover:text-[#2563EB] hover:bg-blue-50 rounded-lg transition-all cursor-pointer"
                                                title="View Details"
                                            >
                                                <Eye className="w-5 h-5" />
                                            </button>
                                            <button
                                                className="p-2 text-[#EF4444] hover:bg-red-50 rounded-lg transition-all cursor-pointer"
                                                title="Delete"
                                            >
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
                <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] font-bold text-[#94A3B8]">Showing 1-5 of 142 transactions</p>
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 border border-[#E2E8F0] rounded-xl text-[11px] font-bold text-[#64748B] hover:bg-gray-50">Previous</button>
                        <button className="px-4 py-2 bg-[#2563EB] text-white rounded-xl text-[11px] font-bold">Next</button>
                    </div>
                </div>
            </div>

            {/* Transaction Details Modal */}
            <TransactionDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                transaction={selectedTransaction}
            />
        </div>
    );
}
