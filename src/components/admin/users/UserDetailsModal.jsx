"use client";

import { X, User, Phone, MapPin, Globe, LogIn, Monitor, ShoppingBag, CheckCircle, Star, ShoppingCart, Tag, AlertTriangle, History } from "lucide-react";
import { useEffect } from "react";

export default function UserDetailsModal({ isOpen, onClose, user }) {
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

    if (!isOpen || !user) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 h-[90vh] md:h-[85vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50 flex-shrink-0">
                    <h2 className="text-xl font-[700] text-[#1E293B] tracking-tight">User Details</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-900 rounded-full transition-all hover:bg-gray-100"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8 custom-scrollbar space-y-6 md:space-y-8">
                    {/* Profile Section */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative mb-4">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden">
                                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-1 right-1 w-4 h-4 md:w-5 md:h-5 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-[700] text-[#1E293B] mb-1">{user.name}</h3>
                        <p className="text-gray-400 text-xs md:text-sm mb-4">{user.email || "sarah.j@example.com"}</p>

                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#2563EB] rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider border border-blue-100/50">
                                <ShoppingBag size={12} />
                                {user.role}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-[#22C55E] rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider border border-green-100/50">
                                <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span>
                                {user.status} Status
                            </span>
                        </div>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2.5 text-[11px] md:text-[13px] font-[800] text-[#1E293B] uppercase tracking-wider">
                            <User size={16} className="text-[#2563EB]" />
                            <span>Personal Information</span>
                        </div>
                        <div className="grid grid-cols-2 gap-y-6 gap-x-4 pt-6 border-t border-gray-100/50">
                            <div>
                                <div className="text-[10px] md:text-[11px] font-[600] text-[#64748B] uppercase tracking-tight mb-1">Full Name</div>
                                <div className="text-sm md:text-base font-[700] text-[#1E293B]">{user.name}</div>
                            </div>
                            <div>
                                <div className="text-[10px] md:text-[11px] font-[600] text-[#64748B] uppercase tracking-tight mb-1">Phone Number</div>
                                <div className="text-sm md:text-base font-[700] text-[#1E293B]">+1 (555) 012-3456</div>
                            </div>
                            <div>
                                <div className="text-[10px] md:text-[11px] font-[600] text-[#64748B] uppercase tracking-tight mb-1">Location</div>
                                <div className="text-sm md:text-base font-[700] text-[#1E293B]">Lexington, KY</div>
                            </div>
                            <div>
                                <div className="text-[10px] md:text-[11px] font-[600] text-[#64748B] uppercase tracking-tight mb-1">Timezone</div>
                                <div className="text-sm md:text-base font-[700] text-[#1E293B]">EST (UTC -5)</div>
                            </div>
                        </div>
                    </div>

                    {/* Account Activity */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2.5 text-[11px] md:text-[13px] font-[800] text-[#1E293B] uppercase tracking-wider">
                            <Monitor size={16} className="text-[#2563EB]" />
                            <span>Account Activity</span>
                        </div>
                        <div className="bg-[#F8FAFC] rounded-2xl p-4 md:p-6 space-y-6 border border-gray-100/50">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-[10px] md:text-[11px] font-[600] text-[#64748B] uppercase mb-1">Last Login</div>
                                    <div className="text-xs md:text-sm font-[700] text-[#1E293B]">Oct 26, 2023 at 09:42 AM</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] md:text-[11px] font-[600] text-[#64748B] uppercase mb-1">IP Address</div>
                                    <div className="text-xs md:text-sm font-[700] text-[#1E293B]">192.168.1.1</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-white p-3 rounded-xl border border-gray-100 text-center shadow-sm">
                                    <div className="text-[9px] font-[600] text-gray-400 uppercase tracking-wider mb-1">Listings</div>
                                    <div className="text-lg font-[800] text-[#2563EB]">24</div>
                                </div>
                                <div className="bg-white p-3 rounded-xl border border-gray-100 text-center shadow-sm">
                                    <div className="text-[9px] font-[600] text-gray-400 uppercase tracking-wider mb-1">Sold</div>
                                    <div className="text-lg font-[800] text-green-500">18</div>
                                </div>
                                <div className="bg-white p-3 rounded-xl border border-gray-100 text-center shadow-sm">
                                    <div className="text-[9px] font-[600] text-gray-400 uppercase tracking-wider mb-1">Review</div>
                                    <div className="text-lg font-[800] text-orange-500">4.9</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2.5 text-[11px] md:text-[13px] font-[800] text-[#1E293B] uppercase tracking-wider mb-2">
                            <History size={16} className="text-[#2563EB]" />
                            <span>Recent Transactions</span>
                        </div>
                        <div className="space-y-3">
                            {[
                                { title: 'Sale: Stallion "Majestic"', meta: '#TR-45892 • Oct 15, 2023', amount: '+$12,500', isPositive: true, icon: <ShoppingCart size={14} /> },
                                { title: 'Listing Fee: Premium', meta: '#TR-45701 • Oct 12, 2023', amount: '-$49.00', isPositive: false, icon: <Tag size={14} /> }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50/50 transition-colors shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#2563EB]">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm font-[700] text-[#1E293B] leading-tight mb-0.5">{item.title}</div>
                                            <div className="text-[11px] text-gray-400 font-medium">{item.meta}</div>
                                        </div>
                                    </div>
                                    <div className={`text-sm font-[800] ${item.isPositive ? 'text-[#22C55E]' : 'text-[#1E293B]'}`}>
                                        {item.amount}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-3 text-[12px] font-[700] uppercase tracking-widest text-[#2563EB] hover:opacity-80 transition-opacity">
                            View All Transactions
                        </button>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-gray-50 bg-gray-50/20 flex items-center gap-3 flex-shrink-0">
                    <button className="flex-1 py-3.5 bg-[#2563EB] text-white rounded-xl text-xs font-[700] hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                        Approve
                    </button>
                    <button className="flex-1 py-3.5 bg-white border border-red-100 text-[#EF4444] rounded-xl text-xs font-[700] flex items-center justify-center gap-2 hover:bg-red-50 transition-all border-dashed">
                        <AlertTriangle size={14} />
                        Suspend
                    </button>
                </div>
            </div>
        </div>
    );
}
