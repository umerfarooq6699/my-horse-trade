"use client";
import { Suspense } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import MarketingEssentialsSection from "@/components/sell-horse/MarketingEssentialsSection";
import InclusionsTermsSection from "@/components/sell-horse/InclusionsTermsSection";
import { useDispatch, useSelector } from "react-redux";
import { horseListingStep4, resetHorseStep4, fetchHorsePrefillData } from "@/redux/slices/horseSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const CommercialsSchema = Yup.object().shape({
    headline: Yup.string()
        .max(100, "Headline cannot exceed 100 characters")
        .required("Headline is required"),
    promotional_tags: Yup.array(),
    inclusions: Yup.array(),
    inclusions_and_terms: Yup.array(),
    disclaimers: Yup.string().max(2000, "Disclaimers cannot exceed 2000 characters")
});

function CommercialsPageContent() {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const horseIdFromUrl = searchParams.get("horse_id");

    const { horseStep4, horseStep1, currentListing, loadingCurrentListing } = useSelector((state) => state.horse);
    const { loading, error, success } = horseStep4;
    const horseIdFromState = horseStep1.horseId;
    const effectiveHorseId = horseIdFromUrl || horseIdFromState;

    // Fetch horse data if editing
    useEffect(() => {
        if (horseIdFromUrl) {
            dispatch(fetchHorsePrefillData(horseIdFromUrl));
        }
    }, [horseIdFromUrl, dispatch]);

    useEffect(() => {
        if (success) {
            toast.success("Listing published successfully!", {
                position: "top-center",
                toastId: "horse-step4-success"
            });
            dispatch(resetHorseStep4());
            // Redirect to profile or a dashboard where they can see their listings
            router.push("/profile/my-horse");
        }

        if (error) {
            const errorMessage = typeof error === 'object' ? Object.values(error).flat().join(', ') : error;
            toast.error(errorMessage || "Failed to finalize listing!", {
                position: "top-center",
                toastId: "horse-step4-error"
            });
            dispatch(resetHorseStep4());
        }

        return () => {
            dispatch(resetHorseStep4());
        };
    }, [success, error, dispatch, router]);

    const formik = useFormik({
        initialValues: {
            headline: "",
            promotional_tags: [],
            inclusions: [],
            inclusions_and_terms: [],
            disclaimers: ""
        },
        validationSchema: CommercialsSchema,
        onSubmit: async (values) => {
                        const payload = {
                horse_id: effectiveHorseId,
                ...values
            };
            await dispatch(horseListingStep4(payload));
        },
    });

    // Pre-fill form values when currentListing is fetched
    useEffect(() => {
        if (currentListing) {
            const data = currentListing.listing_step4 || currentListing;
                        formik.setValues({
                headline: data.headline || data.title || data.name || "",
                promotional_tags: Array.isArray(data.promotional_tags) ? data.promotional_tags : [],
                inclusions: Array.isArray(data.inclusions) ? data.inclusions : [],
                inclusions_and_terms: Array.isArray(data.inclusions_and_terms) ? data.inclusions_and_terms : [],
                disclaimers: data.disclaimers || ""
            });
        }
    }, [currentListing]);

    const handlePublish = async () => {
                                await formik.submitForm();
    };

    if (loadingCurrentListing) {
        return (
            <SellHorseLayout currentStep={4} loading={true}>
                <div className="flex items-center justify-center min-h-[400px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1E293B]"></div>
                </div>
            </SellHorseLayout>
        );
    }

    return (
        <SellHorseLayout
            currentStep={4}
            nextLink="#"
            backLink={`/sell-horse/narrative${effectiveHorseId ? `?horse_id=${effectiveHorseId}` : ""}`}
            onSaveDraft={formik.submitForm}
            onNext={handlePublish}
            loading={loading}
        >
            <div className="flex flex-col gap-2 mb-4 md:mb-9">
                <h1 className="text-xl md:text-4xl font-[600] text-[#1e293b] uppercase tracking-tight">Commercials</h1>
                <p className="text-sm font-medium text-gray-600">Finalize your listing with promotional details and sales terms.</p>
            </div>

            <div className="flex flex-col gap-8">
                <MarketingEssentialsSection formik={formik} />
                <InclusionsTermsSection formik={formik} />
            </div>
        </SellHorseLayout>
    );
}

export default function CommercialsPage() {
    return (
        <Suspense fallback={null}>
            <CommercialsPageContent />
        </Suspense>
    );
}
