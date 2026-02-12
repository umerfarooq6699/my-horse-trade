"use client";

import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import MarketingEssentialsSection from "@/components/sell-horse/MarketingEssentialsSection";
import InclusionsTermsSection from "@/components/sell-horse/InclusionsTermsSection";

export default function CommercialsPage() {
    return (
        <SellHorseLayout
            currentStep={4}
            nextLink="#"
            backLink="/sell-horse/narrative"
        >
            <div className="flex flex-col gap-2 mb-12">
                <h1 className="text-4xl font-bold text-[#1e293b] uppercase tracking-tight">Commercials</h1>
                <p className="text-sm font-medium text-gray-600">Finalize your listing with promotional details and sales terms.</p>
            </div>

            <div className="flex flex-col gap-8">
                <MarketingEssentialsSection />
                <InclusionsTermsSection />
            </div>
        </SellHorseLayout>
    );
}
