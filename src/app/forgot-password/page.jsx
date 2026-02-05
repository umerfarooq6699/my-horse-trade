"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
        }),
        onSubmit: (values) => {
            console.log("Reset link requested for:", values.email);
            alert("Reset link sent to your email (simulation)");
        }
    });

    return (
        <main className="min-h-screen bg-[#FDFDFD] flex flex-col items-center justify-center p-4 sm:p-6 pt-[74px] bg-gradient-to-tr from-[#f8faff] via-white to-[#fdfdfd]">
            <div className="flex-1 flex items-center justify-center w-full">
                <div className="bg-white w-full max-w-[500px] rounded-[32px] p-6 sm:p-10 shadow-2xl shadow-blue-100/50 border border-gray-50 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-8">
                        <RotateCcw className="text-blue-600" size={32} />
                    </div>

                    <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-3">Reset Password</h1>
                    <p className="text-gray-400 text-xs sm:text-sm mb-10 leading-relaxed px-4">
                        Don't worry, it happens. Enter the email associated with your account and we'll send you a recovery link.
                    </p>

                    <form onSubmit={formik.handleSubmit} className="w-full space-y-8">
                        <div className="space-y-2 text-left">
                            <label className="text-sm font-bold text-[#0F172A] ml-1">Email Address</label>
                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder=""
                                    className={`w-full pl-12 pr-5 py-4 bg-gray-50/50 border rounded-2xl focus:outline-none transition-all text-sm ${formik.touched.email && formik.errors.email ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                        }`}
                                    {...formik.getFieldProps("email")}
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center">
                                    <Mail size={20} />
                                </div>
                            </div>
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors.email}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className="w-full bg-[#1d63ed] text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 transform active:scale-[0.98]"
                        >
                            Send Reset Link
                        </button>
                    </form>

                    <div className="mt-12 flex items-center gap-2">
                        <p className="text-gray-400 text-sm font-medium">Remember your password?</p>
                        <Link href="/login" className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1">
                            Log In <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
