"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AgreementAcceptance() {
    const [agreementChecked, setAgreementChecked] = useState(false);
    const [inspectionChecked, setInspectionChecked] = useState(false);
    const [signature, setSignature] = useState("");
    const router = useRouter();

    const isFormValid = agreementChecked && inspectionChecked && signature.trim().length > 0;

    return (
        <div className="bg-white rounded-[10px] sm:rounded-[20px] p-4 sm:p-8 border border-gray-100 shadow-sm space-y-3 sm:space-y-8 mt-6">
            <h3 className="mobile_heading lg_heading">Acceptance</h3>

            <div className="space-y-6">
                {/* Checkbox 1 */}
                <label className="flex gap-4 cursor-pointer group">
                    <div className="relative flex-shrink-0 mt-1">
                        <input
                            type="checkbox"
                            checked={agreementChecked}
                            onChange={(e) => setAgreementChecked(e.target.checked)}
                            className="peer sr-only"
                        />
                        <div className="w-6 h-6 rounded-lg border-2 border-gray-100 bg-white transition-all group-hover:border_color peer-checked:bg_color peer-checked:border_color flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${agreementChecked ? 'scale-100' : 'scale-0'}`}><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                    </div>
                    <span className="text-[12px] text-gray-500">
                        I have read and agree to the <span className="text_color font-[700] cursor-pointer hover:underline">Terms of Service</span> and <span className="text_color font-[700] cursor-pointer hover:underline">Privacy Policy</span>.
                    </span>
                </label>

                {/* Checkbox 2 */}
                <label className="flex gap-4 cursor-pointer group">
                    <div className="relative flex-shrink-0 mt-1">
                        <input
                            type="checkbox"
                            checked={inspectionChecked}
                            onChange={(e) => setInspectionChecked(e.target.checked)}
                            className="peer sr-only"
                        />
                        <div className="w-6 h-6 rounded-lg border-2 border-gray-100 bg-white transition-all group-hover:border_color peer-checked:bg_color peer-checked:border_color flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${inspectionChecked ? 'scale-100' : 'scale-0'}`}><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                    </div>
                    <span className="text-[12px] text-gray-500">
                        I accept the 48-hour inspection window terms as described in Article 4.
                    </span>
                </label>
            </div>

            <div className="space-y-3">
                <span className="block text-[12px] font-[800] text-black uppercase tracking-widest">Digital Signature</span>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Type full name to sign"
                        value={signature}
                        onChange={(e) => setSignature(e.target.value)}
                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all placeholder:text-gray-400"
                    />
                    {signature.length > 0 && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            <span className="text-[10px] font-black text-green-500 uppercase tracking-tight">Verified</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                    )}
                </div>
                <p className="text-[12px] text-gray-500">By typing your name, you are electronically signing this agreement.</p>
            </div>

            <div className="space-y-4 pt-2">
                <button
                    onClick={() => router.push("/auction-won/escrow-payment")}
                    disabled={signature.trim().length === 0}
                    className="w-full py-4.5 rounded-2xl text-sm font-black flex items-center justify-center gap-3 transition-all duration-300 bg_color text-white shadow-lg shadow-blue-100 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    Sign & Proceed to Payment
                </button>
                <button className="w-full py-3 text-[12px] font-black text-gray-500 hover:text-gray-700 transition-colors uppercase tracking-widest">
                    Request Amendment
                </button>
            </div>

            {/* Pagination indicators from screenshot */}
            <div className="flex justify-center gap-2 pt-4">
                <div className="w-8 h-1.5 rounded-full bg-gray-100"></div>
                <div className="w-8 h-1.5 rounded-full bg_color"></div>
            </div>
        </div>
    );
}
