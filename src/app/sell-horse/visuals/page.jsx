"use client";

import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import PhotoGallerySection from "@/components/sell-horse/PhotoGallerySection";
import VideoEvidenceSection from "@/components/sell-horse/VideoEvidenceSection";
import DocumentsSection from "@/components/sell-horse/DocumentsSection";

export default function VisualEvidencePage() {
    return (
        <SellHorseLayout
            currentStep={2}
            nextLink="/sell-horse/narrative"
            backLink="/sell-horse"
        >
            <div className="flex flex-col gap-2 mb-5 md:mb-9">
                <h1 className="text-xl md:text-4xl font-[600] text-[#1e293b] uppercase tracking-tight">Visual Evidence</h1>
                <p className="text-sm font-medium text-gray-400">Showcase your horse with high-definition imagery and video.</p>
            </div>

            <div className="flex flex-col gap-8">
                <PhotoGallerySection />
                <VideoEvidenceSection />
                <DocumentsSection />
            </div>
        </SellHorseLayout>
    );
}
