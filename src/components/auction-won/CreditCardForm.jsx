"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Lock, CreditCard } from "lucide-react";

export default function CreditCardForm({ totalAmount }) {
    const router = useRouter();
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card Number */}
                <div className="md:col-span-2">
                    <label className="block mobile_para !font-[700] !text-[#1e293b] mb-3">Card Number</label>
                    <div className="relative group">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text_color transition-colors">
                            <CreditCard size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="0000 0000 0000 0000"
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl pl-16 pr-6 sm:pr-20 py-3 text-lg font-black text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all placeholder:text-gray-500 placeholder:font-normal"
                        />
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden sm:flex gap-1">
                            <div className="w-8 h-5 bg-gray-200 rounded"></div>
                            <div className="w-8 h-5 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>

                {/* Expiration Date */}
                <div>
                    <label className="block mobile_para !font-[700] !text-[#1e293b] mb-3">Expiration Date</label>
                    <input
                        type="text"
                        placeholder="MM / YY"
                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-3 text-base font-black text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all placeholder:text-gray-500 placeholder:font-normal"
                    />
                </div>

                {/* CVC */}
                <div>
                    <label className="block mobile_para !font-[700] !text-[#1e293b] mb-3 flex justify-between">
                        CVC
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 cursor-help"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                    </label>
                    <input
                        type="text"
                        placeholder="•••"
                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-3 text-base font-black text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all placeholder:text-gray-500 placeholder:font-normal"
                    />
                </div>

                {/* Cardholder Name */}
                <div className="md:col-span-2">
                    <label className="block mobile_para !font-[700] !text-[#1e293b] mb-3">Cardholder Name</label>
                    <input
                        type="text"
                        placeholder="As shown on card"
                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-3 text-base font-black text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all placeholder:text-gray-500 placeholder:font-normal"
                    />
                </div>
            </div>

            {/* Security Message */}
            <div className="p-5 bg-blue-50/30 border border-blue-50 rounded-[10px] sm:rounded-[20px] flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text_color shadow-sm shrink-0">
                    <Lock size={20} />
                </div>
                <div className="space-y-1">
                    <p className="mobile_para text-sm">Secure 256-bit Encryption</p>
                    <p className="mobile_para">
                        Your payment details are                                                                                                                                                                                                                             processed securely. Funds are held in a non-interest bearing escrow account and are not released to the seller until you verify the horse's condition upon delivery.
                    </p>
                </div>
            </div>

            {/* Submit Button */}
            <div className="space-y-4 pt-4">
                <button
                    onClick={() => router.push("/auction-won/escrow-confirmation")}
                    className="w-full bg_color text-white py-3 rounded-[10px] sm:rounded-[10px] cursor-pointer sm:font-[700] flex items-center justify-center gap-3 shadow-xl shadow-blue-100 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                    Deposit ${totalAmount.toLocaleString()}.00 Securely
                </button>

                <div className="flex justify-center items-center gap-6">
                    <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Verified Secure</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <Lock size={14} className="text-gray-500" />
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">SSL Encrypted</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
