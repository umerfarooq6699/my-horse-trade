"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, RotateCcw, ArrowRight, Loader2, KeyRound } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, resendOtp, resetForgotPasswordState, verifyOtp, resetVerifyOtpState } from "@/redux/slices/authSlice";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { forgotPassword, verifyOtpState } = useSelector((state) => state.auth);
    const { loading, error, success } = forgotPassword;
    const [step, setStep] = useState('email');
    const [savedEmail, setSavedEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (success) {
            toast.success(typeof success === "string" ? success : "Reset link/OTP sent to your email!", {
                position: "top-center",
                toastId: "forgot-password-success"
            });
            setStep('otp');
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

    useEffect(() => {
        if (verifyOtpState?.success) {
            toast.success("OTP verified successfully!", {
                position: "top-center",
                toastId: "verify-otp-success"
            });
            dispatch(resetVerifyOtpState());
            router.push(`/reset-password?email=${encodeURIComponent(savedEmail)}`); // Adjust next page as needed
        }

        if (verifyOtpState?.error) {
            const errorMessage = typeof verifyOtpState.error === 'object' ? Object.values(verifyOtpState.error).flat().join(', ') : verifyOtpState.error;
            toast.error(errorMessage || "Invalid OTP!", {
                position: "top-center",
                toastId: "verify-otp-error"
            });
            dispatch(resetVerifyOtpState());
        }
    }, [verifyOtpState?.success, verifyOtpState?.error, dispatch, router, savedEmail]);

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
        }),
        onSubmit: async (values) => {
            setSavedEmail(values.email);
            // In a real flow, checking if API expects just email.
            await dispatch(sendOtp({ email: values.email }));
        }
    });

    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to next input
        if (value !== '' && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (index, e) => {
        // Move focus to previous input on backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        const otpCode = otp.join('');
        if (otpCode.length !== 4) {
            toast.warn("Please enter a 4-digit OTP code");
            return;
        }
        await dispatch(verifyOtp({ otp: otpCode }));
    };

    return (
        <main className="min-h-screen bg-[#FDFDFD] flex flex-col items-center justify-center p-4 sm:p-6 pt-[89px] md:pt-[87px] bg-gradient-to-tr from-[#f8faff] via-white to-[#fdfdfd]">
            <div className="flex-1 flex items-center justify-center w-full">
                <div className="bg-white w-full max-w-[500px] rounded-[32px] p-3 md:p-6 sm:p-10 shadow-2xl shadow-blue-100/50 border border-gray-50 flex flex-col items-center text-center">
                    {step === 'email' ? (
                        <>
                            {/* Icon */}
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                                <RotateCcw className="text_color" size={32} />
                            </div>

                            <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-1.5 md:mb-3">Reset Password</h1>
                            <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-7 leading-relaxed px-4">
                                Don't worry, it happens. Enter the email associated with your account and we'll send you a recovery link/OTP.
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
                                        "Send OTP"
                                    )}
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            {/* OTP Icon */}
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                                <KeyRound className="text_color" size={32} />
                            </div>

                            <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-1.5 md:mb-3">Verify OTP</h1>
                            <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-7 leading-relaxed px-4">
                                We have sent a 4-digit code to <span className="font-semibold text-gray-800">{savedEmail}</span>
                            </p>

                            <form onSubmit={handleVerifyOtp} className="w-full space-y-6">
                                <div className="flex justify-center gap-3 md:gap-4 my-6">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                            ref={(el) => (inputRefs.current[index] = el)}
                                            className="w-[50px] h-[60px] md:w-[60px] md:h-[70px] text-center text-2xl font-bold text-gray-800 bg-gray-50/50 border border-gray-100 rounded-[12px] focus:outline-none focus:border-blue-300 focus:bg-white transition-all shadow-sm focus:shadow-md"
                                        />
                                    ))}
                                </div>

                                <button
                                    type="submit"
                                    disabled={verifyOtpState?.loading || otp.join('').length !== 4}
                                    className={`w-full flex items-center justify-center gap-2 bg_color text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-100 transform active:scale-[0.98] ${verifyOtpState?.loading || otp.join('').length !== 4 ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {verifyOtpState?.loading ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            Verifying...
                                        </>
                                    ) : (
                                        "Verify OTP"
                                    )}
                                </button>
                                
                                <div className="pt-2 text-sm text-gray-500 font-medium">
                                    Didn't receive code?{' '}
                                    <button 
                                        type="button" 
                                        onClick={() => dispatch(resendOtp({ email: savedEmail }))}
                                        disabled={loading}
                                        className="text_color hover:underline font-bold disabled:opacity-50"
                                    >
                                        Resend
                                    </button>
                                </div>
                            </form>
                        </>
                    )}

                    <div className="mt-8 md:mt-12 flex items-center gap-2">
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
