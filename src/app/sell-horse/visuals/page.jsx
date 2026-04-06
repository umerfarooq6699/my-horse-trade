"use client";
import { Suspense } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import PhotoGallerySection from "@/components/sell-horse/PhotoGallerySection";
import VideoEvidenceSection from "@/components/sell-horse/VideoEvidenceSection";
import DocumentsSection from "@/components/sell-horse/DocumentsSection";
import { useDispatch, useSelector } from "react-redux";
import { horseListingStep2, resetHorseStep2 } from "@/redux/slices/horseSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const VisualEvidenceSchema = Yup.object().shape({
    photos: Yup.array().min(0),
    youtube_link: Yup.string().url("Invalid URL").nullable(),
    uploaded_video: Yup.array().min(0),
    document: Yup.array().min(0)
});

function VisualEvidencePageContent() {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const horseIdFromUrl = searchParams.get("horse_id");

    const { horseStep2, horseStep1 } = useSelector((state) => state.horse);
    const { loading, error, success } = horseStep2;
    const horseIdFromState = horseStep1.horseId;
    const effectiveHorseId = horseIdFromUrl || horseIdFromState;
    const [isNextStep, setIsNextStep] = useState(false);

    useEffect(() => {
        if (success) {
            if (isNextStep) {
                router.push(`/sell-horse/narrative?horse_id=${effectiveHorseId}`);
            } else {
                toast.success("Visual evidence saved successfully!", {
                    position: "top-center",
                    toastId: "horse-step2-success"
                });
            }
            dispatch(resetHorseStep2());
            setIsNextStep(false);
        }

        if (error) {
            const errorMessage = typeof error === 'object' ? Object.values(error).flat().join(', ') : error;
            toast.error(errorMessage || "Failed to save visual evidence!", {
                position: "top-center",
                toastId: "horse-step2-error"
            });
            dispatch(resetHorseStep2());
        }

        return () => {
            dispatch(resetHorseStep2());
        };
    }, [success, error, dispatch]);

    const formik = useFormik({
        initialValues: {
            photos: [],
            youtube_link: "",
            uploaded_video: [],
            document: []
        },
        validationSchema: VisualEvidenceSchema,
        onSubmit: async (values) => {
            console.log("Visual Evidence Data:", values);
            
            // Create FormData for file uploads
            const formData = new FormData();
            formData.append("horse_id", effectiveHorseId);
            formData.append("youtube_link", values.youtube_link);

            // Append multiple files for photos
            values.photos.forEach((photo) => {
                if (photo.file) {
                    formData.append("photos", photo.file);
                }
            });

            // Append multiple files for uploaded_video
            values.uploaded_video.forEach((video) => {
                if (video.file) {
                    formData.append("uploaded_video", video.file);
                }
            });

            // Append multiple files for document
            values.document.forEach((doc) => {
                if (doc.file) {
                    formData.append("document", doc.file);
                }
            });

            console.log("Submitting FormData...");
            await dispatch(horseListingStep2(formData));
        },
    });

    const handleNextStep = async () => {
        setIsNextStep(true);
        await formik.submitForm();
    };

    const handleSaveDraft = async () => {
        setIsNextStep(false);
        await formik.submitForm();
    };

    return (
        <SellHorseLayout
            currentStep={2}
            nextLink="/sell-horse/narrative"
            backLink={`/sell-horse?horse_id=${effectiveHorseId}`}
            onSaveDraft={handleSaveDraft}
            onNext={handleNextStep}
            loading={loading}
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

export default function VisualEvidencePage() {
    return (
        <Suspense fallback={null}>
            <VisualEvidencePageContent />
        </Suspense>
    );
}
