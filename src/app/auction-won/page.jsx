"use client";

import React from "react";
import AuctionWonStepper from "@/components/auction-won/AuctionWonStepper";
import HorseDetailsCard from "@/components/auction-won/HorseDetailsCard";
import TransactionDetailsCard from "@/components/auction-won/TransactionDetailsCard";
import NextStepCard from "@/components/auction-won/NextStepCard";

// Mock Data for the Winning Auction
const mockAuction = {
    horse: {
        name: "Thunderbolt",
        breed: "Thoroughbred",
        gender: "Stallion",
        age: 5,
        lot: "8849",
        winningBid: 15500,
        location: "Kentucky, USA",
        image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=800"
    },
    transaction: {
        id: "#TRX-8849-MH",
        dateWon: "Oct 24, 2023",
        paymentMethod: "Escrow Secure Hold",
        escrowStatus: "Pending Contract"
    }
};

export default function AuctionWonPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-9 sm:pb-20 pt-5 sm:pt-6">
            <div className="container-width mx-auto px-3 lg:px-14">

                {/* Header Section */}
                <div className="text-center mb-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-2 sm:mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span className="text-[11px] font-black text-green-600 uppercase tracking-widest">Auction Won</span>
                    </div>
                    <h1 className="mobile_heading lg_heading sm:text-6xl mb-4 tracking-tight">
                        Congratulations! <span className="text-gray-400">You Won!</span>
                    </h1>
                    <p className="mobile_para sm:font-[600] sm:text-[17px] max-w-2xl mx-auto">
                        You are the highest bidder for <span className="text-[#1e293b] font-black">{mockAuction.horse.name}</span>. Let's make it official and start the transfer process.
                    </p>
                </div>

                {/* Stepper */}
                <div className="sm:mb-10">
                    <AuctionWonStepper currentStep={1} />
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-8">
                        <HorseDetailsCard horse={mockAuction.horse} />
                        <TransactionDetailsCard details={mockAuction.transaction} />
                    </div>

                    {/* Right Column: Actions & Help */}
                    <div className="lg:col-span-4">
                        <NextStepCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
