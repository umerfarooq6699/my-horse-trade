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
        <div className="min-h-screen bg-[#F8FAFC] pb-9 sm:pb-20 pt-5 sm:pt-6">
            <div className="container-width mx-auto px-6 lg:px-14 space-y-12">

                {/* Header Success Section */}
                <div className="text-center space-y-6 sm:space-y-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-blue-50 rounded-full border border-blue-100 shadow-sm relative">
                        <ShieldCheck size={40} className="sm:w-[48px] sm:h-[48px] text_color" />
                        <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg_color rounded-full border-4 border-white flex items-center justify-center">
                            <ShieldCheck size={10} className="sm:w-[14px] sm:h-[14px] text-white" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="mobile_heading lg_heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter">
                            Funds Secured in Escrow
                        </h1>
                        <p className="mobile_para max-w-2xl mx-auto leading-relaxed">
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
                    <button className="bg_color text-white px-2 sm:px-10 py-3 rounded-[10px] sm:rounded-[10px] sm:text-base font-[600] sm:font-[700] cursor-pointer flex items-center justify-center gap-3 shadow-xl shadow-blue-100 hover:scale-[1.02] active:scale-[0.98] transition-all group">
                        View Transaction Dashboard
                        <ArrowRight size={20} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
                    </button>

                </div>
            </div>
        </div>
    );
}
