"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Eye, EyeOff, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetLoginState } from "@/redux/slices/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/utils/urls";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const { login, isAuthenticated } = useSelector((state) => state.auth);
    const { loading, error, success } = login;

    useEffect(() => {
        if (success) {
            dispatch(resetLoginState());
            
            setTimeout(() => {
                router.push(APP_ROUTES.HOME);
            }, 100);
        }

        if (error) {
            const errorMessage = typeof error === 'object' ? Object.values(error).flat().join(', ') : error;
            toast.error(errorMessage || "Login failed!", {
                position: "top-center",
                toastId: "login-error"
            });
            dispatch(resetLoginState());
        }

        return () => {
            dispatch(resetLoginState());
        };
    }, [success, error, router, dispatch]);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().required("Password is required")
        }),
        onSubmit: async (values) => {
            await dispatch(loginUser({
                email: values.email,
                password: values.password
            }));
        }
    });

    const inputs = [
        {
            name: "email",
            label: "Email Address",
            placeholder: "Enter your email",
            type: "email",
            icon: <Mail size={18} />
        },
        {
            name: "password",
            label: "Password",
            placeholder: "Enter password",
            type: "password",
            isPassword: true
        }
    ];

    return (
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 sm:py-8">
            <div className="mb-8 px-1 sm:px-0">
                <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-1 leading-tight">
                    Welcome back to the future.
                </h1>
                <p className="text-gray-500 text-xs sm:text-sm font-medium">Log in to access your MyHorseTrade account.</p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-5">
                {inputs.map((input) => (
                    <div key={input.name} className="space-y-1.5">
                        <label className="text-sm font-bold text-gray-700 ml-1">{input.label}</label>
                        <div className="relative group">
                            <input
                                type={input.isPassword ? (showPassword ? "text" : "password") : input.type}
                                name={input.name}
                                placeholder={input.placeholder}
                                className={`w-full ${input.icon ? "pl-11" : "pl-4"} pr-11 py-2.5 mt-1 bg-gray-50/50 border rounded-[10px] focus:outline-none transition-all text-sm ${formik.touched[input.name] && formik.errors[input.name] ? "border-red-300 bg-red-50/10" : "border-gray-100 focus:border-blue-300 focus:bg-white"
                                    }`}
                                {...formik.getFieldProps(input.name)}
                            />
                            {input.icon && (
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text_color transition-colors mt-0.5">
                                    {input.icon}
                                </div>
                            )}
                            {input.isPassword && (
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text_color transition-colors mt-0.5"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            )}
                        </div>
                        {formik.touched[input.name] && formik.errors[input.name] && (
                            <p className="text-red-500 text-xs ml-1 font-medium">{formik.errors[input.name]}</p>
                        )}
                    </div>
                ))}

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="w-4 h-4 rounded border-gray-300 text_color focus:ring_color cursor-pointer"
                            {...formik.getFieldProps("rememberMe")}
                        />
                        <label htmlFor="rememberMe" className="text-xs text-gray-500 font-medium cursor-pointer">
                            Remember me
                        </label>
                    </div>
                    <Link href="/forgot-password" size="sm" className="text_color text-xs font-bold hover:underline">
                        Forgot Password?
                    </Link>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={formik.isSubmitting || loading}
                        className={`w-full flex items-center justify-center gap-2 bg_color text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-100 transform active:scale-[0.98] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Logging in...
                            </>
                        ) : (
                            "Log In"
                        )}
                    </button>
                </div>

                <p className="text-center text-sm text-gray-500 font-medium pt-4">
                    New to MyHorseTrade? <Link href={APP_ROUTES.SIGNUP} className="text_color font-bold hover:underline">Create an account</Link>
                </p>
            </form>
        </div>
    );
}
