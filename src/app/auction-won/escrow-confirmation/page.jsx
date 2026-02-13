"use client";

import React from "react";
import { ShieldCheck, ArrowRight, HelpCircle } from "lucide-react";
import TransactionProgress from "@/components/auction-won/TransactionProgress";
import TransactionStatusSummary from "@/components/auction-won/TransactionStatusSummary";
import NextStepsCard from "@/components/auction-won/NextStepsCard";
import Link from "next/link";

export default function EscrowSuccessPage() {
    const mockData = {
        horse: {
            id: "MHT-88291",
            name: "Thunderbolt II",
            price: 15000,
        },
        transactionId: "#MHT-88291"
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 lg:p-20">
            <div className="container-width w-full space-y-12">

                {/* Header Success Section */}
                <div className="text-center space-y-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-50 rounded-full border border-blue-100 shadow-sm relative">
                        <ShieldCheck size={48} strokeWidth={2} className="text_color" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg_color rounded-full border-4 border-white flex items-center justify-center">
                            <ShieldCheck size={14} className="text-white" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl lg:text-6xl font-black text-[#1e293b] tracking-tighter">
                            Funds Secured in Escrow
                        </h1>
                        <p className="text-[17px] font-bold text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Your payment of <span className="text-[#1e293b] font-black">${mockData.horse.price?.toLocaleString()}</span> has been received and is safely held by <span className="text_color font-black">MyHorseTrade</span>.
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[11px] font-black text-green-600 uppercase tracking-widest">Transaction ID: {mockData.transactionId}</span>
                    </div>
                </div>

                {/* Progress Section */}
                <TransactionProgress />

                {/* Grid Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <TransactionStatusSummary horse={mockData.horse} />
                    <NextStepsCard />
                </div>

                {/* CTA & Footer */}
                <div className="flex flex-col items-center gap-8">
                    <button className="bg_color text-white px-10 py-5 rounded-[24px] text-base font-black flex items-center justify-center gap-3 shadow-xl shadow-blue-100 hover:scale-[1.02] active:scale-[0.98] transition-all group">
                        View Transaction Dashboard
                        <ArrowRight size={20} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
                    </button>

                    <button className="flex items-center gap-2 text-[12px] font-black text-gray-400 uppercase tracking-[0.15em] hover:text_color transition-colors">
                        <HelpCircle size={14} strokeWidth={3} />
                        What is Escrow Protection?
                    </button>

                    <div className="pt-12 border-t border-gray-100 w-full text-center">
                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
                            © 2023 MyHorseTrade. All rights reserved. &nbsp; | &nbsp;
                            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span> &nbsp; | &nbsp;
                            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
