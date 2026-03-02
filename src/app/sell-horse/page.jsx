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
            <div className="flex flex-col gap-2 mb-5 md:mb-9">
                <h1 className="text-xl md:text-4xl font-[700] md:font-[600] text-black uppercase tracking-tight">List Your Asset</h1>
                <p className="mobile_para">Create a new premium listing. Reach global buyers instantly.</p>
            </div>

            <div className="flex flex-col gap-5 md:gap-2">
                <IdentitySection />
                <MetricsSection />
                <AppearanceSection />
                <SaleMethodSection />
            </div>
        </SellHorseLayout>
    );
}
