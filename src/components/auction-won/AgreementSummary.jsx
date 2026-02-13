"use client";

import React from "react";

export default function AgreementSummary({ summary }) {
    return (
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm space-y-8">
            <h3 className="text-lg font-black text-[#1e293b] tracking-tight">Transaction Summary</h3>

            <div className="space-y-5">
                <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-gray-400">Sale Price</span>
                    <span className="font-black text-[#1e293b]">${summary.price?.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1.5">
                        <span className="font-bold text-gray-400">Escrow Fee (1.5%)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 cursor-help"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                    </div>
                    <span className="font-black text-[#1e293b]">${summary.fee?.toLocaleString()}.00</span>
                </div>

                <div className="h-px bg-gray-50"></div>

                <div className="flex justify-between items-center text-base">
                    <span className="font-black text-[#1e293b]">Total Due</span>
                    <span className="text-xl font-black text_color">${summary.total?.toLocaleString()}.00</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                <div className="space-y-1.5">
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Seller</span>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                            <img src="https://avatar.iran.liara.run/public/girl?username=Sarah" alt="Seller" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[12px] font-black text-[#1e293b] truncate">Sarah J.</span>
                    </div>
                </div>
                <div className="space-y-1.5 pl-4 border-l border-gray-50">
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Horse</span>
                    <span className="text-[12px] font-black text-[#1e293b] block truncate">{summary.horseName}</span>
                </div>
            </div>
        </div>
    );
}
