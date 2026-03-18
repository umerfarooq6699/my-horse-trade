"use client";

import { UserRound, X } from "lucide-react";
import { useEffect } from "react";

export default function UserDetailsModal({ isOpen, onClose, user }) {
    console.log(user, "user details modal")
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
            <div className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 flex flex-col">
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
                <div className="flex-1 px-4 py-8 md:px-8">
                    {/* Profile Section */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative mb-4">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                                <img
                                    src={user?.avatar || user?.image || user?.profilePicture || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                    alt={user?.name || "Default User"}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; }}
                                />
                            </div>
                            <div className="absolute bottom-1 right-1 w-4 h-4 md:w-5 md:h-5 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        <h3 className="text-[18px] md:text-3xl font-[700] text-black mb-1">{user?.user_name}</h3>
                        <p className="text-gray-700 font-medium text-sm md:text-base mb-1">{user?.email}</p>
                        <p className="text-gray-600 text-xs font-[500] tracking-wider">ID: {user?._id || user?.id}</p>
                        {user?.createdAt && (
                            <p className="text-gray-400 text-xs tracking-wider mt-1">Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
