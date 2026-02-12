"use client";

import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import IdentitySection from "@/components/sell-horse/IdentitySection";
import MetricsSection from "@/components/sell-horse/MetricsSection";
import AppearanceSection from "@/components/sell-horse/AppearanceSection";
import SaleMethodSection from "@/components/sell-horse/SaleMethodSection";

export default function SellHorsePage() {
    return (
        <SellHorseLayout
            currentStep={1}
            nextLink="/sell-horse/visuals"
        >
            <div className="flex flex-col gap-2 mb-12">
                <h1 className="text-4xl font-bold text-[#1e293b] uppercase tracking-tight">List Your Asset</h1>
                <p className="text-sm font-medium text-gray-400">Create a new premium listing. Reach global buyers instantly.</p>
            </div>

            <div className="flex flex-col gap-8">
                <IdentitySection />
                <MetricsSection />
                <AppearanceSection />
                <SaleMethodSection />
            </div>
        </SellHorseLayout>
    );
}
