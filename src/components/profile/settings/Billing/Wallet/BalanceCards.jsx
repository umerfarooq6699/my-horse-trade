import Link from "next/link";

export default function BalanceCards() {
    const balances = [
        {
            title: "Available Balance",
            amount: "$12,450.00",
            icon: (
                <svg className="w-8 h-8 opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
            ),
            button: (
                <Link
                    href="/profile/settings/billing/wallet/withdraw"
                    className="w-full mt-6 py-3 bg_color text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                    Withdraw Funds
                </Link>
            )
        },
        {
            title: "Held in Escrow",
            amount: "$4,000.00",
            icon: (
                <svg className="w-8 h-8 opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    <circle cx="12" cy="16" r="1.5" />
                    <path d="M18 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                </svg>
            ),
            subtitle: <span className="text_color">2 transactions</span>,
            description: "currently in progress."
        },
        {
            title: "Total Earned (Lifetime)",
            amount: "$58,200.00",
            icon: (
                <svg className="w-8 h-8 text-green-500 opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
                    <path d="M16 7H22V13" />
                </svg>
            ),
            badge: (
                <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M6 15l6-6 6 6" />
                    </svg>
                    12%
                </span>
            ),
            subtext: "vs last month"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {balances.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-semibold text-gray-500">{item.title}</p>
                        <div className="text-gray-400">
                            {item.icon}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-3xl font-bold text-gray-900">{item.amount}</p>
                        {item.badge}
                    </div>
                    {item.subtitle && (
                        <p className="text-sm text-gray-500 mt-4">
                            <span className="font-bold">{item.subtitle}</span> {item.description}
                        </p>
                    )}
                    {item.subtext && (
                        <p className="text-sm text-gray-500 mt-4">
                            {item.subtext}
                        </p>
                    )}
                    {item.button}
                </div>
            ))}
        </div>
    );
}
