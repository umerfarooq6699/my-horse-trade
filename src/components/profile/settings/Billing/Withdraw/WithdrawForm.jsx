"use client";

import { useState } from "react";

export default function WithdrawForm() {
    const [accountType, setAccountType] = useState("Checking");

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 h-full">
            {/* Withdrawal Amount Section */}
            <div className="mb-8">
                <label className="block text-sm font-bold text-gray-900 mb-3">Withdrawal Amount</label>
                <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-300">$</span>
                    <input
                        type="text"
                        placeholder="0.00"
                        className="w-full pl-12 pr-24 py-5 bg-gray-50 border-none rounded-2xl text-2xl font-bold text-gray-900 focus:ring-2 focus:ring-blue-100 transition-shadow outline-none"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-blue-50 text_color text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors">
                        MAX
                    </button>
                </div>
            </div>

            {/* Banking Details Header */}
            <div className="flex items-center gap-3 mb-6 pt-6 border-t border-gray-50">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text_color">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 21h18" />
                        <path d="M3 10h18" />
                        <path d="M5 6l7-3 7 3" />
                        <path d="M4 10v11" />
                        <path d="M20 10v11" />
                        <path d="M8 14v3" />
                        <path d="M12 14v3" />
                        <path d="M16 14v3" />
                    </svg>
                </div>
                <h3 className="font-bold text-gray-900">Banking Details</h3>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">Account Type</label>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => setAccountType("Checking")}
                            className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-bold transition-all ${accountType === "Checking"
                                    ? "border-blue-500 bg-blue-50 text_color shadow-sm"
                                    : "border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200"
                                }`}
                        >
                            <svg className={`w-4 h-4 ${accountType === "Checking" ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M20 6L9 17L4 12" />
                            </svg>
                            Checking
                        </button>
                        <button
                            onClick={() => setAccountType("Savings")}
                            className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-bold transition-all ${accountType === "Savings"
                                    ? "border-blue-500 bg-blue-50 text_color shadow-sm"
                                    : "border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200"
                                }`}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                            Savings
                        </button>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Bank Name</label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-shadow outline-none"
                            placeholder="Enter bank name"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="10" width="18" height="9" rx="2" />
                                <path d="M3 10V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-bold text-gray-900">Routing Number</label>
                            <div className="group relative">
                                <svg className="w-4 h-4 text-gray-300 cursor-help" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <line x1="12" y1="17" x2="12.01" y2="17" />
                                </svg>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-gray-900 text-white text-[10px] rounded shadow-lg z-20">
                                    9-digit code identifying your bank.
                                </div>
                            </div>
                        </div>
                        <input
                            type="text"
                            className="w-full px-4 py-3.5 bg-gray-50 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-shadow outline-none"
                            placeholder="000 000 000"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Account Number</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3.5 bg-gray-50 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-shadow outline-none"
                            placeholder="0000000000"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Account Holder Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3.5 bg-gray-50 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-shadow outline-none"
                        placeholder="Enter full name"
                    />
                </div>
            </div>

            {/* Security Note */}
            <div className="mt-8 p-4 bg-green-50/50 rounded-2xl border border-green-100 flex items-start gap-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-green-600 shadow-sm flex-shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-green-800 mb-0.5">Bank-Grade Security</h4>
                    <p className="text-[10px] font-medium text-green-600 leading-relaxed">
                        Your information is encrypted via 256-bit SSL connection. We never store your full banking credentials.
                    </p>
                </div>
            </div>
        </div>
    );
}
