"use client";

export default function PaymentMethodExpiring() {
    return (
        <div className="bg-[#FFF9F0] border border-[#FFEDD5] rounded-xl p-4 flex items-start justify-between">
            <div className="flex gap-3">
                <div className="text-orange-500 mt-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-[#9A3412] mb-1">Payment Method Expiring</h4>
                    <p className="text-sm text-[#C2410C]">
                        Your Visa card ending in 4242 expires in 14 days. Please update your payment method to avoid service interruption.
                    </p>
                </div>
            </div>
            <button className="text-sm font-bold text-[#9A3412] hover:text-[#7C2D12]">Dismiss</button>
        </div>
    );
}
