"use client";

import { ShieldCheck, Flag, Tags, ChevronRight, Activity } from "lucide-react";

export function QuickActions() {
    const actions = [
        { title: "Verify Sellers", subtitle: "5 pending approvals", icon: <ShieldCheck className="w-5 h-5 text-blue-600" />, bg: "bg-blue-50" },
        { title: "Flagged Listings", subtitle: "12 items to review", icon: <Flag className="w-5 h-5 text-orange-500" />, bg: "bg-orange-50" },
        { title: "Manage Categories", subtitle: "Edit breed lists", icon: <Tags className="w-5 h-5 text-purple-600" />, bg: "bg-purple-50" },
    ];

    return (
        <div className="bg-white p-3 md:p-8 rounded-[32px] border border-[#F1F5F9] shadow-sm">
            <h3 className="text-base font-black text-[#1E293B] md:mb-6">Quick Actions</h3>
            <div className="space-y-0">
                {actions.map((action, i) => (
                    <button key={i} className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-all group">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${action.bg}`}>{action.icon}</div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-[#1E293B] leading-none mb-1">{action.title}</p>
                                <p className="text-[11px] font-medium text-[#94A3B8] capitalize">{action.subtitle}</p>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#CBD5E1] group-hover:text-[#1E293B] group-hover:translate-x-1 transition-all" />
                    </button>
                ))}
            </div>
        </div>
    );
}

export function SystemStatus() {
    return (
        <div className="bg-[#2563EB] p-8 rounded-[32px] text-white overflow-hidden relative group">
            <div className="relative z-10">
                <h3 className="text-lg font-black mb-1">System Status</h3>
                <p className="text-blue-100 text-xs font-semibold mb-6 opacity-80">All systems operational.</p>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                        <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#93C5FD]">ONLINE</span>
                </div>
            </div>

            {/* Abstract Shapes */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full -mr-10 -mb-10 blur-2xl group-hover:bg-blue-400/40 transition-colors" />
            <div className="absolute top-4 right-4 flex gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-8 h-4 bg-white rounded-sm" />
                <div className="w-8 h-4 bg-white rounded-sm" />
            </div>
        </div>
    );
}
