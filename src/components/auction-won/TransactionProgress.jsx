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
        <div className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-sm">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-12">Transaction Progress</h3>

            <div className="flex items-center justify-between relative">
                {/* Connection Lines */}
                <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-50 -translate-y-1/2 z-0"></div>

                {stages.map((stage, idx) => {
                    const isActive = stage.state === "active";
                    const isCompleted = stage.state === "completed";
                    const Icon = stage.icon;

                    return (
                        <div key={stage.id} className="relative z-10 flex flex-col items-center flex-1">
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                                        ? "bg_color text-white shadow-lg shadow-blue-100 scale-110"
                                        : isCompleted
                                            ? "bg_color text-white"
                                            : "bg-white border border-gray-100 text-gray-200"
                                    }`}
                            >
                                <Icon size={18} strokeWidth={isActive || isCompleted ? 2.5 : 2} />
                            </div>
                            <div className="mt-4 text-center">
                                <p className={`text-[12px] font-black tracking-tight ${isActive ? "text_color" : isCompleted ? "text-[#1e293b]" : "text-gray-300"
                                    }`}>
                                    {stage.label}
                                </p>
                                <p className={`text-[10px] font-bold ${isActive ? "text_color animate-pulse" : "text-gray-400"
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
