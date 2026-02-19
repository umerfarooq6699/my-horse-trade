"use client";

import React from "react";
import { Check } from "lucide-react";

export default function EscrowProcessCard() {
    const steps = [
        {
            id: 1,
            title: "1. You Deposit",
            description: "Funds are secured in our vault. The seller is notified.",
            status: "completed"
        },
        {
            id: 2,
            title: "2. Horse Delivered",
            description: "Seller arranges transport. You verify the horse upon arrival.",
            status: "pending"
        },
        {
            id: 3,
            title: "3. Funds Released",
            description: "Only after your approval, we release payment to the seller.",
            status: "pending"
        }
    ];

    return (
        <div className="bg-white rounded-[10px] sm:rounded-[20px] p-4 sm:p-8 border border-gray-100 shadow-sm space-y-8 mt-6">
            <h3 className="mobile_heading lg_heading">How Escrow Works</h3>

            <div className="space-y-5 md:space-y-10 relative pl-4">
                {/* Connection Line */}
                <div className="absolute left-[31px] top-4 bottom-4 w-0.5 bg-gray-50 z-0"></div>

                {steps.map((step) => (
                    <div key={step.id} className="relative z-10 flex gap-6">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 shrink-0 transition-all ${step.status === 'completed'
                            ? "bg_color border_color text-white"
                            : "bg-white border-gray-100 text-gray-300"
                            }`}>
                            {step.status === 'completed' ? (
                                <Check size={16} strokeWidth={4} />
                            ) : (
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-100"></div>
                            )}
                        </div>
                        <div className="space-y-1.5">
                            <h4 className={`mobile_heading !text-[14px] !font-[700] transition-colors ${step.status === 'completed' ? "text-[#1e293b]" : "text-gray-400"
                                }`}>
                                {step.title}
                            </h4>
                            <p className="mobile_para !leading-relaxed max-w-[200px]">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
