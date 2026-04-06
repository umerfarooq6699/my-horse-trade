"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, RotateCcw, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, resetForgotPasswordState } from "@/redux/slices/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ForgotPasswordPage() {
    const dispatch = useDispatch();
    const { forgotPassword } = useSelector((state) => state.auth);
    const { loading, error, success } = forgotPassword;

    useEffect(() => {
        if (success) {
            toast.success(typeof success === "string" ? success : "Reset link sent to your email!", {
                position: "top-center",
                toastId: "forgot-password-success"
            });
            dispatch(resetForgotPasswordState());
        }

        if (error) {
            const errorMessage = typeof error === 'object' ? Object.values(error).flat().join(', ') : error;
            toast.error(errorMessage || "Failed to send reset link!", {
                position: "top-center",
                toastId: "forgot-password-error"
            });
            dispatch(resetForgotPasswordState());
        }

        return () => {
            dispatch(resetForgotPasswordState());
        };
    }, [success, error, dispatch]);

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
        }),
        onSubmit: async (values) => {
            await dispatch(sendOtp({ email: values.email }));
        }
    });

    return (
        <main className="min-h-screen bg-[#FDFDFD] flex flex-col items-center justify-center p-4 sm:p-6 pt-[89px] md:pt-[87px] bg-gradient-to-tr from-[#f8faff] via-white to-[#fdfdfd]">
            <div className="flex-1 flex items-center justify-center w-full">
                <div className="bg-white w-full max-w-[500px] rounded-[32px] p-3 md:p-6 sm:p-10 shadow-2xl shadow-blue-100/50 border border-gray-50 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                        <RotateCcw className="text_color" size={32} />
                    </div>

                    <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-1.5 md:mb-3">Reset Password</h1>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-7 leading-relaxed px-4">
                        Don't worry, it happens. Enter the email associated with your account and we'll send you a recovery link.
                    </p>

                    <form onSubmit={formik.handleSubmit} className="w-full space-y-6">
                        <div className="space-y-2 text-left">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className={`w-full pl-11 pr-5 py-2.5 mt-1 bg-gray-50/50 border rounded-[10px] focus:outline-none transition-all text-sm ${formik.touched.email && formik.errors.email ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                        }`}
                                    {...formik.getFieldProps("email")}
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text_color transition-colors mt-0.5">
                                    <Mail size={20} />
                                </div>
                            </div>
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors.email}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={formik.isSubmitting || loading}
                            className={`w-full flex items-center justify-center gap-2 bg_color text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-100 transform active:scale-[0.98] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Sending...
                                </>
                            ) : (
                                "Send Reset Link"
                            )}
                        </button>
                    </form>

                    <div className="mt-12 flex items-center gap-2">
                        <p className="text-gray-400 text-sm font-medium">Remember your password?</p>
                        <Link href="/login" className="text_color font-bold text-sm hover:underline flex items-center gap-1">
                            Log In <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
