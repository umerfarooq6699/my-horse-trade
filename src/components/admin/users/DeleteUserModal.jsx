"use client";

import { deleteUser, fetchAllUsers } from "@/redux/slices/adminSlice";
import { X, Trash2, ShieldAlert } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DeleteUserModal({ isOpen, onClose, user }) {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.admin.pagination.currentPage);

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

    const handleDeleteUser = async (userId) => {
        try {
            await dispatch(deleteUser(userId)).unwrap();
            // Re-fetch the current page so the backend fills in the correct users
            dispatch(fetchAllUsers({ page: currentPage, searchValue: "" }));
            onClose();
        } catch (error) {
            console.error("Failed to delete user:", error);
            onClose();
        }
    }

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
                {/* Header Decoration */}
                <div className="h-2 bg-red-500 w-full"></div>

                <div className="p-8">
                    {/* Icon & Title */}
                    <div className="flex flex-col items-center text-center mb-6">
                        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-4 animate-bounce-subtle">
                            <Trash2 size={32} />
                        </div>
                        <h2 className="text-2xl font-[700] text-black tracking-tight mb-2">Delete User?</h2>
                        <p className="text-gray-500 text-sm font-medium leading-relaxed">
                            You are about to permanently delete <span className="text-black font-bold">"{user.user_name}"</span>.
                            This action cannot be undone and all associated data will be lost.
                        </p>
                    </div>


                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 py-3 cursor-pointer bg-gray-50 text-[#64748B] rounded-[8px] text-sm font-[700] hover:bg-gray-100 transition-all border border-gray-100"
                        >
                            No, Keep User
                        </button>
                        <button
                            onClick={() => handleDeleteUser(user._id)}
                            className="flex-1 py-3 cursor-pointer bg-red-500 text-white rounded-[8px] text-sm font-[700] hover:bg-red-600 transition-all shadow-lg shadow-red-200 flex items-center justify-center gap-2"
                        >
                            Yes, Delete User
                        </button>
                    </div>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 rounded-full transition-all hover:bg-gray-100"
                >
                    <X size={18} />
                </button>
            </div>

            <style jsx>{`
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 2s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
}
