"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import PhotoGallerySection from "@/components/sell-horse/PhotoGallerySection";
import VideoEvidenceSection from "@/components/sell-horse/VideoEvidenceSection";
import DocumentsSection from "@/components/sell-horse/DocumentsSection";

const VisualEvidenceSchema = Yup.object().shape({
    images: Yup.array().min(0),
    video_evidence: Yup.object().shape({
        link: Yup.string().url("Invalid URL").nullable(),
        uploads: Yup.array()
    }),
    document: Yup.array()
});

export default function VisualEvidencePage() {
    const formik = useFormik({
        initialValues: {
            images: [],
            video_evidence: {
                link: "",
                uploads: []
            },
            document: []
        },
        validationSchema: VisualEvidenceSchema,
        onSubmit: (values) => {
            console.log("Visual Evidence Data:", values);
        },
    });

    return (
        <SellHorseLayout
            currentStep={2}
            nextLink="/sell-horse/narrative"
            backLink="/sell-horse"
            onSaveDraft={formik.submitForm}
        >
            <div className="flex flex-col gap-2 mb-5 md:mb-9">
                <h1 className="text-xl md:text-4xl font-[700] md:font-[600] text-black uppercase tracking-tight">Visual Evidence</h1>
                <p className="text-sm font-medium text-gray-400">Showcase your horse with high-definition imagery and video.</p>
            </div>

            <div className="flex flex-col gap-8">
                <PhotoGallerySection formik={formik} />
                <VideoEvidenceSection formik={formik} />
                <DocumentsSection formik={formik} />
            </div>
        </SellHorseLayout>
    );
}
