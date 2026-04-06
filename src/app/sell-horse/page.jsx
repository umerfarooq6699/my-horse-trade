"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import IdentitySection from "@/components/sell-horse/IdentitySection";
import MetricsSection from "@/components/sell-horse/MetricsSection";
import AppearanceSection from "@/components/sell-horse/AppearanceSection";
import SaleMethodSection from "@/components/sell-horse/SaleMethodSection";
import { useDispatch, useSelector } from "react-redux";
import { horseListingStep1, resetHorseStep1 } from "@/redux/slices/horseSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const VitalStatisticsSchema = Yup.object().shape({
    horse_name: Yup.string().required("Horse name is required"),
    breed: Yup.string().required("Breed is required"),
    gender: Yup.string().required("Gender is required"),
    age: Yup.number().min(0).max(30),
    height: Yup.number().min(8).max(20),
    color: Yup.string().required("Color is required"),
    distinguish_marks: Yup.string().max(500, "Distinguishing marks cannot exceed 500 characters"),
    temperament: Yup.array(),
    location: Yup.string().required("Location is required"),
    type: Yup.string().oneOf(["Fixed", "Auction"]).required(),
    price: Yup.number().when("type", {
        is: "Fixed",
        then: (schema) => schema.required("Price is required").min(1, "Price must be at least 1"),
        otherwise: (schema) => schema.optional()
    }),
    starting_bid: Yup.number().when("type", {
        is: "Auction",
        then: (schema) => schema.required("Starting bid is required").min(1, "Starting bid must be at least 1"),
        otherwise: (schema) => schema.optional()
    }),
    reserve_price: Yup.number().optional(),
    auction_duration: Yup.number().when("type", {
        is: "Auction",
        then: (schema) => schema.required("Duration is required"),
        otherwise: (schema) => schema.optional()
    }),
    buy_it_now_price: Yup.number().optional()
});

export default function SellHorsePage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { horseStep1 } = useSelector((state) => state.horse);
    const { loading, error, success, horseId } = horseStep1;
    const [isNextStep, setIsNextStep] = useState(false);

    useEffect(() => {
        if (success) {
            if (isNextStep && horseId) {
                router.push(`/sell-horse/visuals?horse_id=${horseId}`);
            } else {
                toast.success("Draft saved successfully!", {
                    position: "top-center",
                    toastId: "horse-step1-success"
                });
            }
            dispatch(resetHorseStep1());
            setIsNextStep(false);
        }

        if (error) {
            const errorMessage = typeof error === 'object' ? Object.values(error).flat().join(', ') : error;
            toast.error(errorMessage || "Failed to save draft!", {
                position: "top-center",
                toastId: "horse-step1-error"
            });
            dispatch(resetHorseStep1());
        }

        return () => {
            dispatch(resetHorseStep1());
        };
    }, [success, error, dispatch]);

    const formik = useFormik({
        initialValues: {
            horse_name: "",
            breed: "",
            gender: "",
            age: 5,
            height: 16.2,
            color: "Black",
            distinguish_marks: "",
            temperament: [],
            type: "Auction",
            price: "",
            starting_bid: "",
            reserve_price: "",
            auction_duration: 7,
            buy_it_now_price: "",
            location: "Pakistan"
        },
        validationSchema: VitalStatisticsSchema,
        onSubmit: async (values) => {
            console.log("Form submitted with values:", values);
            const payload = {
                name: values.horse_name,
                breed: values.breed,
                gender: values.gender,
                age: values.age,
                height: values.height,
                colors: values.color,
                distinguishing_marks: values.distinguish_marks,
                temperament: values.temperament,
                location: values.location,
                sale_method: values.type.toLowerCase() === "fixed" ? "fixed_price" : "auction",
                price: values.type.toLowerCase() === "fixed" ? values.price : values.starting_bid
            };
            console.log("Constructed payload:", payload);
            await dispatch(horseListingStep1(payload));
        },
    });

    // Log formik errors to debug why onSubmit might not be firing
    useEffect(() => {
        if (Object.keys(formik.errors).length > 0 && formik.isSubmitting) {
            console.log("Formik Validation Errors:", formik.errors);
        }
    }, [formik.errors, formik.isSubmitting]);

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
            currentStep={1}
            nextLink="/sell-horse/visuals"
            onSaveDraft={handleSaveDraft}
            onNext={handleNextStep}
            loading={loading}
        >
            <div className="flex flex-col gap-2 mb-5 md:mb-9">
                <h1 className="text-xl md:text-4xl font-[700] md:font-[600] text-black uppercase tracking-tight">List Your Asset</h1>
                <p className="mobile_para">Create a new premium listing. Reach global buyers instantly.</p>
            </div>

            <div className="flex flex-col gap-5 md:gap-2">
                <IdentitySection formik={formik} />
                <MetricsSection formik={formik} />
                <AppearanceSection formik={formik} />
                <SaleMethodSection formik={formik} />
            </div>
        </SellHorseLayout>
    );
}
