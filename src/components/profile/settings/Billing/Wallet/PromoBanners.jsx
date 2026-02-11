"use client";

export default function PromoBanners() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            <div className="relative overflow-hidden bg-[#3b5998] rounded-2xl p-8 text-white group">
                {/* Abstract Rocket Icon BG */}
                <div className="absolute right-[-20px] bottom-[-20px] opacity-10 transform scale-150 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-500">
                    <svg className="w-48 h-48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.181 2.181 0 0 0-2.91-.09z" />
                        <path d="M12 15l-3-3m-3 9l3-3m-2 2l2-2" />
                        <path d="M9 15l3 3m3 3L9 15M10.5 14.5l-1.5 1.5M14.5 10.5l-1.5 1.5" />
                        <path d="M15 9l-4.5 4.5" />
                        <path d="M11 12l2.5-2.5a2.12 2.12 0 0 1 3 0l2 2a2.12 2.12 0 0 1 0 3l-2.5 2.5L11 12z" />
                        <path d="M15 9l2-2a2 2 0 0 0 0-2.83l-1-1a2 2 0 0 0-2.83 0l-2 2L15 9z" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Need Faster Withdrawals?</h3>
                    <p className="text-blue-100 text-sm mb-6 max-w-[280px]">
                        Verify your identity to unlock instant ACH transfers and lower fees.
                    </p>
                    <button className="bg-white text-gray-900 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">
                        Verify Now
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 flex items-start justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Help & Support</h3>
                    <p className="text-gray-500 text-sm">
                        Have questions about a transaction or escrow release?
                    </p>
                </div>
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
