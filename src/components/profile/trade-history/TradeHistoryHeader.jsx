"use client";

import { FileDown, Printer } from "lucide-react";

export default function TradeHistoryHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-3">
            <div>
                <h1 className="text-4xl font-[600] text-gray-900 tracking-tight mb-2">Trade History</h1>
                <p className="text-gray-500 font-[500]">Ledger of all your equestrian acquisitions and sales. Track your performance and download invoices.</p>
            </div>
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 text-sm font-[600] text-gray-600 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
                    <FileDown size={18} className="text-gray-600" />
                    Export CSV
                </button>
                <button className="flex items-center gap-2 px-6 py-3 text-sm font-[600] text-gray-600 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
                    <Printer size={18} className="text-gray-600" />
                    Print
                </button>
            </div>
        </div>
    );
}
