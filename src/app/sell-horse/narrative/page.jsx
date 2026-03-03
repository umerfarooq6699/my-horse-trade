"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import NarrativeSection from "@/components/sell-horse/NarrativeSection";
import QuickTopicsSection from "@/components/sell-horse/QuickTopicsSection";

const NarrativeSchema = Yup.object().shape({
    description: Yup.string()
        .min(100, "Description must be at least 100 characters")
        .max(5000, "Description cannot exceed 5000 characters")
        .required("Description is required"),
    quick_topics: Yup.array()
});

export default function NarrativePage() {
    const formik = useFormik({
        initialValues: {
            description: "",
            quick_topics: []
        },
        validationSchema: NarrativeSchema,
        onSubmit: (values) => {
            console.log("Narrative Data:", values);
        },
    });

    return (
        <SellHorseLayout
            currentStep={3}
            nextLink="/sell-horse/commercials"
            backLink="/sell-horse/visuals"
            onSaveDraft={formik.submitForm}
        >
            <div className="flex flex-col gap-2 mb-5 md:mb-9">
                <h1 className="text-xl md:text-4xl font-[700] md:font-[600] text-black uppercase tracking-tight">The Narrative</h1>
                <p className="text-sm font-medium text-gray-400">Tell their story. Craft a compelling description to attract the right buyer.</p>
            </div>

            <div className="flex flex-col gap-8">
                <NarrativeSection formik={formik} />
                <QuickTopicsSection formik={formik} />
            </div>
        </SellHorseLayout>
    );
}
