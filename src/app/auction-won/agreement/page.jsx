"use client";

import React from "react";
import AuctionWonStepper from "@/components/auction-won/AuctionWonStepper";
import AgreementDocument from "@/components/auction-won/AgreementDocument";
import AgreementSummary from "@/components/auction-won/AgreementSummary";
import AgreementAcceptance from "@/components/auction-won/AgreementAcceptance";
import Link from "next/link";

// Mock Data for the Agreement
const mockData = {
    horse: {
        name: "Thunderbolt",
        breed: "Thoroughbred",
        gender: "Stallion",
        age: 5,
        regNumber: "TB-994821-X",
        dob: "April 12, 2018",
        colorMarkings: "Bay with white star",
        price: 45000,
    },
    seller: {
        name: "Sarah Jenkins",
        address: "123 Ranch Road, Kentucky, USA",
    },
    summary: {
        price: 45000,
        fee: 450,
        total: 45450,
        horseName: "Thunderbolt",
    },
    meta: {
        id: "#MHT-8842",
        created: "Oct 24, 2023"
    }
};

export default function AgreementPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-20 pt-12">
            <div className="container-width mx-auto px-6 lg:px-14">

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
                <div className="mb-10">
                    <AuctionWonStepper currentStep={2} />
                </div>

                {/* Page Title & Meta */}
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-4xl font-black text-[#1e293b] tracking-tight">Review Sale Agreement</h2>
                        <div className="flex items-center gap-4 mt-3">
                            <span className="text-[11px] font-black text_color bg_color/5 px-3 py-1.5 rounded-lg border border_color/10">ID: {mockData.meta.id}</span>
                            <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Created on {mockData.meta.created}</span>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-black text_color hover:opacity-80 transition-all group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-0.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        Download PDF
                    </button>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Agreement Document */}
                    <div className="lg:col-span-8">
                        <AgreementDocument horse={mockData.horse} seller={mockData.seller} />
                    </div>

                    {/* Right Column: Summary & Acceptance */}
                    <div className="lg:col-span-4 sticky top-28">
                        <AgreementSummary summary={mockData.summary} />
                        <AgreementAcceptance />
                    </div>
                </div>
            </div>
        </div>
    );
}
