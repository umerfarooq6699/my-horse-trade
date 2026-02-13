"use client";

import React from "react";
import { CreditCard, Landmark, Coins } from "lucide-react";

export default function PaymentMethodTabs({ activeMethod, onMethodChange }) {
    const methods = [
        { id: "card", label: "Credit / Debit Card", icon: CreditCard },
        { id: "bank", label: "Bank Transfer", icon: Landmark },
        { id: "crypto", label: "Crypto (USDC)", icon: Coins },
    ];

    return (
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-8 mb-8">
            {methods.map((method) => {
                const isActive = activeMethod === method.id;
                const Icon = method.icon;

                return (
                    <button
                        key={method.id}
                        onClick={() => onMethodChange(method.id)}
                        className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${isActive
                                ? "bg_color border_color text-white shadow-lg shadow-blue-100"
                                : "bg-white border-gray-100 text-gray-500 hover:border-gray-200 hover:bg-gray-50"
                            }`}
                    >
                        <Icon size={18} strokeWidth={isActive ? 3 : 2} />
                        <span className={`text-sm font-black whitespace-nowrap`}>{method.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
