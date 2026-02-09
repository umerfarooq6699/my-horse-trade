"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Send } from "lucide-react";

export default function ContactForm() {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            emailAddress: "",
            subject: "",
            message: ""
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Full Name is required"),
            emailAddress: Yup.string().email("Invalid email address").required("Email is required"),
            subject: Yup.string().required("Please select a subject"),
            message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required")
        }),
        onSubmit: (values) => {
            console.log("Form submitted:", values);
            alert("Thank you! Your message has been sent.");
            formik.resetForm();
        }
    });

    return (
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
                <div className="text_color">
                    <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">Send us a message</h3>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="John Doe"
                            className={`w-full px-5 py-4 bg-gray-50 border rounded-2xl focus:outline-none transition-all ${formik.touched.fullName && formik.errors.fullName ? "border-red-300 ring-1 ring-red-100" : "border-gray-100 focus:border_color focus:ring-4 focus:ring-blue-50"
                                }`}
                            {...formik.getFieldProps("fullName")}
                        />
                        {formik.touched.fullName && formik.errors.fullName ? (
                            <p className="text-red-500 text-xs ml-1">{formik.errors.fullName}</p>
                        ) : null}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                        <input
                            type="email"
                            name="emailAddress"
                            placeholder="john@example.com"
                            className={`w-full px-5 py-4 bg-gray-50 border rounded-2xl focus:outline-none transition-all ${formik.touched.emailAddress && formik.errors.emailAddress ? "border-red-300 ring-1 ring-red-100" : "border-gray-100 focus:border_color focus:ring-4 focus:ring-blue-50"
                                }`}
                            {...formik.getFieldProps("emailAddress")}
                        />
                        {formik.touched.emailAddress && formik.errors.emailAddress ? (
                            <p className="text-red-500 text-xs ml-1">{formik.errors.emailAddress}</p>
                        ) : null}
                    </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                    <select
                        name="subject"
                        className={`w-full px-5 py-4 bg-gray-50 border rounded-2xl focus:outline-none transition-all appearance-none cursor-pointer ${formik.touched.subject && formik.errors.subject ? "border-red-300 ring-1 ring-red-100" : "border-gray-100 focus:border_color focus:ring-4 focus:ring-blue-50"
                            }`}
                        {...formik.getFieldProps("subject")}
                    >
                        <option value="">Select a subject</option>
                        <option value="market">Marketplace Inquiry</option>
                        <option value="billing">Billing & Subscriptions</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                    </select>
                    {formik.touched.subject && formik.errors.subject ? (
                        <p className="text-red-500 text-xs ml-1">{formik.errors.subject}</p>
                    ) : null}
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Tell us more about your inquiry..."
                        className={`w-full px-5 py-4 bg-gray-50 border rounded-2xl focus:outline-none transition-all resize-none ${formik.touched.message && formik.errors.message ? "border-red-300 ring-1 ring-red-100" : "border-gray-100 focus:border_color focus:ring-4 focus:ring-blue-50"
                            }`}
                        {...formik.getFieldProps("message")}
                    ></textarea>
                    {formik.touched.message && formik.errors.message ? (
                        <p className="text-red-500 text-xs ml-1">{formik.errors.message}</p>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="flex items-center gap-2 bg_color text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-100 transform active:scale-95"
                >
                    Send Message <Send size={18} />
                </button>
            </form>
        </div>
    );
}
