"use client";

import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import NarrativeSection from "@/components/sell-horse/NarrativeSection";
import QuickTopicsSection from "@/components/sell-horse/QuickTopicsSection";

export default function NarrativePage() {
    return (
        <SellHorseLayout
            currentStep={3}
            nextLink="/sell-horse/commercials"
            backLink="/sell-horse/visuals"
        >
            <div className="flex flex-col gap-2 mb-12">
                <h1 className="text-4xl font-bold text-[#1e293b] uppercase tracking-tight">The Narrative</h1>
                <p className="text-sm font-medium text-gray-400">Tell their story. Craft a compelling description to attract the right buyer.</p>
            </div>

            <div className="flex flex-col gap-8">
                <NarrativeSection />
                <QuickTopicsSection />
            </div>
        </SellHorseLayout>
    );
}
