import Link from "next/link";

export default function MyWallet() {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-4 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text_color">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">My Wallet</h3>
                        <p className="text-sm text-gray-500">Manage your earnings and escrow funds</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Link
                        href="/profile/settings/billing/wallet"
                        className="px-3 md:px-6 py-2.5 bg_color text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity whitespace-nowrap flex items-center justify-center"
                    >
                        Go to Wallet
                    </Link>
                    <Link
                        href="/profile/settings/billing/wallet/withdraw"
                        className="px-3 md:px-6 py-2.5 bg-white border border-blue-200 text_color font-bold rounded-lg text-sm hover:bg-blue-50 transition-colors whitespace-nowrap flex items-center justify-center"
                    >
                        Withdraw
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 border-t border-gray-100 pt-8">
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">TOTAL BALANCE</p>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">$12,450.00 <span className="text-lg text-gray-500 font-medium">USD</span></p>
                </div>
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">IN ESCROW</p>
                    <p className="text-2xl font-bold text-gray-900">$4,450.00</p>
                </div>
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">AVAILABLE</p>
                    <p className="text-2xl font-bold text-green-500">$8,000.00</p>
                </div>
            </div>
        </div>
    );
}
