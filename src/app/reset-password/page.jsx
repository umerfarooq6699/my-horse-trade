"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Lock, ArrowRight, Loader2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, resetPasswordStateAction } from "@/redux/slices/authSlice";
import { useEffect, useState, Suspense } from "react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

// Wrapping in Suspense to avoid Next.js build issues with useSearchParams
function ChangePasswordForm() {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const emailFromParams = searchParams.get("email");

    const { resetPasswordState } = useSelector((state) => state.auth);
    const { loading, error, success } = resetPasswordState || {};
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        if (success) {
            toast.success("Password reset successfully! You can now log in.", {
                position: "top-center",
                toastId: "reset-password-success"
            });
            dispatch(resetPasswordStateAction());
            router.push("/login");
        }

        if (error) {
            const errorMessage = typeof error === 'object' ? Object.values(error).flat().join(', ') : error;
            toast.error(errorMessage || "Failed to reset password!", {
                position: "top-center",
                toastId: "reset-password-error"
            });
            dispatch(resetPasswordStateAction());
        }

        return () => {
            if (dispatch && resetPasswordStateAction) {
                dispatch(resetPasswordStateAction());
            }
        };
    }, [success, error, dispatch, router]);

    const formik = useFormik({
        initialValues: {
            password1: "",
            password2: "",
        },
        validationSchema: Yup.object({
            password1: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("New Password is required"),
            password2: Yup.string()
                .oneOf([Yup.ref("password1"), null], "Passwords must match")
                .required("Confirm Password is required"),
        }),
        onSubmit: async (values) => {
            await dispatch(resetPassword({ 
                password1: values.password1, 
                password2: values.password2 
            }));
        }
    });

    return (
        <div className="flex-1 flex items-center justify-center w-full">
            <div className="bg-white w-full max-w-[500px] rounded-[32px] p-4 md:p-6 sm:p-10 shadow-2xl shadow-blue-100/50 border border-gray-50 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                    <Lock className="text_color" size={32} />
                </div>

                <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-1.5 md:mb-3">Create New Password</h1>
                <p className="text-gray-400 text-xs sm:text-sm mb-5 md:mb-7 leading-relaxed px-4">
                    Your new password must be different from previous used passwords.
                </p>

                <form onSubmit={formik.handleSubmit} className="w-full space-y-5">
                    
                    {/* New Password */}
                    <div className="space-y-1.5 text-left">
                        <label className="text-sm font-bold text-gray-700 ml-1">New Password</label>
                        <div className="relative group">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password1"
                                placeholder="Enter new password"
                                className={`w-full pl-11 pr-11 py-3 mt-1 bg-gray-50/50 border rounded-[10px] focus:outline-none transition-all text-sm ${formik.touched.password1 && formik.errors.password1 ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                    }`}
                                {...formik.getFieldProps("password1")}
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text_color transition-colors mt-0.5">
                                <Lock size={18} />
                            </div>
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors mt-0.5"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {formik.touched.password1 && formik.errors.password1 && (
                            <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors.password1}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-1.5 text-left">
                        <label className="text-sm font-bold text-gray-700 ml-1">Confirm Password</label>
                        <div className="relative group">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="password2"
                                placeholder="Confirm new password"
                                className={`w-full pl-11 pr-11 py-3 mt-1 bg-gray-50/50 border rounded-[10px] focus:outline-none transition-all text-sm ${formik.touched.password2 && formik.errors.password2 ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                    }`}
                                {...formik.getFieldProps("password2")}
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text_color transition-colors mt-0.5">
                                <Lock size={18} />
                            </div>
                            <button 
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors mt-0.5"
                            >
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {formik.touched.password2 && formik.errors.password2 && (
                            <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors.password2}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={formik.isSubmitting || loading}
                        className={`w-full flex items-center justify-center gap-2 bg_color text-white py-3.5 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-100 transform active:scale-[0.98] mt-4 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Resetting...
                            </>
                        ) : (
                            "Reset Password"
                        )}
                    </button>
                </form>

                <div className="mt-8 flex items-center gap-2">
                    <p className="text-gray-400 text-sm font-medium">Back to</p>
                    <Link href="/login" className="text_color font-bold text-sm hover:underline flex items-center gap-1">
                         Log In <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function ChangePasswordPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] flex flex-col items-center justify-center p-4 sm:p-6 pt-[89px] md:pt-[87px] bg-gradient-to-tr from-[#f8faff] via-white to-[#fdfdfd]">
            <Suspense fallback={<div className="h-full flex items-center justify-center w-full"><Loader2 className="animate-spin text_color w-10 h-10" /></div>}>
                <ChangePasswordForm />
            </Suspense>
        </main>
    );
}
