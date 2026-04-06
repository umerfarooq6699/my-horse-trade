"use client";
import { Suspense } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import NarrativeSection from "@/components/sell-horse/NarrativeSection";
import QuickTopicsSection from "@/components/sell-horse/QuickTopicsSection";
import DisciplinesSection from "@/components/sell-horse/DisciplinesSection";
import { useDispatch, useSelector } from "react-redux";
import { horseListingStep3, resetHorseStep3 } from "@/redux/slices/horseSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const NarrativeSchema = Yup.object().shape({
    description: Yup.string()
        .min(100, "Description must be at least 100 characters")
        .max(5000, "Description cannot exceed 5000 characters")
        .required("Description is required"),
    quick_topics: Yup.array(),
    disciplines: Yup.array().min(1, "Select at least one discipline")
});

function NarrativePageContent() {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const horseIdFromUrl = searchParams.get("horse_id");
    
    const { horseStep3, horseStep1 } = useSelector((state) => state.horse);
    const { loading, error, success } = horseStep3;
    const horseIdFromState = horseStep1.horseId;
    const effectiveHorseId = horseIdFromUrl || horseIdFromState;
    const [isNextStep, setIsNextStep] = useState(false);

    useEffect(() => {
        if (success) {
            if (isNextStep) {
                router.push(`/sell-horse/commercials?horse_id=${effectiveHorseId}`);
            } else {
                toast.success("Narrative saved successfully!", {
                    position: "top-center",
                    toastId: "horse-step3-success"
                });
            }
            dispatch(resetHorseStep3());
            setIsNextStep(false);
        }

        if (error) {
            const errorMessage = typeof error === 'object' ? Object.values(error).flat().join(', ') : error;
            toast.error(errorMessage || "Failed to save narrative!", {
                position: "top-center",
                toastId: "horse-step3-error"
            });
            dispatch(resetHorseStep3());
        }

        return () => {
            dispatch(resetHorseStep3());
        };
    }, [success, error, dispatch]);

    const formik = useFormik({
        initialValues: {
            description: "",
            quick_topics: [],
            disciplines: []
        },
        validationSchema: NarrativeSchema,
        onSubmit: async (values) => {
            console.log("Narrative Data:", values);
            const payload = {
                horse_id: effectiveHorseId,
                description: values.description,
                quick_topics: values.quick_topics,
                disciplines: values.disciplines
            };
            await dispatch(horseListingStep3(payload));
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
            currentStep={3}
            nextLink={`/sell-horse/commercials${effectiveHorseId ? `?horse_id=${effectiveHorseId}` : ""}`}
            backLink={`/sell-horse/visuals${effectiveHorseId ? `?horse_id=${effectiveHorseId}` : ""}`}
            onSaveDraft={handleSaveDraft}
            onNext={handleNextStep}
            loading={loading}
        >
            <div className="flex flex-col gap-2 mb-5 md:mb-9">
                <h1 className="text-xl md:text-4xl font-[700] md:font-[600] text-black uppercase tracking-tight">The Narrative</h1>
                <p className="text-sm font-medium text-gray-400">Tell their story. Craft a compelling description to attract the right buyer.</p>
            </div>

            <div className="flex flex-col gap-8">
                <DisciplinesSection formik={formik} />
                <NarrativeSection formik={formik} />
                <QuickTopicsSection formik={formik} />
            </div>
        </SellHorseLayout>
    );
}

export default function NarrativePage() {
    return (
        <Suspense fallback={null}>
            <NarrativePageContent />
        </Suspense>
    );
}
