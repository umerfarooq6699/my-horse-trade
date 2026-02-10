"use client";

export default function BillingHistory() {
    const billingHistory = [
        {
            invoice: "#INV-2023-009",
            date: "Sep 24, 2023",
            amount: "$49.00",
            status: "Paid",
        },
        {
            invoice: "#INV-2023-008",
            date: "Sep 24, 2023",
            amount: "$49.00",
            status: "Paid",
        },
        {
            invoice: "#INV-2023-007",
            date: "Sep 24, 2023",
            amount: "$49.00",
            status: "Paid",
        },
        {
            invoice: "#INV-2023-006",
            date: "Sep 24, 2023",
            amount: "$49.00",
            status: "Failed",
        }
    ];

    return (
        <div>
            <div className="flex items-center justify-between mb-4 mt-8">
                <h3 className="text-lg font-bold text-gray-900">Billing History</h3>
                <button className="text-sm font-bold text-gray-500 flex items-center gap-1">
                    Last 12 Months
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto scrollbar-visible">
                    <table className="w-full">
                        <thead className="bg-gray-50/50 border-b border-gray-100">
                            <tr>
                                <th className="text-left text-xs font-bold text-gray-900 px-6 py-4 whitespace-nowrap">Invoice</th>
                                <th className="text-left text-xs font-bold text-gray-900 px-6 py-4 whitespace-nowrap">Date</th>
                                <th className="text-left text-xs font-bold text-gray-900 px-6 py-4 whitespace-nowrap">Amount</th>
                                <th className="text-left text-xs font-bold text-gray-900 px-6 py-4 whitespace-nowrap">Status</th>
                                <th className="text-right text-xs font-bold text-gray-900 px-6 py-4 whitespace-nowrap">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {billingHistory.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">{item.invoice}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 font-medium whitespace-nowrap">{item.date}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">{item.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${item.status === 'Paid'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-500'
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${item.status === 'Paid' ? 'bg-green-500' : 'bg-gray-500'
                                                }`}></span>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap">
                                        <button className="text-gray-400 hover:text_color transition-colors">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2 2v-4" />
                                                <polyline points="7 10 12 15 17 10" />
                                                <line x1="12" y1="15" x2="12" y2="3" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
