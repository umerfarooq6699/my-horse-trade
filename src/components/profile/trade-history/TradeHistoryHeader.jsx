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
        </div>
    );
}
