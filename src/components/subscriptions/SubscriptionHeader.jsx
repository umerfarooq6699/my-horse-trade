"use client";

import { useState } from "react";

export default function SubscriptionHeader() {
    const [billingCycle, setBillingCycle] = useState("monthly");

    return (
        <section className="bg-white text-center flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0F172A] mb-4">
                Upgrade Your <span className="text_color">Stable</span>
            </h1>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mb-12 px-2 leading-relaxed">
                Scale your sales with professional tools designed for the modern equestrian market. Choose the plan that fits your ambitions.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center bg-blue-50/50 p-1.5 rounded-2xl border border-blue-100/50 mb-16">
                <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${billingCycle === "monthly"
                        ? "bg-white text_color shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Monthly Billing
                </button>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <button
                        onClick={() => setBillingCycle("yearly")}
                        className={`px-6 sm:px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${billingCycle === "yearly"
                            ? "bg-white text_color shadow-sm"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        Yearly Billing
                    </button>
                    <span className="bg-green-100 text-green-700 text-[10px] sm:text-sm font-bold px-3 py-1 rounded-full mr-2">
                        SAVE 20%
                    </span>
                </div>
            </div>
        </section>
    );
}
