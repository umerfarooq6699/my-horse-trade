"use client";

import { X, Clock, Share2, MapPin, CreditCard, Tag, User } from "lucide-react";
import { useEffect } from "react";

export default function TransactionDetailsModal({ isOpen, onClose, transaction }) {
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

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-[480px] bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 flex-shrink-0">
                    <h2 className="text-2xl font-[800] text-[#1E293B] tracking-tight">Transaction Details</h2>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 rounded-full transition-all bg-gray-50 hover:bg-gray-100"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-2 custom-scrollbar space-y-5">
                    {/* Horse Identity Card */}
                    <div className="bg-[#F8FAFC] p-4 rounded-[28px] flex items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                            <img src={transaction.horse.image} alt={transaction.horse.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-[#10B981] uppercase tracking-[0.1em] mb-1">Horse Identity</p>
                            <h3 className="text-xl font-black text-[#1E293B]">{transaction.horse.name}</h3>
                        </div>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {/* ID Card */}
                        <div className="bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm shadow-gray-50">
                            <p className="text-xs font-bold text-[#1E293B] mb-2 tracking-tight">Transaction ID</p>
                            <p className="text-sm font-medium text-gray-400">{transaction.id}</p>
                        </div>
                        {/* Date Card */}
                        <div className="bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm shadow-gray-50">
                            <p className="text-xs font-bold text-[#1E293B] mb-2 tracking-tight">Date</p>
                            <p className="text-sm font-medium text-gray-400">{transaction.date}</p>
                        </div>
                        {/* Status Card */}
                        <div className="bg-[#FFF8F2] p-5 rounded-[24px] border border-[#FFE4CC]">
                            <p className="text-xs font-bold text-[#1E293B] mb-2 tracking-tight">Status</p>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-[#F97316]" />
                                <span className="text-[11px] font-black text-[#F97316] uppercase tracking-widest">{transaction.escrowStatus === "Funds Secured" ? "PROCESSING" : transaction.escrowStatus.toUpperCase()}</span>
                            </div>
                        </div>
                        {/* Amount Card */}
                        <div className="bg-[#F4F9FF] p-5 rounded-[24px] border border-[#E0EFFF]">
                            <p className="text-xs font-bold text-[#1E293B] mb-1 tracking-tight">Amount</p>
                            <p className="text-xl font-black text-[#1E293B] leading-tight">{transaction.amount.split('.')[0]}</p>
                        </div>
                    </div>

                    {/* Details List */}
                    <div className="bg-white rounded-[28px] p-2 space-y-1">
                        <DetailItem 
                            icon={<Share2 size={16} className="text-blue-500" />} 
                            label="Engagement Type" 
                            value="Buyer" 
                        />
                        <DetailItem 
                            icon={<div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-black">R</div>} 
                            label="Seller" 
                            value={transaction.parties.sellerName} 
                        />
                        <DetailItem 
                            icon={<MapPin size={16} className="text-blue-500" />} 
                            label="Location" 
                            value="Kentucky, USA" 
                        />
                        <DetailItem 
                            icon={<CreditCard size={16} className="text-blue-500" />} 
                            label="Payment Method" 
                            value="Bank Transfer" 
                        />
                        <DetailItem 
                            icon={<Tag size={16} className="text-blue-500" />} 
                            label="Category" 
                            value="Show Jumping" 
                        />
                    </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 flex-shrink-0">
                    <button 
                        onClick={onClose}
                        className="w-full py-5 bg-[#2563EB] text-white rounded-[20px] text-xs font-black uppercase tracking-[0.1em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
                    >
                        Close Details
                    </button>
                </div>
            </div>
        </div>
    );
}

function DetailItem({ icon, label, value }) {
    return (
        <div className="flex items-center justify-between py-2.5 px-2">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                    {icon}
                </div>
                <span className="text-sm font-bold text-[#1E293B]">{label}</span>
            </div>
            <span className="text-sm font-bold text-[#94A3B8]">{value}</span>
        </div>
    );
}
