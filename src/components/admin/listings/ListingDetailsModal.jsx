"use client";

import { X, LayoutDashboard, Trophy, ShieldCheck, History, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function ListingDetailsModal({ isOpen, onClose, listing }) {
    const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);
    const [rejectionReason, setRejectionReason] = useState("");

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

    if (!isOpen || !listing) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 h-[95vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50 flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                            <LayoutDashboard size={18} />
                        </div>
                        <h2 className="text-lg font-[700] text-[#1E293B] tracking-tight">Listing Details</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-900 rounded-full transition-all hover:bg-gray-100"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="p-6 space-y-8">
                        {/* Rejection Reason Alert */}
                        {listing.status === "Rejected" && listing.rejectionReason && (
                            <div className="bg-red-50 border border-red-100 rounded-[24px] p-5 flex gap-4 items-start shadow-sm">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-red-500 shadow-sm flex-shrink-0">
                                    <AlertCircle size={20} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[11px] font-black text-red-500 uppercase tracking-widest leading-none">Reason for Rejection:</p>
                                    <p className="text-[13px] text-red-600 font-bold leading-relaxed">{listing.rejectionReason}</p>
                                </div>
                            </div>
                        )}

                        {/* Image Section */}
                        <div className="relative rounded-[24px] overflow-hidden aspect-[16/10] shadow-lg lg:w-[80%] lg:mx-auto">
                            <img
                                src={listing.image}
                                alt={listing.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-blue-100/90 backdrop-blur text-blue-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                FOR SALE
                            </div>
                        </div>

                        {/* Title Section */}
                        <div className="space-y-1 px-1">
                            <h3 className="text-2xl font-black text-[#1E293B] leading-tight">{listing.name}</h3>
                            <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">ID: {listing.id}</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-gray-100/50">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Breed</div>
                                <div className="text-sm font-bold text-[#1E293B]">{listing.breed || "Stallion"}</div>
                            </div>
                            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-gray-100/50">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Age</div>
                                <div className="text-sm font-bold text-[#1E293B]">{listing.age || "7 Years"}</div>
                            </div>
                            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-gray-100/50">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Height</div>
                                <div className="text-sm font-bold text-[#1E293B]">{listing.height || "16.2 Hands"}</div>
                            </div>
                            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-gray-100/50">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Color</div>
                                <div className="text-sm font-bold text-[#1E293B]">{listing.color || "Dark Bay"}</div>
                            </div>
                            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-gray-100/50">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Temperament</div>
                                <div className="text-sm font-bold text-[#1E293B]">{listing.temperament || "Calm"}</div>
                            </div>
                            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-gray-100/50">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Discipline</div>
                                <div className="text-sm font-bold text-[#1E293B]">{listing.discipline || "Show Jumping"}</div>
                            </div>
                            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-gray-100/50">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Location</div>
                                <div className="text-sm font-bold text-[#1E293B]">{listing.location || "Lexington, KY"}</div>
                            </div>
                            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-gray-100/50">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Type & Price</div>
                                <div className="text-sm font-bold text-[#1E293B]">
                                    {listing.type === "Auction" ? (
                                        <>Auction (Start: {listing.price || "$1,000"})</>
                                    ) : (
                                        <>Fixed Price ({listing.price || "$12,500"})</>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Performance History */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-blue-600">
                                <Trophy size={18} />
                                <span className="text-[13px] font-black uppercase tracking-wider text-[#1E293B]">Performance History</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl">
                                    <div className="space-y-0.5">
                                        <div className="text-sm font-bold text-[#1E293B]">Grand Prix Nationals</div>
                                        <div className="text-[10px] text-gray-400 font-medium">Show Jumping • Aug 2023</div>
                                    </div>
                                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold lowercase">1st Place</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl">
                                    <div className="space-y-0.5">
                                        <div className="text-sm font-bold text-[#1E293B]">Equine Masters Cup</div>
                                        <div className="text-[10px] text-gray-400 font-medium">Derby • June 2023</div>
                                    </div>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg text-[10px] font-bold lowercase">3rd Place</span>
                                </div>
                            </div>
                        </div>

                        {/* Health Records */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-2 text-blue-600">
                                <ShieldCheck size={18} />
                                <span className="text-[13px] font-black uppercase tracking-wider text-[#1E293B]">Health Records</span>
                            </div>
                            <div className="bg-[#F8FAFC] p-5 rounded-[24px] border border-gray-100/50 space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <CheckCircle size={18} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-[#1E293B]">Last Vet Check</div>
                                        <div className="text-[10px] text-gray-400 font-medium">October 12, 2023 • Dr. Sarah Jenkins</div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                    Regular check-up completed. Vaccinations up to date. Overall fitness: Excellent. Recommended for competitive racing.
                                </p>
                            </div>
                        </div>

                        {/* Ownership History */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-2 text-blue-600">
                                <History size={18} />
                                <span className="text-[13px] font-black uppercase tracking-wider text-[#1E293B]">Ownership History</span>
                            </div>
                            <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-blue-100">
                                <div className="relative">
                                    <div className="absolute -left-[28px] top-1 w-[24px] h-[24px] bg-white border-[6px] border-blue-500 ring-4 ring-blue-50 rounded-full z-10"></div>
                                    <div>
                                        <div className="text-sm font-bold text-[#1E293B]">Blue Ribbon Stables</div>
                                        <div className="text-[10px] text-gray-400 font-medium tracking-tight">Current Owner • Since 2021</div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[28px] top-1 w-[24px] h-[24px] bg-white border-[6px] border-gray-200 ring-4 ring-gray-50 rounded-full z-10"></div>
                                    <div>
                                        <div className="text-sm font-bold text-[#1E293B]">Meadowbrook Farms</div>
                                        <div className="text-[10px] text-gray-400 font-medium tracking-tight">Previous Owner • 2018 - 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Documents */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-2 text-blue-600">
                                <ShieldCheck size={18} />
                                <span className="text-[13px] font-black uppercase tracking-wider text-[#1E293B]">Documents</span>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center justify-between p-4 bg-white border border-dashed border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-[#1E293B]">Health Certificate.pdf</div>
                                            <div className="text-[10px] text-gray-400 font-medium">Verified • 2.4 MB</div>
                                        </div>
                                    </div>
                                    <button className="text-xs font-bold text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View</button>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white border border-dashed border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-[#1E293B]">Registration Papers.pdf</div>
                                            <div className="text-[10px] text-gray-400 font-medium">Verified • 1.8 MB</div>
                                        </div>
                                    </div>
                                    <button className="text-xs font-bold text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 border-t border-gray-50 bg-gray-50/20 grid grid-cols-2 gap-4 flex-shrink-0">
                    <button className="py-3 bg-[#2563EB] text-white rounded-[9px] cursor-pointer text-[13px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                        Approve
                    </button>
                    <button
                        onClick={() => setIsRejectionModalOpen(true)}
                        className="py-3 bg-white border-2 border-red-500 text-red-500 cursor-pointer rounded-[9px] text-[13px] font-black uppercase tracking-widest hover:bg-red-50 transition-all"
                    >
                        Reject
                    </button>
                </div>
            </div>

            {/* Rejection Reason Modal */}
            {isRejectionModalOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in"
                        onClick={() => setIsRejectionModalOpen(false)}
                    ></div>
                    <div className="relative w-full max-w-md bg-white rounded-[24px] shadow-2xl p-6 animate-in zoom-in-95 duration-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                                <AlertCircle size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#1E293B]">Reject Listing</h3>
                                <p className="text-xs text-gray-400 font-medium tracking-tight">Provide a reason for rejecting this horse listing.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2 px-1">Reason for Rejection</label>
                                <textarea
                                    rows={4}
                                    placeholder="e.g., Missing health records, low image quality..."
                                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:bg-white transition-all resize-none"
                                    value={rejectionReason}
                                    onChange={(e) => setRejectionReason(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <button
                                    onClick={() => setIsRejectionModalOpen(false)}
                                    className="py-3 bg-gray-100 text-gray-500 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-200 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        // Handle rejection logic here
                                        setIsRejectionModalOpen(false);
                                        onClose(); // Close both modals after rejection
                                    }}
                                    disabled={!rejectionReason.trim()}
                                    className="py-3 bg-red-500 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg shadow-red-200 disabled:opacity-50 disabled:shadow-none"
                                >
                                    Confirm Rejection
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
