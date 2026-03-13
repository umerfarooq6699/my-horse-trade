"use client";

import { X, ChevronRight, MessageSquare, Gavel, Camera, Clock, User, ShieldCheck } from "lucide-react";
import { useEffect } from "react";

export default function DisputeDetailsModal({ isOpen, onClose, dispute }) {
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

    if (!isOpen || !dispute) return null;

    // Mock data for UI demonstration based on screenshot
    const evidence = [
        { id: 1, image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&q=80&w=200" },
        { id: 2, image: "https://images.unsplash.com/photo-1551150441-3f3828204ef0?auto=format&fit=crop&q=80&w=200" }
    ];

    const activityLog = [
        { id: 1, type: "Evidence Uploaded", time: "2h ago", description: 'Seller uploaded "Vet_Check_Pre_Ship.pdf"', status: "active" },
        { id: 2, type: "Admin Note", time: "5h ago", description: '"Waiting for vet report from Seller. Deadline: 24h."', status: "pending" },
        { id: 3, type: "Dispute Opened", time: "1d ago", description: "John Doe initiated dispute #DIS-9921.", status: "completed" }
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-[500px] bg-white rounded-[28px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="px-6 py-5 border-b border-gray-50 flex items-start justify-between flex-shrink-0">
                    <div>
                        <div className="flex items-center gap-2.5 mb-0.5">
                            <h2 className="text-xl font-bold text-[#1E293B] tracking-tight">{dispute.id}</h2>
                            <span className="px-2 py-0.5 bg-[#FFFBEB] text-[#D97706] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#FEF3C7]">
                                {dispute.status}
                            </span>
                        </div>
                        <p className="text-[11px] text-gray-400 font-bold">
                            Opened by <span className="text-[#1E293B]">{dispute.parties.buyerName}</span> on Oct 24, 2023
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center bg-gray-50 text-gray-400 hover:text-gray-900 rounded-full transition-all hover:bg-gray-100"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-5 custom-scrollbar space-y-6">
                    {/* Parties Section */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em] px-1">Parties Involved</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-[#F8FAFC] border border-gray-100/50 rounded-[20px] flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                                    <User size={22} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] font-black text-[#2563EB] uppercase tracking-wider mb-0.5">Buyer</p>
                                    <h4 className="text-sm font-bold text-[#1E293B] truncate">{dispute.parties.buyerName}</h4>
                                    <p className="text-[11px] font-bold text-gray-400 capitalize">{dispute.parties.buyerId}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-[#F8FAFC] border border-gray-100/50 rounded-[20px] flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                                    <ShieldCheck size={22} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] font-black text-purple-600 uppercase tracking-wider mb-0.5">Seller</p>
                                    <h4 className="text-sm font-bold text-[#1E293B] truncate">{dispute.parties.sellerName}</h4>
                                    <p className="text-[11px] font-bold text-gray-400 capitalize">{dispute.parties.sellerId}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dispute Reason */}
                    <div className="space-y-2.5">
                        <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em] px-1">Dispute Reason</label>
                        <div className="bg-[#F8FAFC] border border-gray-100/50 rounded-2xl p-4">
                            <p className="text-[13px] text-[#334155] leading-relaxed font-bold italic">
                                "{dispute.reason || "The horse arrived with a noticeable limp in the left hind leg that was not disclosed in the auction listing videos or vet report. Requesting return or partial refund."}"
                            </p>
                        </div>
                    </div>

                    {/* Asset Involved */}
                    <div className="space-y-2.5">
                        <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em] px-1">Asset Involved</label>
                        <div className="group flex items-center justify-between p-3.5 bg-white border border-gray-100 rounded-2xl hover:border-blue-500/50 hover:bg-blue-50/10 transition-all cursor-pointer shadow-sm">
                            <div className="flex items-center gap-3.5">
                                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-gray-50">
                                    <img src={dispute.horse.image} alt={dispute.horse.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#1E293B] mb-0.5">{dispute.horse.name}</p>
                                    <p className="text-[10px] text-gray-400 font-bold mb-0.5">Dutch Warmblood • 6yo</p>
                                    <p className="text-[11px] font-bold text-[#2563EB]">{dispute.horse.price}</p>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-[#2563EB] transition-colors" />
                        </div>
                    </div>

                    {/* Evidence */}
                    <div className="space-y-2.5">
                        <div className="flex items-center justify-between px-1">
                            <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em]">Evidence (3)</label>
                            <button className="text-[10px] font-bold text-[#2563EB] hover:opacity-80 transition-opacity uppercase tracking-wider">Request More</button>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {evidence.map((item) => (
                                <div key={item.id} className="relative aspect-square rounded-xl overflow-hidden border border-gray-100 group cursor-zoom-in shadow-sm">
                                    <img src={item.image} alt="Evidence" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                </div>
                            ))}
                            <div className="aspect-square rounded-xl border-2 border-dashed border-gray-100 flex items-center justify-center text-gray-300 hover:border-blue-300 hover:text-blue-400 transition-all cursor-pointer bg-gray-50/30">
                                <Camera size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Activity Log */}
                    <div className="space-y-4 pb-2">
                        <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em] px-1">Activity Log</label>
                        <div className="relative space-y-6 pl-5 before:absolute before:left-[10px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-100">
                            {activityLog.map((log) => (
                                <div key={log.id} className="relative">
                                    <div className={`absolute -left-[17px] top-1.5 w-[5px] h-[5px] rounded-full ring-4 ring-white ${log.status === 'active' ? 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]' : 'bg-gray-200'}`} />
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <p className="text-[12px] font-bold text-[#1E293B]">{log.type}</p>
                                            <span className="text-[10px] text-gray-400 font-bold">{log.time}</span>
                                        </div>
                                        <p className="text-[11px] text-gray-500 font-bold leading-relaxed">{log.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-5 border-t border-gray-50 bg-gray-50/20 flex items-center gap-3 flex-shrink-0">
                    <button className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 bg-white border border-gray-200 text-[#1E293B] rounded-[18px] text-[11px] font-bold uppercase tracking-wider hover:bg-gray-50 transition-all shadow-sm">
                        <MessageSquare size={14} className="text-[#2563EB]" />
                        Message
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 bg-[#2563EB] text-white rounded-[18px] text-[11px] font-bold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                        <Gavel size={14} />
                        Resolve
                    </button>
                </div>
            </div>
        </div>
    );
}
