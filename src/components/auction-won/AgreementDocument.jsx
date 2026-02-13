"use client";

import React from "react";

export default function AgreementDocument({ horse, seller }) {
    return (
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[800px]">
            {/* Doc Header */}
            <div className="px-8 py-4 border-b border-gray-50 bg-gray-50/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Secure Document</span>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <span>Page 1 of 4</span>
                    <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                        <button className="hover:text_color transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg></button>
                        <button className="hover:text_color transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg></button>
                    </div>
                </div>
            </div>

            {/* Doc Content */}
            <div className="flex-1 overflow-y-auto p-10 custom-scrollbar bg-white">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center space-y-2">
                        <h1 className="text-2xl font-black text-[#1e293b] tracking-tight uppercase">Horse Purchase & Escrow Agreement</h1>
                        <p className="text-xs font-bold text-gray-400 italic">This Agreement is made effective as of October 24, 2023</p>
                    </div>

                    {/* Section 1 */}
                    <section className="space-y-4">
                        <h3 className="text-sm font-black text-[#1e293b] uppercase tracking-wider">1. The Parties</h3>
                        <div className="space-y-3 text-[13px] leading-relaxed text-gray-600 font-medium">
                            <p><span className="font-black text-[#1e293b]">SELLER:</span> {seller.name}, located at {seller.address} ("Seller").</p>
                            <p><span className="font-black text-[#1e293b]">BUYER:</span> <span className="text_color font-bold underline cursor-pointer">Current User</span>, located at [Buyer Address] ("Buyer").</p>
                            <p>The Parties agree that the transaction will be facilitated through MyHorseTrade.com acting as the Escrow Agent.</p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-4">
                        <h3 className="text-sm font-black text-[#1e293b] uppercase tracking-wider">2. The Horse</h3>
                        <p className="text-[13px] leading-relaxed text-gray-600 font-medium">The Seller agrees to sell, and Buyer agrees to purchase the following horse (the "Horse"):</p>
                        <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 space-y-2">
                            <ul className="grid grid-cols-1 gap-2 text-[13px] font-medium text-gray-600">
                                <li>• <span className="font-black text-[#1e293b]">Name:</span> {horse.name}</li>
                                <li>• <span className="font-black text-[#1e293b]">Breed:</span> {horse.breed}</li>
                                <li>• <span className="font-black text-[#1e293b]">Registration #:</span> {horse.regNumber}</li>
                                <li>• <span className="font-black text-[#1e293b]">Date of Birth:</span> {horse.dob}</li>
                                <li>• <span className="font-black text-[#1e293b]">Sex:</span> {horse.gender}</li>
                                <li>• <span className="font-black text-[#1e293b]">Color/Markings:</span> {horse.colorMarkings}</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-4">
                        <h3 className="text-sm font-black text-[#1e293b] uppercase tracking-wider">3. Purchase Price & Payment</h3>
                        <p className="text-[13px] leading-relaxed text-gray-600 font-medium">
                            The total purchase price for the Horse is <span className="font-black text-[#1e293b]">${horse.price?.toLocaleString()} USD</span>.
                        </p>
                        <p className="text-[13px] leading-relaxed text-gray-600 font-medium italic">
                            The Buyer agrees to deposit the full amount into the MyHorseTrade Escrow Account within 3 business days of signing this agreement. Funds will be held securely until all conditions of the sale are met.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-4">
                        <h3 className="text-sm font-black text-[#1e293b] uppercase tracking-wider">4. Pre-Purchase Exam & Warranties</h3>
                        <p className="text-[13px] leading-relaxed text-gray-600 font-medium">
                            The Buyer acknowledges they have the right to a Pre-Purchase Veterinary Examination (PPE) at their own expense.
                        </p>

                        <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-5">
                            <p className="text-[12px] leading-relaxed text-orange-800 font-medium">
                                <span className="font-black uppercase tracking-wider">Clause 4.2: Health Guarantee.</span> The Seller warrants that the Horse is free from any known illness, lameness, or vice, except as disclosed in the attached Veterinary Disclosure Form #VD-2023-A.
                            </p>
                        </div>

                        <p className="text-[13px] leading-relaxed text-gray-600 font-medium">
                            The Buyer has a 48-hour inspection window upon delivery to verify the condition of the Horse matches the description.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-4 pb-20">
                        <h3 className="text-sm font-black text-[#1e293b] uppercase tracking-wider">5. Risk of Loss & Transport</h3>
                        <p className="text-[13px] leading-relaxed text-gray-600 font-medium">
                            Risk of loss passes from Seller to Buyer upon the Horse loading onto the transport vehicle arranged by the Buyer. The Seller agrees to provide all necessary travel documents, including a negative Coggins test dated within 6 months.
                        </p>
                    </section>

                    <div className="text-center pt-20 border-t border-gray-50">
                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">End of Agreement</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
