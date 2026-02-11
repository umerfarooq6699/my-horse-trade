"use client";

import Link from "next/link";

export default function WithdrawSummary() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col h-full shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6 pb-4 border-b border-gray-50">Transaction Summary</h3>

            <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Withdrawal Amount</span>
                    <span className="text-sm font-bold text-gray-900">$5,000.00</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Processing Fee (ACH)</span>
                    <span className="text-sm font-bold text-green-600">Free</span>
                </div>
            </div>

            <div className="pt-4 border-t border-gray-100 mb-8">
                <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-gray-900">Total Transfer</span>
                    <span className="text-xl font-bold text_color">$5,000.00</span>
                </div>
            </div>

            {/* Estimated Arrival Box */}
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mb-8">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text_color shadow-sm flex-shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-900 mb-0.5">Estimated Arrival</h4>
                        <p className="text-[10px] font-medium text-gray-500 leading-relaxed">
                            Funds typically arrive in 1-3 business days depending on your bank.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-auto space-y-3">
                <Link
                    href="/profile/settings/billing/wallet/withdraw/success"
                    className="w-full py-4 bg_color text-white font-bold rounded-xl text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10"
                >
                    Confirm Withdrawal
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
                <Link
                    href="/profile/settings/billing/wallet"
                    className="w-full py-3.5 bg-white border border-gray-100 text-gray-500 font-bold rounded-xl text-sm hover:bg-gray-50 hover:text-gray-700 transition-all flex items-center justify-center"
                >
                    Cancel
                </Link>
            </div>

            <p className="mt-8 text-[10px] text-gray-400 text-center leading-relaxed px-4">
                By clicking "Confirm Withdrawal", you authorize MyHorseTrade to initiate an ACH credit to the account specified above.
            </p>
        </div>
    );
}
