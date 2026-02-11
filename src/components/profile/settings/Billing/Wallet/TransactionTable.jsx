"use client";

import { useState } from "react";

const transactions = [
    {
        id: "#TRX-88291",
        date: "Oct 24, 2023",
        description: "Withdrawal to Chase Bank (...8842)",
        status: "Pending",
        amount: "-$2,000.00",
        type: "withdrawal",
        icon: (
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text_color">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22V10" />
                    <path d="M17 15l-5-5-5 5" />
                    <path d="M2 10h20" />
                </svg>
            </div>
        )
    },
    {
        id: "#ESC-44021",
        date: "Oct 20, 2023",
        description: 'Escrow Release (Sold "Thunder")',
        status: "Completed",
        amount: "+$8,500.00",
        type: "escrow",
        icon: (
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    <path d="M8 11L11 14L16 9" />
                </svg>
            </div>
        )
    },
    {
        id: "#FEE-10293",
        date: "Oct 15, 2023",
        description: "Delivery Fee Deduction (Transport #1182)",
        status: "Completed",
        amount: "-$450.00",
        type: "fee",
        icon: (
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                </svg>
            </div>
        )
    },
    {
        id: "#ESC-39102",
        date: "Oct 10, 2023",
        description: 'Escrow Deposit (Purchase "Bella")',
        status: "Held",
        amount: "-$3,200.00",
        type: "escrow",
        icon: (
            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            </div>
        )
    }
];

export default function TransactionTable() {
    const [filterDate, setFilterDate] = useState("Last 30 Days");
    const [filterType, setFilterType] = useState("All Types");

    const getStatusStyles = (status) => {
        switch (status) {
            case "Pending":
                return "text-orange-600 bg-orange-50";
            case "Completed":
                return "text-green-600 bg-green-50";
            case "Held":
                return "text-gray-600 bg-gray-100";
            default:
                return "text-gray-600 bg-gray-50";
        }
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h3 className="font-bold text-gray-900">Transaction Records</h3>
                <div className="flex flex-wrap gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:flex-initial">
                        <select
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            className="w-full pl-10 pr-8 py-2.5 bg-gray-50 border-none rounded-xl text-sm font-semibold text-gray-700 appearance-none cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                            <option>Last 30 Days</option>
                            <option>Last 90 Days</option>
                            <option>This Year</option>
                        </select>
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                        </div>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </div>
                    </div>

                    <div className="relative flex-1 md:flex-initial">
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="w-full pl-10 pr-8 py-2.5 bg-gray-50 border-none rounded-xl text-sm font-semibold text-gray-700 appearance-none cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                            <option>All Types</option>
                            <option>Withdrawal</option>
                            <option>Escrow</option>
                            <option>Fee</option>
                        </select>
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="4" y1="21" x2="4" y2="14" />
                                <line x1="4" y1="10" x2="4" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12" y2="3" />
                                <line x1="20" y1="21" x2="20" y2="16" />
                                <line x1="20" y1="12" x2="20" y2="3" />
                                <line x1="2" y1="14" x2="6" y2="14" />
                                <line x1="10" y1="8" x2="14" y2="8" />
                                <line x1="18" y1="16" x2="22" y2="16" />
                            </svg>
                        </div>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </div>
                    </div>

                    <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-blue-200 text_color font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Export
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto scrollbar-visible">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50/50">
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Transaction ID</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Description</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {transactions.map((tx) => (
                            <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-5 text-sm font-medium text-gray-500">{tx.id}</td>
                                <td className="px-6 py-5 text-sm font-medium text-gray-900">{tx.date}</td>
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-3">
                                        {tx.icon}
                                        <span className="text-sm font-bold text-gray-900">{tx.description}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-5">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusStyles(tx.status)}`}>
                                        <span className="w-1 h-1 rounded-full bg-current inline-block mr-1.5 mb-0.5" />
                                        {tx.status}
                                    </span>
                                </td>
                                <td className={`px-6 py-5 text-sm font-bold text-right ${tx.amount.startsWith("+") ? "text-green-600" : "text-gray-900"}`}>
                                    {tx.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs font-medium text-gray-500">
                    Showing <span className="text-gray-900 font-bold">1-4</span> of <span className="text-gray-900 font-bold">128</span> transactions
                </p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-400 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                        Previous
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-900 text-gray-900 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
