"use client";

import { useState } from "react";
import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import PhotoGallerySection from "@/components/sell-horse/PhotoGallerySection";
import VideoEvidenceSection from "@/components/sell-horse/VideoEvidenceSection";
import DocumentsSection from "@/components/sell-horse/DocumentsSection";

export default function VisualEvidencePage() {
    const [photos, setPhotos] = useState([]);
    const [videoData, setVideoData] = useState({ link: "", uploads: [] });
    const [documents, setDocuments] = useState([]);

    const handleSaveDraft = () => {
        const formData = {
            photos,
            videoData,
            documents
        };
        console.log("Saving Draft - Visual Evidence Data:", formData);
        alert("Draft data logged to console! You can review the object there.");
    };

    return (
        <SellHorseLayout
            currentStep={2}
            nextLink="/sell-horse/narrative"
            backLink="/sell-horse"
            onSaveDraft={handleSaveDraft}
        >
            <div className="flex flex-col gap-2 mb-5 md:mb-9">
                <h1 className="text-xl md:text-4xl font-[700] md:font-[600] text-black uppercase tracking-tight">Visual Evidence</h1>
                <p className="text-sm font-medium text-gray-400">Showcase your horse with high-definition imagery and video.</p>
            </div>

            <div className="flex flex-col gap-8">
                <PhotoGallerySection photos={photos} setPhotos={setPhotos} />
                <VideoEvidenceSection videoData={videoData} setVideoData={setVideoData} />
                <DocumentsSection documents={documents} setDocuments={setDocuments} />
            </div>
        </SellHorseLayout>
    );
}
