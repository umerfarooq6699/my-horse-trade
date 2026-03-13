"use client";

import { X, CreditCard, Calendar, ShieldCheck, CheckCircle2, Clock, MapPin, Globe, History, Smartphone, Tablet, Monitor } from "lucide-react";
import { useEffect } from "react";

export default function SubscriptionDetailsModal({ isOpen, onClose, subscription }) {
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

    if (!isOpen || !subscription) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-[540px] bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50 flex-shrink-0">
                    <div>
                        <h2 className="text-xl font-bold text-[#1E293B] tracking-tight mb-0.5">Subscription Details</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-gray-400">Order Reference:</span>
                            <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider">SUB-2024-89{subscription.id.replace('#','')}</span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-900 rounded-full transition-all bg-gray-50 hover:bg-gray-100"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar space-y-6">
                    {/* User Profile Summary */}
                    <div className="flex flex-col md:flex-row items-center gap-5 p-5 bg-[#F8FAFC] rounded-[24px] border border-gray-100/50">
                        <div className="relative">
                            <div className="w-20 h-20 rounded-[20px] border-4 border-white shadow-lg overflow-hidden">
                                <img src={subscription.avatar} alt={subscription.user} className="w-full h-full object-cover" />
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-5 h-5 border-[3px] border-white rounded-full flex items-center justify-center shadow-sm ${
                                subscription.status === "Active" ? "bg-[#22C55E]" : "bg-red-500"
                            }`}>
                                {subscription.status === "Active" ? <CheckCircle2 size={10} className="text-white" /> : <Clock size={10} className="text-white" />}
                            </div>
                        </div>
                        <div className="text-center md:text-left flex-1">
                            <h3 className="text-xl font-bold text-[#1E293B] mb-0.5">{subscription.user}</h3>
                            <p className="text-xs font-bold text-gray-400 mb-3">{subscription.user.toLowerCase().replace(' ', '.') + "@example.com"}</p>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                <span className={`flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-100 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                    subscription.tier === "Platinum" ? "text-purple-600" :
                                    subscription.tier === "Premium" ? "text-orange-600" : "text-gray-600"
                                }`}>
                                    <ShieldCheck size={11} />
                                    {subscription.tier} TIER
                                </span>
                                <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#2563EB] rounded-full text-[9px] font-bold uppercase tracking-wider">
                                    <Globe size={11} />
                                    REGIONAL SALES
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Meta Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <MetaCard label="Plan Pricing" value={subscription.tier === "Platinum" ? "$49" : subscription.tier === "Premium" ? "$29" : "Free"} icon={<CreditCard size={12} />} color="blue" />
                        <MetaCard label="Start Date" value={subscription.startDate} icon={<Calendar size={12} />} color="blue" />
                        <MetaCard label="Renewal" value={subscription.renewalDate} icon={<Clock size={12} />} color="blue" />
                        <MetaCard label="Payment" value={subscription.payment} icon={<CheckCircle2 size={12} />} color={subscription.payment === "Paid" ? "green" : "orange"} />
                    </div>

                    {/* Detailed Information */}
                    <div className="space-y-3">
                        <h3 className="text-[10px] font-bold text-[#1E293B] uppercase tracking-[0.1em] flex items-center gap-2">
                            <Monitor className="w-3.5 h-3.5 text-[#2563EB]" />
                            Device & Usage
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <DetailRow label="Primary Device" value="MacOS - Chrome" icon={<Monitor size={14} />} />
                            <DetailRow label="Mobile Access" value="iPhone 15 Pro" icon={<Smartphone size={14} />} />
                        </div>
                    </div>

                    {/* Location Information */}
                    <div className="p-5 bg-white border border-[#F1F5F9] rounded-[24px] flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-2.5 bg-gray-50 rounded-xl text-gray-400">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#1E293B]">Lexington, Kentucky</p>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">United States (EST)</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[11px] font-bold text-[#2563EB] hover:underline cursor-pointer">History</p>
                        </div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 flex-shrink-0">
                    <button 
                        onClick={onClose}
                        className="w-full py-4 bg-[#2563EB] text-white rounded-[20px] text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                    >
                        Close Details
                    </button>
                </div>
            </div>
        </div>
    );
}

function MetaCard({ label, value, icon, color }) {
    const colors = {
        blue: "bg-blue-50 text-blue-600 border-blue-100/50",
        green: "bg-green-50 text-green-600 border-green-100/50",
        orange: "bg-orange-50 text-orange-600 border-orange-100/50"
    };
    return (
        <div className={`p-3.5 rounded-[18px] border ${colors[color]} flex flex-col h-full`}>
            <div className="opacity-70 mb-3">{icon}</div>
            <div>
                <p className="text-[8px] font-bold uppercase tracking-tight opacity-60 mb-0.5">{label}</p>
                <p className="text-[12px] font-bold leading-tight tracking-tight">{value}</p>
            </div>
        </div>
    );
}

function DetailRow({ label, value, icon }) {
    return (
        <div className="flex items-center justify-between p-3.5 bg-white border border-[#F1F5F9] rounded-[18px] hover:border-[#E2E8F0] transition-colors group">
            <div className="flex items-center gap-2.5">
                <div className="p-2 bg-gray-50 rounded-lg text-gray-400 group-hover:text-[#2563EB] transition-colors">
                    {icon}
                </div>
                <span className="text-[12px] font-bold text-[#64748B]">{label}</span>
            </div>
            <span className="text-[12px] font-bold text-[#1E293B] text-right">{value}</span>
        </div>
    );
}
