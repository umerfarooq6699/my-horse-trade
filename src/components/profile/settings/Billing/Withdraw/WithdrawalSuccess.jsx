"use client";

import Link from "next/link";

export default function WithdrawalSuccess() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
            {/* Success Header */}
            <div className="text-center mb-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-sm">
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M20 6L9 17L4 12" />
                        </svg>
                    </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Withdrawal Initiated</h1>
                <p className="text-gray-500 font-medium">
                    Your funds are on their way. We've sent a confirmation <br className="hidden md:block" />
                    email to <span className="text-gray-900 font-bold">user@email.com</span>.
                </p>
            </div>

            {/* Main Status Card */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden mb-10">
                <div className="p-8 md:p-10 border-b border-gray-50">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Transfer Status</h3>
                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Updated Just Now</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="relative mb-8 px-2">
                        {/* Background Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full"></div>

                        {/* Active Line (Initiated to Processing) */}
                        <div className="absolute top-1/2 left-0 w-1/2 h-1 bg_color -translate-y-1/2 rounded-full"></div>

                        {/* Steps */}
                        <div className="relative flex justify-between">
                            <div className="flex flex-col items-center">
                                <div className="w-3.5 h-3.5 rounded-full bg_color border-4 border-white shadow-sm ring-4 ring-blue-50/50 mb-3 z-10"></div>
                                <span className="text-[10px] font-black text_color uppercase tracking-wider">Initiated</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-3.5 h-3.5 rounded-full bg-gray-100 border-4 border-white shadow-sm mb-3 z-10"></div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Processing</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-3.5 h-3.5 rounded-full bg-gray-100 border-4 border-white shadow-sm mb-3 z-10"></div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Completed</span>
                            </div>
                        </div>
                    </div>

                    {/* Info Note */}
                    <div className="bg-blue-50/50 rounded-2xl p-4 flex items-center gap-3 border border-blue-50">
                        <svg className="w-5 h-5 text_color flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <p className="text-xs font-semibold text-gray-500">
                            Processing typically takes 1-3 business days depending on your bank.
                        </p>
                    </div>
                </div>

                <div className="p-8 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                        {/* Amount Box */}
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Amount Withdrawn</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-gray-900">$5,250.00</span>
                                <span className="text-sm font-bold text-gray-400">USD</span>
                            </div>
                        </div>

                        {/* Destination Account Box */}
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Destination Account</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 21h18" />
                                        <path d="M3 10h18" />
                                        <path d="M5 6l7-3 7 3" />
                                        <path d="M4 10v11" />
                                        <path d="M20 10v11" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-base font-bold text-gray-900 leading-tight">Wells Fargo</p>
                                    <p className="text-sm font-medium text-gray-500">Checking •••• 1234</p>
                                </div>
                            </div>
                        </div>

                        {/* Est. Arrival Box */}
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Est. Arrival</p>
                            <p className="text-base font-bold text-gray-900 mb-1">Oct 24, 2023</p>
                            <p className="text-xs font-medium text-gray-500">By end of day</p>
                        </div>

                        {/* Reference ID Box */}
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Reference ID</p>
                            <div className="inline-block bg-gray-100/80 px-4 py-2 rounded-lg text-sm font-bold text-gray-700 font-mono">
                                #WTH-8829-MHT
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secure Badge Footer */}
                <div className="bg-gray-50/50 py-5 flex items-center justify-center gap-2 border-t border-gray-50">
                    <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        This transaction is secure and encrypted via 256-bit SSL.
                    </p>
                </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link
                    href="/profile/settings/billing/wallet"
                    className="w-full sm:w-auto px-10 py-4 bg_color text-white font-bold rounded-2xl text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                    Return to Wallet
                </Link>
                <button className="w-full sm:w-auto px-10 py-4 bg-white border border-gray-100 text-gray-900 font-bold rounded-2xl text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download Receipt
                </button>
            </div>

            {/* Footer Help Link */}
            <p className="text-center text-xs font-bold text-gray-400">
                Need help? <Link href="/support" className="text-gray-500 hover:text-gray-700 underline">Contact Support</Link> or view your <Link href="/profile/settings/billing/wallet" className="text-gray-500 hover:text-gray-700 underline">Transaction History.</Link>
            </p>
        </div>
    );
}
