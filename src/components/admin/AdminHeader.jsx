"use client";

import { Search, Bell, MessageSquare, Menu } from "lucide-react";

export default function AdminHeader({ onMenuClick }) {
    return (
        <header className="h-[72px] bg-white border-b border-[#F1F5F9] flex items-center justify-between px-8 sticky top-0 z-[80]">
            <div className="flex items-center gap-4 flex-1">
                {/* Mobile Menu Toggle */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-gray-50 rounded-xl transition-colors text-[#64748B]"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Search Bar - Centered according to design */}
                <div className="flex-1 flex justify-center max-w-[600px] mx-auto hidden md:flex">
                    <div className="relative w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-12 pr-6 py-2.5 bg-[#F8FAFC] border-none focus:ring-2 focus:ring-[#2563EB]/10 rounded-xl text-sm font-medium transition-all outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                {/* Icons */}
                <div className="flex items-center gap-1">
                    <button className="p-2.5 text-[#64748B] hover:text-[#2563EB] hover:bg-blue-50 rounded-xl transition-all relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
                    </button>
                    <button className="p-2.5 text-[#64748B] hover:text-[#2563EB] hover:bg-blue-50 rounded-xl transition-all">
                        <MessageSquare className="w-5 h-5" />
                    </button>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-4 border-l border-[#F1F5F9]">
                    <div className="text-right hidden sm:block">
                        <h4 className="text-sm font-bold text-[#1E293B] leading-none mb-1">Alex Morgan</h4>
                        <p className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider">Super Admin</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                        <img src="https://avatar.iran.liara.run/public/boy?username=Alex" alt="Alex Morgan" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </header>
    );
}
