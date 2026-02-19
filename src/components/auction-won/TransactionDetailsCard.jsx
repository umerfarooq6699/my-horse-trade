"use client";

import React from "react";

export default function TransactionDetailsCard({ details }) {
    return (
        <div className="bg-white rounded-[10px] md:rounded-[20px] p-4 sm:p-8 border border-gray-100 shadow-sm mt-5">
            <div className="flex items-center gap-3 mb-3 sm:mb-8">
                <div className="p-2.5 bg-gray-50 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                </div>
                <h3 className="mobile_heading lg_heading sm:text-2xl">Transaction Details</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-10 gap-x-12">
                <div className="space-y-.5">
                    <span className="block mobile_para">Transaction ID</span>
                    <span className="text-[15px] font-[700] text-[#1e293b]">{details.id}</span>
                </div>

                <div className="space-y-.5">
                    <span className="block mobile_para">Date Won</span>
                    <span className="text-[15px] font-[700] text-[#1e293b]">{details.dateWon}</span>
                </div>

                <div className="space-y-.5">
                    <span className="block mobile_para">Payment Method</span>
                    <span className="text-[15px] font-[700] text-[#1e293b]">{details.paymentMethod}</span>
                </div>

                <div className="space-y-.5">
                    <span className="block mobile_para">Escrow Status</span>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>
                        <span className="text-[15px] font-black text-orange-500">{details.escrowStatus}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
