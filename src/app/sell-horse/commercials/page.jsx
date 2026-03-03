"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import MarketingEssentialsSection from "@/components/sell-horse/MarketingEssentialsSection";
import InclusionsTermsSection from "@/components/sell-horse/InclusionsTermsSection";

const CommercialsSchema = Yup.object().shape({
    listing_headline: Yup.string()
        .max(100, "Headline cannot exceed 100 characters")
        .required("Headline is required"),
    promotional_tags: Yup.array(),
    "inclusions & terms": Yup.array(),
    special_conditions: Yup.string().max(2000, "Special conditions cannot exceed 2000 characters")
});

export default function CommercialsPage() {
    const formik = useFormik({
        initialValues: {
            "listing_headline": "",
            "promotional_tags": [],
            "inclusions & terms": [],
            "special_conditions": ""
        },
        validationSchema: CommercialsSchema,
        onSubmit: (values) => {
            console.log("Commercials Data:", values);
        },
    });

    return (
        <SellHorseLayout
            currentStep={4}
            nextLink="#"
            backLink="/sell-horse/narrative"
            onSaveDraft={formik.submitForm}
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
