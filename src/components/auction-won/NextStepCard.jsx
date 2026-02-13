"use client";

import React from "react";

export default function NextStepCard() {
    return (
        <div className="space-y-6">
            {/* Action Card */}
            <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg_color opacity-[0.03] rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-110"></div>

                <h3 className="text-xl font-black text-[#1e293b] mb-4">Next Step: Contract</h3>
                <p className="text-[13px] leading-relaxed text-gray-500 font-bold mb-8">
                    Please review and digitally sign the bill of sale to initiate the escrow funding phase.
                </p>

                <button className="w-full bg_color text-white py-4.5 rounded-2xl text-sm font-black flex items-center justify-center gap-3 shadow-lg shadow-blue-100 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Review Digital Contract
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>

                <div className="flex items-center justify-center gap-2 mt-6 text-[11px] font-black text-green-600 uppercase tracking-widest bg-green-50/50 py-2.5 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    Secure Escrow Protection
                </div>
            </div>

            {/* Help Card */}
            <div className="bg-gray-50/50 rounded-[32px] p-8 border border-dashed border-gray-200">
                <h4 className="text-[13px] font-black text-[#1e293b] mb-6 uppercase tracking-widest">Need help with this trade?</h4>
                <div className="space-y-5">
                    <a href="#" className="flex items-center gap-4 text-gray-500 hover:text_color transition-colors group">
                        <div className="p-2 bg-white rounded-lg border border-gray-100 group-hover:border_color transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                        </div>
                        <span className="text-[13px] font-bold">Escrow FAQ</span>
                    </a>
                    <a href="#" className="flex items-center gap-4 text-gray-500 hover:text_color transition-colors group">
                        <div className="p-2 bg-white rounded-lg border border-gray-100 group-hover:border_color transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <span className="text-[13px] font-bold">Contact Support</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
