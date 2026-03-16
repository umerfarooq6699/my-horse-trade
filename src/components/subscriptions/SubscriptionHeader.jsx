"use client";

import { useState } from "react";

export default function SubscriptionHeader({ billingCycle, setBillingCycle }) {
    return (
        <section className="bg-white text-center flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-2 sm:mb-4">
                Upgrade Your <span className="text_color">Stable</span>
            </h1>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mb-4 sm:mb-6 px-2 leading-relaxed">
                Scale your sales with professional tools designed for the modern equestrian market. Choose the plan that fits your ambitions.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center bg-blue-50/50 p-1 rounded-2xl border border-blue-100/50 mb-4 sm:mb-9 w-full max-w-[320px] sm:max-w-none sm:w-auto">
                <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${billingCycle === "monthly"
                        ? "bg-white text_color shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Monthly Billing
                </button>
                <div className="flex-1 sm:flex-none flex items-center justify-center gap-2">
                    <button
                        onClick={() => setBillingCycle("yearly")}
                        className={`w-full sm:w-auto px-4 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${billingCycle === "yearly"
                            ? "bg-white text_color shadow-sm"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        Yearly Billing
                    </button>
                    <span className="hidden sm:inline-block bg-green-100 text-green-700 text-[10px] sm:text-sm font-bold px-3 py-1 rounded-full mr-2">
                        SAVE 20%
                    </span>
                </div>
            </div>
        </section>
    );
}
