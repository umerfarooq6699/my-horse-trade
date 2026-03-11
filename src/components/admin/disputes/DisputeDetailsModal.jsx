"use client";

import { X, ChevronRight, MessageSquare, Gavel, FileText, Camera, Plus, Clock, User, ArrowRight } from "lucide-react";
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden h-screen w-screen">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in h-screen w-screen"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-[540px] h-[80vh] bg-white rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 flex flex-col">
                {/* Header */}
                <div className="px-6 py-5 border-b border-gray-50 flex items-start justify-between flex-shrink-0">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-xl md:text-2xl font-[700] text-[#1E293B] tracking-tight">{dispute.id}</h2>
                            <span className="px-3 py-1 bg-[#FFFBEB] text-[#D97706] text-[10px] md:text-[11px] font-black uppercase tracking-wider rounded-full border border-[#FEF3C7]">
                                {dispute.status}
                            </span>
                        </div>
                        <p className="text-[12px] md:text-[13px] text-gray-400 font-medium">
                            Opened by <span className="text-[#1E293B] font-bold">John Doe</span> on Oct 24, 2023
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 bg-gray-50 text-gray-400 hover:text-gray-900 rounded-full transition-all hover:bg-gray-100"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar space-y-8">
                    {/* Dispute Reason */}
                    <div className="space-y-3">
                        <label className="text-[11px] md:text-[12px] font-bold text-[#64748B] uppercase tracking-widest px-1">Dispute Reason</label>
                        <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-5">
                            <p className="text-[13px] md:text-[14px] text-[#334155] leading-relaxed font-medium">
                                "The horse arrived with a noticeable limp in the left hind leg that was not disclosed in the auction listing videos or vet report. Requesting return or partial refund."
                            </p>
                        </div>
                    </div>

                    {/* Asset Involved */}
                    <div className="space-y-3">
                        <label className="text-[11px] md:text-[12px] font-bold text-[#64748B] uppercase tracking-widest px-1">Asset Involved</label>
                        <div className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:border-blue-500/50 hover:bg-blue-50/10 transition-all cursor-pointer shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm border border-gray-50">
                                    <img src={dispute.horse.image} alt={dispute.horse.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#1E293B] mb-0.5">{dispute.horse.name}</p>
                                    <p className="text-[11px] text-gray-400 font-medium mb-1">Dutch Warmblood • 6yo</p>
                                    <p className="text-[13px] font-[800] text-[#2563EB]">{dispute.horse.price}.00</p>
                                </div>
                            </div>
                            <ChevronRight size={18} className="text-gray-300 group-hover:text-[#2563EB] transition-colors" />
                        </div>
                    </div>

                    {/* Evidence */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between px-1">
                            <label className="text-[11px] md:text-[12px] font-bold text-[#64748B] uppercase tracking-widest">Evidence (3)</label>
                            <button className="text-[11px] md:text-[12px] font-bold text-[#2563EB] hover:opacity-80 transition-opacity">Request More</button>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {evidence.map((item) => (
                                <div key={item.id} className="relative aspect-square rounded-2xl overflow-hidden border border-gray-100 group cursor-zoom-in">
                                    <img src={item.image} alt="Evidence" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                </div>
                            ))}
                            <div className="aspect-square rounded-2xl border-2 border-dashed border-gray-100 flex items-center justify-center text-gray-300 hover:border-blue-300 hover:text-blue-400 transition-all cursor-pointer bg-gray-50/30">
                                <Camera size={24} />
                            </div>
                        </div>
                    </div>

                    {/* Activity Log */}
                    <div className="space-y-4 pb-4">
                        <label className="text-[11px] md:text-[12px] font-bold text-[#64748B] uppercase tracking-widest px-1">Activity Log</label>
                        <div className="relative space-y-8 pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-100">
                            {activityLog.map((log) => (
                                <div key={log.id} className="relative">
                                    <div className={`absolute -left-[19px] top-1.5 w-[7px] h-[7px] rounded-full ring-4 ring-white ${log.status === 'active' ? 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]' : 'bg-gray-200'}`} />
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <p className="text-[13px] md:text-[14px] font-[700] text-[#1E293B]">{log.type}</p>
                                            <span className="text-[11px] text-gray-400 font-medium">{log.time}</span>
                                        </div>
                                        <p className="text-[12px] md:text-[13px] text-gray-500 font-medium leading-relaxed">{log.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-6 border-t border-gray-50 bg-gray-50/30 flex items-center gap-3 flex-shrink-0">
                    <button className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-white border border-gray-200 text-[#1E293B] rounded-2xl text-[13px] font-bold hover:bg-gray-50 transition-all shadow-sm">
                        <MessageSquare size={16} className="text-[#2563EB]" />
                        Message
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-[#2563EB] text-white rounded-2xl text-[13px] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                        <Gavel size={16} />
                        Resolve
                    </button>
                </div>
            </div>
        </div>
    );
}
