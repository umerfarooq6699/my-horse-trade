"use client";

export default function CurrentPlan() {
    return (
        <div className="flex flex-col lg:flex-row gap-6">
            {/* Current Plan */}
            <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-4 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-4 md:mb-6 gap-4 sm:gap-0">
                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">CURRENT PLAN</p>
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Gallop Premium</h3>
                            <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active</span>
                        </div>
                    </div>
                    <div className="text-left sm:text-right">
                        <span className="text-xl sm:text-2xl font-bold text-gray-200 line-through mr-2 opacity-50">$99.00</span>
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">$49.00</span>
                        <span className="text-gray-500 font-medium text-sm sm:text-base"> / month</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Next Billing Date</p>
                        <div className="flex items-center gap-2 text-gray-900 font-bold">
                            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Oct 24, 2023
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Payment Method</p>
                        <div className="flex items-center gap-2 text-gray-900 font-bold">
                            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                <line x1="1" y1="10" x2="23" y2="10" />
                            </svg>
                            Visa ending in 4242
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button className="px-6 py-2.5 bg_color text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity">
                        Upgrade Plan
                    </button>
                    <button className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-lg text-sm hover:bg-gray-50 transition-colors">
                        Cancel Subscription
                    </button>
                </div>
            </div>

            {/* Plan Usage */}
            <div className="lg:w-[320px] bg-white rounded-2xl border border-gray-100 p-4 md:p-8 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Plan Usage</h3>
                        <span className="text-xs text-gray-500">Resets Nov 1</span>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-500 font-medium">Active Listings</span>
                                <span className="text-gray-900 font-bold">3 / 10</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg_color w-[30%] rounded-full" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-500 font-medium">Featured Boosts</span>
                                <span className="text-gray-900 font-bold">1 / 5</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[20%] rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <button className="flex items-center gap-2 text-sm font-bold text_color mt-6 hover:text-blue-700">
                    View limits details
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
