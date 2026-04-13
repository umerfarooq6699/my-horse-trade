"use client";

import { X, AlertTriangle, Trash2, Horse } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteListing } from "@/redux/slices/adminSlice";
import { useEffect } from "react";

export default function DeleteListingModal({ isOpen, onClose, listing }) {
    const dispatch = useDispatch();
    const { deleteLoading, deleteError } = useSelector((state) => state.admin);

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

    const handleDelete = async () => {
        const id = listing.id || listing._id;
        if (!id) return;

        const resultAction = await dispatch(deleteListing(id));
        if (deleteListing.fulfilled.match(resultAction)) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl p-8 overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center text-red-500 mb-6 group relative">
                        <div className="absolute inset-0 bg-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                        <Trash2 size={36} className="relative transform group-hover:scale-110 transition-transform" />
                    </div>

                    <h3 className="text-2xl font-black text-[#1E293B] mb-2">Delete Listing?</h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">
                        Are you sure you want to delete <span className="text-[#1E293B] font-bold">"{listing.horse_details?.name || listing.name}"</span>? 
                        This action cannot be undone and will permanently remove the listing from the platform.
                    </p>

                    {/* Listing Info Card */}
                    <div className="w-full bg-gray-50 rounded-2xl p-4 mb-8 flex items-center gap-4 border border-gray-100/50">
                        <div className="w-12 h-12 rounded-xl bg-white border border-[#F1F5F9] overflow-hidden flex-shrink-0">
                            <img 
                                src={listing.horse_details?.image || listing.image || "/placeholder-horse.png"} 
                                className="w-full h-full object-cover"
                                alt="Horse"
                            />
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Horse Description</p>
                            <p className="text-sm font-black text-[#1E293B]">{listing.horse_details?.breed || listing.breed || "Classic Arab"} • {listing.horse_details?.id_ref || listing.id}</p>
                        </div>
                    </div>

                    {deleteError && (
                        <div className="w-full p-3 bg-red-50 border border-red-100 rounded-xl mb-6 text-xs font-bold text-red-600 flex items-center gap-2">
                            <AlertTriangle size={14} />
                            {typeof deleteError === 'string' ? deleteError : "Failed to delete listing"}
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-4 w-full">
                        <button
                            onClick={onClose}
                            className="py-4 bg-white border-2 border-slate-100 text-[#64748B] rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-50 hover:border-slate-200 transition-all cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleDelete}
                            disabled={deleteLoading}
                            className={`py-4 bg-red-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg shadow-red-200 cursor-pointer flex items-center justify-center gap-2 ${deleteLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {deleteLoading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Deleting...
                                </>
                            ) : (
                                "Confirm Delete"
                            )}
                        </button>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#1E293B] rounded-full transition-colors"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
}
