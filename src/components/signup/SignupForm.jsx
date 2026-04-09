"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { User as UserIcon, Mail, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, resetSignupState } from "@/redux/slices/authSlice";
import { APP_ROUTES } from "@/utils/urls";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const { signupData, isAuthenticated } = useSelector((state) => state.auth);
    const { loading, error, success } = signupData;


    useEffect(() => {
        if (success) {
            toast.success(typeof success === "string" ? success : "Account created successfully!", {
                position: "top-center",
                toastId: "signup-success"
            });
            dispatch(resetSignupState());

            setTimeout(() => {
                router.push(APP_ROUTES.LOGIN);
            }, 2000);
        }

        if (error) {
            const errorMessage = typeof error === 'object' ? Object.values(error).flat().join(', ') : error;
            toast.error(errorMessage || "Signup failed!", {
                position: "top-center",
                toastId: "signup-error"
            });
            dispatch(resetSignupState());
        }

        return () => {
            dispatch(resetSignupState());
        };
    }, [success, error, router, dispatch]);

    const formik = useFormik({
        initialValues: {
            fullName: "",
            emailAddress: "",
            password: "",
            confirm_password: "",
            agreeTerms: false
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Full Name is required"),
            emailAddress: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
            agreeTerms: Yup.boolean().oneOf([true], "You must agree to the terms")
        }),
        onSubmit: async (values) => {
            const signupPayload = {
                name: values.fullName,
                email: values.emailAddress,
                password: values.password,
                confirm_password: values.confirm_password,
                user_type: "USER" // Default user type
            };
            await dispatch(registerUser(signupPayload));
        }
    });


    const inputs = [
        {
            name: "fullName",
            label: "Full Name",
            placeholder: "Enter your full name",
            type: "text",
            icon: <UserIcon size={20} />
        },
        {
            name: "emailAddress",
            label: "Email Address",
            placeholder: "your@email.com",
            type: "email",
            icon: <Mail size={20} />
        }
    ];

    const passwordInputs = [
        {
            name: "password",
            label: "Password",
            placeholder: "••••••••",
            isPassword: true
        },
        {
            name: "confirm_password",
            label: "Confirm",
            placeholder: "••••••••",
            isPassword: true,
            hideIcon: true
        }
    ];

    return (
        <div className="w-full max-w-lg mx-auto py-4 px-3 md:px-6 lg:px-0 h-full flex flex-col justify-center">
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col max-h-[90vh] lg:max-h-[85vh]">
                <form onSubmit={formik.handleSubmit} className="flex flex-col flex-1 overflow-hidden">
                    {/* Scrollable Content Area (Header + Fields) */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {/* Header Area (Inside Scroll) */}
                        <div className="pt-6 sm:p-6 lg:pb-4 pb-0 px-2">
                            <div className="mb-6 text-center lg:text-left">
                                <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-1 leading-tight">Create Account</h2>
                                <p className="text-gray-500 text-[10px] sm:text-xs font-medium">Enter your details to access the platform.</p>
                            </div>

                            {/* Social Logins */}
                            <div className="grid grid-cols-2 gap-3 mb-5">
                                <button type="button" className="cursor-pointer flex items-center justify-center gap-3 px-6 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-semibold text-[#0F172A] text-sm">
                                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                                    </svg>
                                    Google
                                </button>
                                <button type="button" className="cursor-pointer flex items-center justify-center gap-3 px-6 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-semibold text-[#0F172A] text-sm">
                                    <svg viewBox="0 0 256 315" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.147 63.581-.443 1.218-6.606 22.514-21.726 44.5-13.114 18.983-26.69 37.893-47.886 38.291-20.8 0-27.674-12.8-51.536-12.8-23.863 0-31.544 12.4-51.13 13.2-20.404.793-35.986-20.574-49.207-39.46-27.06-38.69-47.58-109.184-19.682-157.653 13.845-24.033 38.646-39.243 65.522-39.642 20.404-.413 39.643 13.623 52.22 13.623 12.553 0 35.59-16.892 59.943-14.419 10.193.442 38.85 4.104 57.306 31.026-1.488.928-34.116 19.897-33.723 60.154M177.37.001c11.028 1.341 27.674 9.1 35.152 17.892 6.694 7.79 12.684 19.467 10.155 30.9-.387.897-2.345 2.541-3.66 3.01-10.873 1.474-27.423-6.522-35.253-15.82C176.471 28.514 171.196 15.659 177.37 0z" fill="#000000" />
                                    </svg>
                                    Apple
                                </button>
                            </div>

                            <div className="relative mb-2">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-100"></div>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Or continue with</span>
                                </div>
                            </div>
                        </div>

                        {/* Fields (Inside Scroll) */}
                        <div className=" pt-3 px-3 sm:px-6 lg:pb-5 lg:pt-1 space-y-2 md:space-y-4">
                            {inputs.map((input) => (
                                <div key={input.name} className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">{input.label}</label>
                                    <div className="relative group">
                                        <input
                                            type={input.type}
                                            name={input.name}
                                            placeholder={input.placeholder}
                                            className={`w-full pl-11 pr-4 py-2.5 mt-1 bg-gray-50/50 border rounded-[10px] focus:outline-none transition-all text-sm ${formik.touched[input.name] && formik.errors[input.name] ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                                }`}
                                            {...formik.getFieldProps(input.name)}
                                        />
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text_color transition-colors">
                                            {input.icon}
                                        </div>
                                    </div>
                                    {formik.touched[input.name] && formik.errors[input.name] && (
                                        <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors[input.name]}</p>
                                    )}
                                </div>
                            ))}

                            {/* Password Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-6">
                                {passwordInputs.map((input) => (
                                    <div key={input.name} className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">{input.label}</label>
                                        <div className="relative">
                                            <input
                                                type={input.name === "password" ? (showPassword ? "text" : "password") : "password"}
                                                name={input.name}
                                                placeholder={input.placeholder}
                                                className={`w-full ${input.name === "password" ? "pl-4 pr-11" : "px-4"} mt-1 py-2.5 bg-gray-50/50 border rounded-[10px] focus:outline-none transition-all text-sm ${formik.touched[input.name] && formik.errors[input.name] ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                                    }`}
                                                {...formik.getFieldProps(input.name)}
                                            />
                                            {input.name === "password" && (
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text_color transition-colors"
                                                >
                                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                </button>
                                            )}
                                        </div>
                                        {formik.touched[input.name] && formik.errors[input.name] && (
                                            <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors[input.name]}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Agree Terms */}
                            <div className="flex items-center gap-3 py-2">
                                <input
                                    type="checkbox"
                                    id="agreeTerms"
                                    name="agreeTerms"
                                    className="w-5 h-5 rounded-md border-gray-300 text_color focus:ring_color cursor-pointer"
                                    {...formik.getFieldProps("agreeTerms")}
                                />
                                <label htmlFor="agreeTerms" className="text-sm text-gray-500 font-medium cursor-pointer">
                                    I agree to the <Link href={APP_ROUTES.HOME} className="text_color hover:underline">Terms of Service</Link> and <Link href={APP_ROUTES.HOME} className="text_color hover:underline">Privacy Policy</Link>.
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
                            disabled={formik.isSubmitting || loading}
                            className={`w-full flex items-center justify-center gap-2 bg_color text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-100 transform active:scale-[0.98] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    Create Account <ArrowRight size={20} />
                                </>
                            )}
                        </button>

                        <p className="text-center text-sm text-gray-500 font-medium mt-4">
                            Already have an account? <Link href={APP_ROUTES.LOGIN} className="text_color font-bold hover:underline">Sign In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
