"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "@/redux/slices/profileSlice";
import { useEffect } from "react";
import { resetProfileState } from "@/redux/slices/profileSlice";

export default function ChangePassword() {
    const dispatch = useDispatch();
    const { loading, error, success } = useSelector((state) => state.profile);

    useEffect(() => {
        return () => {
            dispatch(resetProfileState());
        };
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            current_password: "",
            new_password: "",
            confirm_password: "",
        },
        validationSchema: Yup.object({
            current_password: Yup.string()
                .required("Current Password is required"),
            new_password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("New Password is required"),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("new_password"), null], "Passwords must match")
                .required("Confirm Password is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(changePassword({
                current_password: values.current_password,
                new_password: values.new_password
            })).unwrap().then(() => {
                resetForm();
            }).catch(() => {
                // error is handled by redux state
            });
        },
    });

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Password Management</h3>

            {success && (
                <div className="mb-4 p-3 bg-green-50 text-green-600 border border-green-200 rounded-lg text-sm font-medium">
                    Password updated successfully!
                </div>
            )}

            {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm font-medium">
                    {typeof error === "string" ? error : error?.message || "Failed to update password"}
                </div>
            )}

            <form onSubmit={formik.handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 ml-1">
                        Current Password
                    </label>
                    <input
                        type="password"
                        name="current_password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.current_password}
                        className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F8FAFC] ${formik.touched.current_password && formik.errors.current_password
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-100 focus:border-transparent"
                            }`}
                    />
                    {formik.touched.old_password && formik.errors.old_password && (
                        <p className="text-red-500 text-xs mt-1 ml-1">{formik.errors.old_password}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-2 ml-1">
                            New Password
                        </label>
                        <input
                            type="password"
                            name="new_password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.new_password}
                            className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F8FAFC] ${formik.touched.new_password && formik.errors.new_password
                                ? "border-red-500 focus:border-red-500"
                                : "border-gray-100 focus:border-transparent"
                                }`}
                        />
                        {formik.touched.new_password && formik.errors.new_password && (
                            <p className="text-red-500 text-xs mt-1 ml-1">{formik.errors.new_password}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-2 ml-1">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            name="confirm_password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirm_password}
                            className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F8FAFC] ${formik.touched.confirm_password && formik.errors.confirm_password
                                ? "border-red-500 focus:border-red-500"
                                : "border-gray-100 focus:border-transparent"
                                }`}
                        />
                        {formik.touched.confirm_password && formik.errors.confirm_password && (
                            <p className="text-red-500 text-xs mt-1 ml-1">{formik.errors.confirm_password}</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-4 gap-4">
                    <div className="flex items-center gap-6 w-full md:w-auto justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg_color text-white px-8 py-3 rounded-lg text-sm font-bold transition-opacity shadow-sm ${loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                                }`}
                        >
                            {loading ? "Updating..." : "Update Password"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
