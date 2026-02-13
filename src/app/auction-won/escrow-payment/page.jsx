"use client";

import React, { useState } from "react";
import AuctionWonStepper from "@/components/auction-won/AuctionWonStepper";
import PaymentMethodTabs from "@/components/auction-won/PaymentMethodTabs";
import CreditCardForm from "@/components/auction-won/CreditCardForm";
import EscrowSummary from "@/components/auction-won/EscrowSummary";
import EscrowProcessCard from "@/components/auction-won/EscrowProcessCard";
import EscrowTrustBadges from "@/components/auction-won/EscrowTrustBadges";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function EscrowDepositPage() {
    const [paymentMethod, setPaymentMethod] = useState("card");

    const mockData = {
        horse: {
            id: "MHT-8842-XM",
            name: "Starlight",
            breed: "Thoroughbred Mare",
            age: 6,
            price: 15000,
        },
        summary: {
            price: 15000,
            fee: 225,
            total: 15225,
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-20 pt-8">
            <div className="container-width mx-auto px-6 lg:px-14">

                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8">
                    <Link href="/" className="hover:text_color transition-colors">Home</Link>
                    <ChevronRight size={12} strokeWidth={3} className="text-gray-300" />
                    <span className="hover:text_color cursor-pointer transition-colors">Transaction #4092</span>
                    <ChevronRight size={12} strokeWidth={3} className="text-gray-300" />
                    <span className="text-[#1e293b]">Escrow Deposit</span>
                </nav>

                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span className="text-[11px] font-black text-green-600 uppercase tracking-widest">Auction Won</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-[#1e293b] mb-4 tracking-tight">
                        Congratulations! <span className="text-gray-400">You Won!</span>
                    </h1>
                    <p className="text-[17px] font-bold text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        You are the highest bidder for <span className="text-[#1e293b] font-black">{mockData.horse.name}</span>. Let's make it official and start the transfer process.
                    </p>
                </div>

                {/* Stepper */}
                <div className="mb-14">
                    <AuctionWonStepper currentStep={3} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Payment Form */}
                    <div className="lg:col-span-8 bg-white rounded-[32px] p-10 border border-gray-100 shadow-sm">
                        <div className="mb-10">
                            <h2 className="text-4xl font-black text-[#1e293b] tracking-tight mb-2">Secure Escrow Deposit</h2>
                            <p className="text-[15px] font-bold text-gray-400">Step 3 of 4: Your funds are held safely until you confirm delivery.</p>
                        </div>

                        <div className="space-y-2 mb-8">
                            <span className="block text-[11px] font-black text-gray-400 uppercase tracking-widest">Select Payment Method</span>
                            <PaymentMethodTabs activeMethod={paymentMethod} onMethodChange={setPaymentMethod} />
                        </div>

                        {paymentMethod === 'card' ? (
                            <CreditCardForm totalAmount={mockData.summary.total} />
                        ) : (
                            <div className="p-12 text-center border-2 border-dashed border-gray-100 rounded-[32px] bg-gray-50/50">
                                <p className="text-gray-400 font-bold">This payment method will be available in the next version.</p>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Summary & Info */}
                    <div className="lg:col-span-4 sticky top-28">
                        <EscrowSummary horse={mockData.horse} summary={mockData.summary} />
                        <EscrowProcessCard />
                    </div>
                </div>

                {/* Trust Footer */}
                <EscrowTrustBadges />
            </div>
        </div>
    );
}
