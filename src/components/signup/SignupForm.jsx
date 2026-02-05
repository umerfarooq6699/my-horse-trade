"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { User, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullName: "",
            emailAddress: "",
            password: "",
            confirmPassword: "",
            agreeTerms: false
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Full Name is required"),
            emailAddress: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
            agreeTerms: Yup.boolean().oneOf([true], "You must agree to the terms")
        }),
        onSubmit: (values) => {
            console.log("Signup submitted:", values);
            alert("Account created successfully (simulation)");
        }
    });

    return (
        <div className="w-full max-w-lg mx-auto py-4 px-6 lg:px-0 h-full flex flex-col justify-center">
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col max-h-[90vh] lg:max-h-[85vh]">
                <form onSubmit={formik.handleSubmit} className="flex flex-col flex-1 overflow-hidden">
                    {/* Scrollable Content Area (Header + Fields) */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {/* Header Area (Inside Scroll) */}
                        <div className="p-5 sm:p-6 lg:p-8 pb-0">
                            <div className="mb-6 text-center lg:text-left">
                                <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-1 leading-tight">Create Account</h2>
                                <p className="text-gray-500 text-[10px] sm:text-xs font-medium">Enter your details to access the platform.</p>
                            </div>

                            {/* Social Logins */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <button type="button" className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-semibold text-[#0F172A] text-sm">
                                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 grayscale opacity-70" />
                                    Google
                                </button>
                                <button type="button" className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-semibold text-[#0F172A] text-sm">
                                    <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-4 h-4 grayscale opacity-70" />
                                    Apple
                                </button>
                            </div>

                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-100"></div>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Or continue with</span>
                                </div>
                            </div>
                        </div>

                        {/* Fields (Inside Scroll) */}
                        <div className="px-5 sm:px-6 lg:p-8 pt-0 space-y-4">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        className={`w-full pl-11 pr-4 py-3 bg-gray-50/50 border rounded-xl focus:outline-none transition-all text-sm ${formik.touched.fullName && formik.errors.fullName ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                            }`}
                                        {...formik.getFieldProps("fullName")}
                                    />
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                                        <User size={20} />
                                    </div>
                                </div>
                                {formik.touched.fullName && formik.errors.fullName && (
                                    <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors.fullName}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        name="emailAddress"
                                        placeholder="your@email.com"
                                        className={`w-full pl-11 pr-4 py-3 bg-gray-50/50 border rounded-xl focus:outline-none transition-all text-sm ${formik.touched.emailAddress && formik.errors.emailAddress ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                            }`}
                                        {...formik.getFieldProps("emailAddress")}
                                    />
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                                        <Mail size={20} />
                                    </div>
                                </div>
                                {formik.touched.emailAddress && formik.errors.emailAddress && (
                                    <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors.emailAddress}</p>
                                )}
                            </div>

                            {/* Password Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="••••••••"
                                            className={`w-full pl-4 pr-11 py-3 bg-gray-50/50 border rounded-xl focus:outline-none transition-all text-sm ${formik.touched.password && formik.errors.password ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                                }`}
                                            {...formik.getFieldProps("password")}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                    {formik.touched.password && formik.errors.password && (
                                        <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors.password}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Confirm</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="••••••••"
                                        className={`w-full px-4 py-3 bg-gray-50/50 border rounded-xl focus:outline-none transition-all text-sm ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                            }`}
                                        {...formik.getFieldProps("confirmPassword")}
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                        <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors.confirmPassword}</p>
                                    )}
                                </div>
                            </div>

                            {/* Agree Terms */}
                            <div className="flex items-center gap-3 py-2">
                                <input
                                    type="checkbox"
                                    id="agreeTerms"
                                    name="agreeTerms"
                                    className="w-5 h-5 rounded-md border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                    {...formik.getFieldProps("agreeTerms")}
                                />
                                <label htmlFor="agreeTerms" className="text-sm text-gray-500 font-medium cursor-pointer">
                                    I agree to the <Link href="#" className="text-[#2563EB] hover:underline">Terms of Service</Link> and <Link href="#" className="text-[#2563EB] hover:underline">Privacy Policy</Link>.
                                </label>
                            </div>
                            {formik.touched.agreeTerms && formik.errors.agreeTerms && (
                                <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors.agreeTerms}</p>
                            )}
                        </div>
                    </div>

                    {/* Footer - Fixed */}
                    <div className="p-5 sm:p-6 lg:p-8 pt-4 bg-white border-t border-gray-100 mt-auto">
                        <button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className="w-full flex items-center justify-center gap-2 bg-[#2563EB] text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 transform active:scale-[0.98]"
                        >
                            Create Account <ArrowRight size={20} />
                        </button>

                        <p className="text-center text-sm text-gray-500 font-medium mt-4">
                            Already have an account? <Link href="/login" className="text-[#2563EB] font-bold hover:underline">Sign In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
