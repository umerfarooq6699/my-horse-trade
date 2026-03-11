"use client";

import Image from "next/image";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";
import marketplace1 from "@/assets/images/marketplace1.png";
import marketplace2 from "@/assets/images/marketplace2.png";
import marketplace3 from "@/assets/images/marketplace3.png";
import marketplace4 from "@/assets/images/marketplace4.png";
import { useState } from "react";
import TradeDetailsModal from "./TradeDetailsModal";

const transactions = [
    {
        id: 1,
        horse: "Midnight Star",
        type: "Seller",
        counterparty: "Davide B.",
        date: "Oct 24, 2023",
        price: "$45,000",
        status: "Completed",
        image: marketplace1
    },
    {
        id: 2,
        horse: "Cloud Dancer",
        type: "Buyer",
        counterparty: "Sarah Jenkins",
        date: "Nov 02, 2023",
        price: "$32,500",
        status: "Completed",
        image: marketplace2
    },
    {
        id: 3,
        horse: "Apollo's Gift",
        type: "Buyer",
        counterparty: "Riyad Blabbes",
        date: "Nov 10, 2023",
        price: "$12,000",
        status: "Processing",
        image: marketplace3
    },
    {
        id: 4,
        horse: "Luna Eclipse",
        type: "Seller",
        counterparty: "Marcus T.",
        date: "Nov 15, 2023",
        price: "$35,500",
        status: "Canceled",
        image: marketplace4
    },
];

export default function TradeHistoryTable({ onOpenDispute }) {
    const [selectedTrade, setSelectedTrade] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (trade) => {
        setSelectedTrade(trade);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white rounded-[30px] border border-gray-100 shadow-sm overflow-hidden">
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] md:text-[11px] uppercase font-[600] text-gray-500 tracking-[0.15em] md:tracking-[0.2em] border-b border-gray-50">
                            <th className="pb-4 pt-4 px-4 md:px-6">Horse</th>
                            <th className="pb-4 pt-4 text-center hidden sm:table-cell">Buys/Sells</th>
                            <th className="pb-4 pt-4 text-center hidden md:table-cell">Counterparty</th>
                            <th className="pb-4 pt-4 text-center hidden lg:table-cell">Date</th>
                            <th className="pb-4 pt-4 text-center">Price</th>
                            <th className="pb-4 pt-4 text-center hidden md:table-cell">Status</th>
                            <th className="pb-4 pt-4 text-center px-4 md:px-6">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50/50">
                        {transactions.map((t) => (
                            <tr key={t.id} className="group hover:bg-gray-50/30 transition-all duration-300">
                                <td className="py-3 px-4 md:px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm flex-shrink-0 border border-gray-50">
                                            <Image src={t.image} alt={t.horse} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="text-sm font-[600] text-gray-900 mb-0.5 tracking-tight truncate">{t.horse}</div>
                                            <div className="text-[11px] font-[500] text-gray-400 mb-1">#TR-{2134 + t.id}</div>
                                            <div className="text-[10px] font-[500] text-gray-500 sm:hidden">{t.date}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 text-center hidden sm:table-cell">
                                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${t.type === 'Seller' ? 'bg-blue-50 text_color' : 'bg-purple-50 text-purple-600'
                                        }`}>
                                        {t.type}
                                    </span>
                                </td>
                                <td className="py-3 text-center hidden md:table-cell">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                            <span className="text-xs font-[600] text-gray-600">{t.counterparty.charAt(0)}</span>
                                        </div>
                                        <span className="text-sm font-[500] text-gray-600">{t.counterparty}</span>
                                    </div>
                                </td>
                                <td className="py-3 text-center text-sm font-[500] text-gray-500 hidden lg:table-cell">{t.date}</td>
                                <td className="py-3 text-center">
                                    <span className="text-sm font-[600] text-gray-900 tracking-tight">{t.price}</span>
                                </td>
                                <td className="py-3 text-center hidden md:table-cell">
                                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${t.status === 'Completed' ? 'bg-green-50 text-green-600' : t.status === 'Processing' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600'
                                        }`}>
                                        {t.status}
                                    </span>
                                </td>
                                <td className="py-3 text-center px-4 md:px-6">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => handleOpenModal(t)}
                                            className="p-2 bg-gray-50 rounded-xl text-gray-600 hover:text_color hover:bg-blue-50 transition-all cursor-pointer"
                                            title="View Details"
                                        >
                                            <Eye size={16} />
                                        </button>
                                        <button
                                            onClick={() => onOpenDispute(t)}
                                            className="px-3 py-2 bg-blue-50 text_color rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-blue-100 transition-all cursor-pointer whitespace-nowrap"
                                        >
                                            + dispute
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-gray-50">
                <div className="text-sm font-[500] text-gray-500">
                    Showing <span className="font-[600] text-gray-900">1-4</span> of <span className="font-[600] text-gray-900">12</span> Results
                </div>
                <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-[600] text-gray-600 hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                        <ChevronLeft size={16} />
                    </button>
                    <button className="px-4 py-2 bg_color text-white rounded-xl text-sm font-[600] hover:opacity-90 transition-all">
                        1
                    </button>
                    <button className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-[600] text-gray-600 hover:bg-gray-100 transition-all">
                        2
                    </button>
                    <button className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-[600] text-gray-600 hover:bg-gray-100 transition-all">
                        3
                    </button>
                    <button className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-[600] text-gray-600 hover:bg-gray-100 transition-all">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Details Modal */}
            <TradeDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                transaction={selectedTrade}
            />
        </div>
    );
}
