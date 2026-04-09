"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import SellHorseLayout from "@/components/sell-horse/SellHorseLayout";
import IdentitySection from "@/components/sell-horse/IdentitySection";
import MetricsSection from "@/components/sell-horse/MetricsSection";
import AppearanceSection from "@/components/sell-horse/AppearanceSection";
import SaleMethodSection from "@/components/sell-horse/SaleMethodSection";
import { useDispatch, useSelector } from "react-redux";
import { horseListingStep1, resetHorseStep1, fetchHorsePrefillData, clearCurrentListing } from "@/redux/slices/horseSlice";
import { useEffect, useState, Suspense } from "react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

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

function SellHorsePageContent() {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const horseIdFromUrl = searchParams.get("horse_id");

    const { horseStep1, currentListing, loadingCurrentListing } = useSelector((state) => state.horse);
    const { loading, error, success, horseId } = horseStep1;
    const [isNextStep, setIsNextStep] = useState(false);

    // Fetch horse data if editing
    console.log(currentListing, "currentListing")
    useEffect(() => {
        if (horseIdFromUrl) {
            dispatch(fetchHorsePrefillData(horseIdFromUrl));
        } else {
            dispatch(clearCurrentListing());
        }
    }, [horseIdFromUrl, dispatch]);

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
            if (horseIdFromUrl) {
                payload.horse_id = horseIdFromUrl;
            }
            await dispatch(horseListingStep1(payload));
        },
    });

    // Populate form values when currentListing is fetched
    useEffect(() => {
        if (currentListing) {
            // Support both nested (from draft) and flat (from marketplace) structures
            const data = currentListing.listing_step1 || currentListing;

            formik.setValues({
                horse_name: data.name || data.horse_name || "",
                breed: data.breed || "",
                gender: data.gender || "",
                age: data.age || 5,
                height: data.height || 16.2,
                color: data.colors || data.color || "Black",
                distinguish_marks: data.distinguishing_marks || data.distinguish_marks || "",
                temperament: Array.isArray(data.temperament) ? data.temperament : [],
                location: data.location || "Pakistan",
                type: (data.sale_method === "fixed_price" || data.type === "Fixed") ? "Fixed" : "Auction",
                price: (data.sale_method === "fixed_price" || data.type === "Fixed") ? data.price : "",
                starting_bid: (data.sale_method === "auction" || data.type === "Auction") ? data.price : "",
                reserve_price: data.reserve_price || "",
                auction_duration: data.auction_duration || 7,
                buy_it_now_price: data.buy_it_now_price || "",
            });
        }
    }, [currentListing]);

    useEffect(() => {
        if (success) {
            const effectiveId = horseId || horseIdFromUrl;
            if (isNextStep && effectiveId) {
                router.push(`/sell-horse/visuals?horse_id=${effectiveId}`);
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
    }, [success, error, dispatch, horseId, horseIdFromUrl, isNextStep, router]);

    const handleNextStep = async () => {
        setIsNextStep(true);
        await formik.submitForm();
    };

    const handleSaveDraft = async () => {
        setIsNextStep(false);
        await formik.submitForm();
    };

    if (loadingCurrentListing) {
        return (
            <SellHorseLayout currentStep={1} loading={true}>
                <div className="flex items-center justify-center min-h-[400px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1E293B]"></div>
                </div>
            </SellHorseLayout>
        );
    }

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
                <p className="mobile_para text-sm md:text-base font-medium text-gray-400">Create a new premium listing. Reach global buyers instantly.</p>
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

export default function SellHorsePage() {
    return (
        <Suspense fallback={null}>
            <SellHorsePageContent />
        </Suspense>
    );
}
