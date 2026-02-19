"use client";

import React from "react";
import { FileText, CreditCard, ShieldCheck, Truck, CheckCircle2 } from "lucide-react";

export default function TransactionProgress() {
    const stages = [
        { id: 1, label: "Agreement", status: "Signed Oct 24", icon: FileText, state: "completed" },
        { id: 2, label: "Payment Sent", status: "Processed Oct 25", icon: CreditCard, state: "completed" },
        { id: 3, label: "Funds in Escrow", status: "Processing", icon: ShieldCheck, state: "active" },
        { id: 4, label: "Delivery", status: "Pending", icon: Truck, state: "upcoming" },
        { id: 5, label: "Funds Released", status: "Pending", icon: CheckCircle2, state: "upcoming" },
    ];

    return (
        <div className="bg-white rounded-[10px] sm:rounded-[20px] p-6 sm:p-10 border border-gray-100 shadow-sm">
            <h3 className="mobile_heading lg_heading mb-8 sm:mb-12">Transaction Progress</h3>

            <div className="flex flex-col min-[630px]:flex-row min-[630px]:items-center min-[630px]:justify-between relative">
                {/* Connection Lines */}
                {/* Horizontal Line (Large screens) */}
                <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-50 -translate-y-1/2 z-0 hidden min-[630px]:block"></div>
                {/* Vertical Line (Mobile) */}
                <div className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-gray-50 z-0 min-[630px]:hidden"></div>

                {stages.map((stage, idx) => {
                    const isActive = stage.state === "active";
                    const isCompleted = stage.state === "completed";
                    const Icon = stage.icon;

                    return (
                        <div key={stage.id} className="relative z-10 flex flex-row min-[630px]:flex-col items-start min-[630px]:items-center gap-4 min-[630px]:gap-0 min-[630px]:flex-1 mb-8 last:mb-0 min-[630px]:mb-0">
                            <div
                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${isActive
                                    ? "bg_color text-white shadow-lg shadow-blue-100 scale-110"
                                    : isCompleted
                                        ? "bg_color text-white"
                                        : "bg-white border border-gray-100 text-gray-200"
                                    }`}
                            >
                                <Icon size={isActive || isCompleted ? 18 : 16} strokeWidth={isActive || isCompleted ? 2.5 : 2} />
                            </div>
                            <div className="min-[630px]:mt-4 text-left min-[630px]:text-center">
                                <p className={`mobile_heading !text-[12px] tracking-tight ${isActive ? "text_color" : isCompleted ? "text-[#1e293b]" : "text-gray-300"
                                    }`}>
                                    {stage.label}
                                </p>
                                <p className={`mobile_para !text-[10px] ${isActive ? "text_color animate-pulse" : "text-gray-400"
                                    }`}>
                                    {stage.status}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
