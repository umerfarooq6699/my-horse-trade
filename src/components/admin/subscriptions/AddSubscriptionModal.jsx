"use client";

import { X, Search, Calendar, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function AddSubscriptionModal({ isOpen, onClose }) {
    const [tier, setTier] = useState("PREMIUM");
    const [isAutoRenew, setIsAutoRenew] = useState(true);

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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden h-screen w-screen">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in h-screen w-screen"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-[540px] h-[80vh] bg-white rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-5 border-b border-gray-50 flex-shrink-0">
                    <h2 className="text-[18px] md:text-[20px] font-[700] text-[#1E293B] tracking-tight">Add New Subscription</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-900 rounded-full transition-all hover:bg-gray-100"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-4 py-4 md:px-6 md:py-8 custom-scrollbar space-y-4 md:space-y-6">
                    {/* User Search */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Search/Select User</label>
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                            <input
                                type="text"
                                placeholder="Search for a horse owner or trader..."
                                className="w-full pl-12 pr-12 py-3 md:py-3.5 bg-gray-50/50 border border-gray-100 rounded-xl md:rounded-2xl text-[12px] md:text-[14px] font-medium text-[#1e293b] placeholder:font-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
                            />
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* Subscription Tier */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Subscription Tier</label>
                            <div className="flex items-center p-1 bg-gray-50 rounded-xl md:rounded-2xl border border-gray-100">
                                {["FREE", "PREMIUM", "PLATINUM"].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setTier(t)}
                                        className={`flex-1 py-1.5 md:py-2 text-[10px] md:text-[11px] font-black tracking-widest rounded-lg transition-all ${tier === t ? 'bg-[#2563EB] text-white shadow-md shadow-blue-200' : 'text-[#64748B] hover:text-[#1E293B]'}`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Billing Cycle */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Billing Cycle</label>
                            <div className="relative">
                                <select
                                    className="w-full appearance-none bg-gray-50/50 border border-gray-100 rounded-xl md:rounded-2xl px-4 py-3 md:py-3.5 text-[12px] md:text-[14px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all cursor-pointer"
                                >
                                    <option>Monthly</option>
                                    <option>Yearly</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
                            </div>
                        </div>

                        {/* Start Date */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Start Date</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="mm/dd/yyyy"
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-xl md:rounded-2xl px-4 py-3 md:py-3.5 text-[12px] md:text-[14px] font-medium text-[#1e293b] placeholder:font-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
                                />
                                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Payment Method</label>
                            <div className="relative">
                                <select
                                    className="w-full appearance-none bg-gray-50/50 border border-gray-100 rounded-xl md:rounded-2xl px-4 py-3 md:py-3.5 text-[12px] md:text-[14px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all cursor-pointer"
                                >
                                    <option>Credit Card</option>
                                    <option>PayPal</option>
                                    <option>Bank Transfer</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Auto-renew Toggle */}
                    <div className="bg-[#eff6ff] rounded-[16px] md:rounded-[20px] p-4 md:p-5 flex items-center justify-between gap-4 border border-blue-100/50">
                        <div>
                            <p className="text-[13px] md:text-[14px] font-bold text-[#1E293B] mb-0.5">Auto-renew Subscription</p>
                            <p className="text-[10px] md:text-[11px] text-[#64748B] font-medium">Automatically charge the user at the end of cycle</p>
                        </div>
                        <button
                            onClick={() => setIsAutoRenew(!isAutoRenew)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isAutoRenew ? 'bg-[#2563EB]' : 'bg-gray-200'}`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAutoRenew ? 'translate-x-6' : 'translate-x-1'}`}
                            />
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 md:p-6 border-t border-gray-50 flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <button
                        onClick={onClose}
                        className="w-full md:w-auto md:flex-1 py-3 md:py-4 px-8 border border-gray-200 text-gray-700 rounded-xl md:rounded-2xl text-[13px] md:text-[14px] font-bold hover:bg-gray-50 transition-all"
                    >
                        Cancel
                    </button>
                    <button className="w-full md:w-auto md:flex-[2] py-3 md:py-4 px-8 bg-[#2563EB] text-white rounded-xl md:rounded-2xl text-[13px] md:text-[14px] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                        Add Subscription
                    </button>
                </div>
            </div>
        </div>
    );
}
