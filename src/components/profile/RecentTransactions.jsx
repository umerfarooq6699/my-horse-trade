"use client";

import Image from "next/image";
import marketplace4 from "@/assets/images/marketplace4.png";
import marketplace5 from "@/assets/images/marketplace5.png";
import marketplace6 from "@/assets/images/marketplace6.png";

const transactions = [
    {
        id: 1,
        horse: "Silver Bullet",
        entity: "Buyer: Sarah J.",
        date: "Oct 24, 2023",
        status: "Completed",
        amount: "$15,000",
        image: marketplace4
    },
    {
        id: 2,
        horse: "Dusty",
        entity: "Seller: Mike T.",
        date: "Oct 20, 2023",
        status: "Processing",
        amount: "-$4,500",
        image: marketplace5
    },
    {
        id: 3,
        horse: "Golden Girl",
        entity: "Buyer: Ranch Co.",
        date: "Oct 15, 2023",
        status: "Completed",
        amount: "$8,900",
        image: marketplace6
    }
];

export default function RecentTransactions() {
    return (
        <div className="bg-white rounded-[24px] md:rounded-[32px] lg:rounded-[30px] p-4 md:p-6 lg:p-8 xl:p-3 border border-gray-100 h-full flex flex-col shadow-sm">
            <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-3">
                <h2 className="text-lg md:text-xl lg:text-2xl font-[600] text-gray-900 tracking-tight">Recent Transactions</h2>
                <button className="p-2 md:p-3 bg-gray-50 rounded-xl md:rounded-2xl text-gray-400 hover:text_color transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5 text-gray-600"><path d="M21 4H3" /><path d="M10 12h4" /><path d="M10 20h4" /><path d="M6 12h8" /><path d="M18 12h-4" /><line x1="14" x2="14" y1="4" y2="8" /></svg>
                </button>
            </div>

            <div className="flex-1 overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] md:text-[11px] uppercase font-black text-gray-400 tracking-[0.15em] md:tracking-[0.2em] border-b border-gray-50">
                            <th className="pb-4 md:pb-6 text-gray-500 px-1 md:px-2">Horse</th>
                            <th className="pb-4 md:pb-6 text-gray-500 text-center hidden sm:table-cell">Date</th>
                            <th className="pb-4 md:pb-6 text-gray-500 text-center hidden md:table-cell">Status</th>
                            <th className="pb-4 md:pb-6 text-gray-500 text-right px-1 md:px-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50/50">
                        {transactions.map((t) => (
                            <tr key={t.id} className="group hover:bg-gray-50/30 transition-all duration-300">
                                <td className="py-2 md:py-2 px-1 md:px-2">
                                    <div className="flex items-center gap-2 md:gap-3 lg:gap-5">
                                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl overflow-hidden shadow-sm flex-shrink-0 border border-gray-50">
                                            <Image src={t.image} alt={t.horse} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="text-xs md:text-sm lg:text-[15px] font-black text-gray-900 mb-0.5 tracking-tight truncate">{t.horse}</div>
                                            <div className="text-[9px] md:text-[10px] lg:text-[11px] font-extrabold text-gray-400 uppercase tracking-wider truncate">{t.entity}</div>
                                            {/* Show date on mobile below horse name */}
                                            <div className="text-[9px] font-bold text-gray-500 mt-1 sm:hidden">{t.date}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2 md:py-2 text-center text-xs md:text-[13px] font-bold text-gray-500 hidden sm:table-cell">{t.date}</td>
                                <td className="py-2 md:py-2 text-center hidden md:table-cell">
                                    <span className={`px-3 md:px-4 lg:px-5 py-1.5 md:py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest ${t.status === 'Completed' ? 'bg-blue-50 text_color' : 'bg-orange-50 text-orange-600'
                                        }`}>
                                        {t.status}
                                    </span>
                                </td>
                                <td className="py-4 md:py-6 text-right px-1 md:px-2">
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="text-sm md:text-[15px] font-black text-gray-900 tracking-tighter whitespace-nowrap">{t.amount}</span>
                                        {/* Show status on mobile below amount */}
                                        <span className={`md:hidden px-2 py-1 rounded-full text-[8px] font-black uppercase tracking-wider ${t.status === 'Completed' ? 'bg-blue-50 text_color' : 'bg-orange-50 text-orange-600'
                                            }`}>
                                            {t.status}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pt-6 md:pt-8 lg:pt-5 text-center mt-auto border-t border-gray-50/50">
                <button className="text-[10px] md:text-xs font-black text_color hover:opacity-80 uppercase tracking-[0.15em] md:tracking-[0.2em]">View Full History</button>
            </div>
        </div>
    );
}
