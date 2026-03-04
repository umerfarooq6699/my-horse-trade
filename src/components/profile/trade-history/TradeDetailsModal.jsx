"use client";

import Image from "next/image";
import { X, CheckCircle, Clock, XCircle, Share2, MapPin, CreditCard, Tag } from "lucide-react";
import { useEffect } from "react";

export default function TradeDetailsModal({ isOpen, onClose, transaction }) {
    // Scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !transaction) return null;

    const getStatusStyles = (status) => {
        switch (status) {
            case "Completed":
                return {
                    bg: "bg-green-50/50",
                    text: "text-green-600",
                    border: "border-green-100",
                    icon: <CheckCircle className="text-green-500" size={18} />
                };
            case "Processing":
                return {
                    bg: "bg-orange-50/50",
                    text: "text-orange-600",
                    border: "border-orange-100",
                    icon: <Clock className="text-orange-500 animate-pulse" size={18} />
                };
            case "Canceled":
                return {
                    bg: "bg-red-50/50",
                    text: "text-red-600",
                    border: "border-red-100",
                    icon: <XCircle className="text-red-500" size={18} />
                };
            default:
                return { bg: "bg-gray-50", text: "text-gray-600", border: "border-gray-100", icon: null };
        }
    };

    const statusStyles = getStatusStyles(transaction.status);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 h-[80vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-3 py-3 md:px-6 md:pt-5 border-b border-gray-50 flex-shrink-0">
                    <h2 className="text-xl font-[700] text-gray-900 tracking-tight">Transaction Details</h2>
                    <button
                        onClick={onClose}
                        className="p-2 bg-gray-50 text-gray-400 hover:text-gray-900 rounded-full transition-all hover:bg-gray-100"
                    >
                        <X size={20} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-3 py-3 md:px-6 md:py-3 custom-scrollbar space-y-4">
                    {/* Horse Header */}
                    <div className="flex items-center gap-4 p-3 bg-gray-50/50 rounded-2xl border border-gray-50">
                        <div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm flex-shrink-0 border border-white">
                            <Image
                                src={transaction.image}
                                alt={transaction.horse}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="min-w-0">
                            <div className="text-[9px] font-[700] uppercase tracking-widest text-[#0fb478] mb-0.5">Horse Identity</div>
                            <h3 className="text-base font-[700] text-gray-900 truncate tracking-tight">{transaction.horse}</h3>
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl border border-gray-100 bg-white shadow-sm">
                            <div className="text-[14px] font-[700] text-gray-900 mb-1">Transaction ID</div>
                            <div className="mobile_para">#HT-{transaction.id}092{transaction.id}</div>
                        </div>
                        <div className="p-3.5 rounded-xl border border-gray-100 bg-white shadow-sm">
                            <div className="text-[14px] font-[700] text-gray-900 mb-1">Date</div>
                            <div className="mobile_para">{transaction.date}</div>
                        </div>
                        <div className={`p-3.5 rounded-xl border ${statusStyles.border} ${statusStyles.bg}`}>
                            <div className="text-[14px] font-[700] text-gray-900 mb-1">Status</div>
                            <div className="flex items-center gap-1.5">
                                {statusStyles.icon}
                                <span className={`text-[11px] font-[800] uppercase tracking-wide ${statusStyles.text}`}>{transaction.status}</span>
                            </div>
                        </div>
                        <div className="p-3.5 rounded-xl border border-blue-100 bg-blue-50/20">
                            <div className="text-[14px] font-[700] text-gray-900 mb-1">Amount</div>
                            <div className="text-base font-[600] text-gray-900 tracking-tight">{transaction.price}</div>
                        </div>
                    </div>

                    {/* Details List */}
                    <div className="space-y-4 bg-gray-50/30 p-3 md:p-5 rounded-2xl border border-gray-50">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2.5 text-gray-900 font-[600]">
                                <Share2 size={16} className="text_color opacity-70" />
                                <span>Engagement Type</span>
                            </div>
                            <span className="font-[400] text-gray-400 capitalize">{transaction.type}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2.5 text-gray-900 font-[600]">
                                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[10px] text_color font-bold border border-blue-100">
                                    {transaction.counterparty.charAt(0)}
                                </div>
                                <span>{transaction.type === 'Seller' ? 'Buyer' : 'Seller'}</span>
                            </div>
                            <span className="font-[400] text-gray-400">{transaction.counterparty}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4">
                            <div className="flex items-center gap-2.5 text-gray-900 font-[600]">
                                <MapPin size={16} className="text_color opacity-70" />
                                <span>Location</span>
                            </div>
                            <span className="font-[400] text-gray-400">Kentucky, USA</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2.5 text-gray-900 font-[600]">
                                <CreditCard size={16} className="text_color opacity-70" />
                                <span>Payment Method</span>
                            </div>
                            <span className="font-[400] text-gray-400">Bank Transfer</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2.5 text-gray-900 font-[600]">
                                <Tag size={16} className="text_color opacity-70" />
                                <span>Category</span>
                            </div>
                            <span className="font-[400] text-gray-400">Show Jumping</span>
                        </div>
                    </div>
                </div>

                {/* Simplified Footer */}
                <div className="p-4 border-t border-gray-50 flex-shrink-0">
                    <button
                        onClick={onClose}
                        className="w-full py-3.5 bg_color text-white rounded-xl text-[12px] font-black uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-blue-500/20"
                    >
                        Close Details
                    </button>
                </div>
            </div>
        </div>
    );
}
