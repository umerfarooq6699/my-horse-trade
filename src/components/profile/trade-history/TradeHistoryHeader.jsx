"use client";

import { Plus } from "lucide-react";

export default function TradeHistoryHeader({ onOpenDispute }) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-3">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-[600] text-gray-900 tracking-tight mb-2">Trade History</h1>
                <p className="mobile_para">
                    Ledger of all your equestrian acquisitions and sales. Track your performance and manage disputes if necessary.
                </p>
            </div>
            <div className="flex items-center gap-3">
                <button
                    onClick={onOpenDispute}
                    className="flex items-center justify-center gap-2.5 px-8 py-4 bg_color text-white rounded-[18px] text-[13px] font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-blue-100 cursor-pointer whitespace-nowrap"
                >
                    <Plus size={18} strokeWidth={3} />
                    Create Dispute
                </button>
            </div>
        </div>
    );
}
