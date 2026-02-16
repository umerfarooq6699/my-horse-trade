"use client";

import { User, Mail, Shield, Lock, ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function AddNewUser() {
    return (
        <div className="space-y-8 pb-10">
            {/* Page Header */}
            <div className="flex items-center gap-6">
                <Link
                    href="/admin/users"
                    className="p-3 bg-white border border-[#E2E8F0] rounded-xl text-[#64748B] hover:text-[#2563EB] hover:bg-blue-50 transition-all shadow-sm group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </Link>
                <div>
                    <h1 className="text-[32px] font-black text-[#1E293B] tracking-tight mb-1">Add New User</h1>
                    <p className="text-[#64748B] font-medium tracking-tight">Create a new platform account with specific permissions.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Form */}
                <div className="lg:col-span-2 space-y-6">
                    <section className="bg-white p-8 rounded-[32px] border border-[#F1F5F9] shadow-sm">
                        <h3 className="text-lg font-black text-[#1E293B] mb-6 flex items-center gap-2">
                            <User className="w-5 h-5 text-[#2563EB]" />
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Alex Morgan"
                                    className="w-full px-5 py-3 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#2563EB]/10 transition-all outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="alex@example.com"
                                    className="w-full px-5 py-3 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#2563EB]/10 transition-all outline-none"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-[32px] border border-[#F1F5F9] shadow-sm">
                        <h3 className="text-lg font-black text-[#1E293B] mb-6 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-[#2563EB]" />
                            Security
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest ml-1">Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full px-5 py-3 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#2563EB]/10 transition-all outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest ml-1">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full px-5 py-3 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#2563EB]/10 transition-all outline-none"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar Form */}
                <div className="space-y-6">
                    <section className="bg-white p-8 rounded-[32px] border border-[#F1F5F9] shadow-sm">
                        <h3 className="text-lg font-black text-[#1E293B] mb-6 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-[#2563EB]" />
                            Account Role
                        </h3>
                        <div className="space-y-3">
                            {["Buyer", "Seller", "Admin"].map((role) => (
                                <label key={role} className="flex items-center gap-3 p-4 border border-[#F1F5F9] rounded-2xl cursor-pointer hover:bg-gray-50 transition-all group">
                                    <input type="radio" name="role" value={role} className="w-4 h-4 text-[#2563EB] focus:ring-[#2563EB]/10 border-[#E2E8F0]" />
                                    <span className="text-sm font-bold text-[#64748B] group-hover:text-[#1E293B]">{role}</span>
                                </label>
                            ))}
                        </div>
                    </section>

                    <div className="pt-4">
                        <button className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#2563EB] text-white rounded-2xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 italic">
                            <Save className="w-4 h-4" />
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
