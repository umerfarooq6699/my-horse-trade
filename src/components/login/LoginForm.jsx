"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Eye, EyeOff, User } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            identifier: "",
            password: "",
            rememberMe: false
        },
        validationSchema: Yup.object({
            identifier: Yup.string().required("Email or Username is required"),
            password: Yup.string().required("Password is required")
        }),
        onSubmit: (values) => {
            console.log("Login submitted:", values);
            alert("Login successful (simulation)");
        }
    });

    return (
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-8">
            <div className="mb-8 px-2 sm:px-0">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2 leading-tight">
                    Welcome back to the <br /> future.
                </h1>
                <p className="text-gray-500 text-xs sm:text-sm font-medium">Log in to access your MyHorseTrade account.</p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
                {/* Identifier (Email/Username) */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email or Username</label>
                    <div className="relative group">
                        <input
                            type="text"
                            name="identifier"
                            placeholder=""
                            className={`w-full pl-5 pr-5 py-3.5 bg-gray-50/50 border rounded-xl focus:outline-none transition-all text-sm ${formik.touched.identifier && formik.errors.identifier ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                }`}
                            {...formik.getFieldProps("identifier")}
                        />
                    </div>
                    {formik.touched.identifier && formik.errors.identifier && (
                        <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors.identifier}</p>
                    )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                    <div className="relative group">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder=""
                            className={`w-full pl-5 pr-12 py-3.5 bg-gray-50/50 border rounded-xl focus:outline-none transition-all text-sm ${formik.touched.password && formik.errors.password ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                }`}
                            {...formik.getFieldProps("password")}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors.password}</p>
                    )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                            {...formik.getFieldProps("rememberMe")}
                        />
                        <label htmlFor="rememberMe" className="text-xs text-gray-400 font-medium cursor-pointer">
                            Remember me
                        </label>
                    </div>
                    <Link href="/forgot-password" className="text-[#2563EB] text-xs font-medium hover:underline">
                        Forgot Password?
                    </Link>
                </div>

                <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#1d63ed] text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md transform active:scale-[0.98]"
                >
                    Log In
                </button>

                <p className="text-center text-sm text-gray-500 font-medium pt-2">
                    New to MyHorseTrade? <Link href="/signup" className="text-[#2563EB] font-bold hover:underline">Create an account</Link>
                </p>
            </form>
        </div>
    );
}
