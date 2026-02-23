"use client";

import { ChevronRight, Save, Globe, Eye, History, Bold, Italic, Underline, List, ListOrdered, Quote, Link2, Image as ImageIcon, Search, RotateCcw } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <div className="space-y-6 sm:space-y-8 pb-10">
            {/* Page Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-4">
                        <span>Home</span>
                        <ChevronRight className="w-3 h-3" />
                        <span>Legal Docs</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-[#1E293B]">Privacy Policy</span>
                    </div>
                    <h1 className="text-[24px] sm:text-[32px] font-[600] text-[#1E293B] tracking-tight mb-2">Privacy Policy</h1>
                    <p className="text-gray-400 text-sm">
                        Last updated by <span className="font-bold text-[#64748B]">Sarah Jenkins</span> on <span className="font-bold text-[#64748B]">Oct 24, 2023</span>
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider hidden sm:inline">Changes Saved</span>
                    <button className="px-6 py-2.5 bg-[#2563EB] text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                        Publish Changes
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Editor Section */}
                <div className="flex-1 space-y-6">
                    {/* Editor Controls */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center bg-[#F1F5F9] p-1 rounded-xl">
                            <button className="px-6 py-2 bg-white text-[#1E293B] text-xs font-bold rounded-lg shadow-sm">Edit</button>
                            <button className="px-6 py-2 text-[#94A3B8] text-xs font-bold rounded-lg hover:text-[#64748B]">Preview</button>
                        </div>
                        <button className="flex items-center gap-2 text-[#2563EB] text-sm font-bold hover:underline">
                            <History className="w-4 h-4" />
                            View History
                        </button>
                    </div>

                    {/* Rich Text Editor Container */}
                    <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
                        {/* Toolbar */}
                        <div className="px-6 py-4 border-b border-[#F8FAFC] flex flex-wrap items-center gap-4 sm:gap-6">
                            <div className="flex items-center gap-2 pr-4 border-r border-[#F1F5F9]">
                                <button className="p-2 text-[#94A3B8] hover:text-[#1E293B] hover:bg-gray-50 rounded-lg transition-all"><RotateCcw className="w-4 h-4" /></button>
                                <button className="p-2 text-[#94A3B8] hover:text-[#1E293B] hover:bg-gray-50 rounded-lg transition-all scale-x-[-1]"><RotateCcw className="w-4 h-4" /></button>
                            </div>
                            <div className="flex items-center gap-2 pr-4 border-r border-[#F1F5F9]">
                                <button className="px-3 py-1.5 text-xs font-bold text-[#64748B] hover:bg-gray-50 rounded-lg">TT</button>
                                <button className="p-2 text-[#1E293B] bg-gray-50 rounded-lg"><Bold className="w-4 h-4" /></button>
                                <button className="p-2 text-[#94A3B8] hover:text-[#1E293B] hover:bg-gray-50 rounded-lg transition-all"><Italic className="w-4 h-4" /></button>
                                <button className="p-2 text-[#94A3B8] hover:text-[#1E293B] hover:bg-gray-50 rounded-lg transition-all"><Underline className="w-4 h-4" /></button>
                            </div>
                            <div className="flex items-center gap-2 pr-4 border-r border-[#F1F5F9]">
                                <button className="p-2 text-[#94A3B8] hover:text-[#1E293B] hover:bg-gray-50 rounded-lg transition-all"><List className="w-4 h-4" /></button>
                                <button className="p-2 text-[#94A3B8] hover:text-[#1E293B] hover:bg-gray-50 rounded-lg transition-all"><ListOrdered className="w-4 h-4" /></button>
                                <button className="p-2 text-[#94A3B8] hover:text-[#1E293B] hover:bg-gray-50 rounded-lg transition-all"><Quote className="w-4 h-4" /></button>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 text-[#94A3B8] hover:text-[#1E293B] hover:bg-gray-50 rounded-lg transition-all"><Link2 className="w-4 h-4" /></button>
                                <button className="p-2 text-[#94A3B8] hover:text-[#1E293B] hover:bg-gray-50 rounded-lg transition-all"><ImageIcon className="w-4 h-4" /></button>
                            </div>
                        </div>

                        {/* Editable Content */}
                        <div className="p-8 sm:p-12 min-h-[800px] prose prose-slate max-w-none focus:outline-none">
                            <h2 className="font-bold text-[#1E293B] mb-6">1. Introduction</h2>
                            <p className="text-[#64748B] text-base leading-relaxed mb-8">
                                Welcome to MyHorseTrade.com. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>

                            <h2 className="text-2xl font-bold text-[#1E293B] mb-6">2. Important Information and Who We Are</h2>
                            <h3 className="text-lg font-bold text-[#1E293B] mb-4 uppercase tracking-wide">Controller</h3>
                            <p className="text-[#64748B] text-base leading-relaxed mb-8">
                                MyHorseTrade is the controller and responsible for your personal data (collectively referred to as "Company", "we", "us" or "our" in this privacy policy).
                            </p>
                            <p className="text-[#64748B] text-base leading-relaxed mb-8">
                                We have appointed a data privacy manager who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact the data privacy manager using the details set out below.
                            </p>

                            <div className="bg-[#F1F5F9]/50 border-l-4 border-[#2563EB] p-6 rounded-r-2xl mb-12">
                                <p className="text-[#2563EB] text-sm font-medium italic">
                                    Note to editor: Ensure the contact details below align with the new support email system.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[#1E293B] mb-6">3. The Data We Collect About You</h2>
                            <p className="text-[#64748B] text-base leading-relaxed">
                                Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar Configuration Section */}
                <div className="w-full lg:w-[320px] space-y-6">
                    {/* Publishing Card */}
                    <div className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm">
                        <h4 className="text-sm font-bold text-[#1E293B] mb-6">Publishing</h4>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-[#94A3B8]">Status</span>
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#22C55E] uppercase bg-green-50 px-2 py-1 rounded-lg">
                                    <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
                                    Published
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-[#94A3B8]">Visibility</span>
                                <span className="text-xs font-bold text-[#1E293B]">Public</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-[#94A3B8]">Effective Date</span>
                                <span className="text-xs font-bold text-[#1E293B]">Jan 01, 2024</span>
                            </div>
                        </div>
                        <button className="w-full py-2.5 rounded-xl border border-[#E2E8F0] text-sm font-bold text-[#64748B] hover:bg-gray-50 transition-all">
                            Unpublish
                        </button>
                    </div>

                    {/* SEO Settings Card */}
                    <div className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-sm font-bold text-[#1E293B]">SEO Settings</h4>
                            <Search className="w-4 h-4 text-[#94A3B8]" />
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-2 block">Meta Title</label>
                                <input type="text" className="w-full px-4 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium outline-none focus:ring-1 focus:ring-[#2563EB]/10" />
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-2 block">URL Slug</label>
                                <div className="flex items-center bg-[#F8FAFC] rounded-xl overflow-hidden px-4">
                                    <span className="text-[#94A3B8] text-sm">/legal/</span>
                                    <input type="text" className="flex-1 py-2.5 bg-transparent border-none text-sm font-medium outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-2 block">Meta Description</label>
                                <textarea className="w-full px-4 py-3 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium outline-none focus:ring-1 focus:ring-[#2563EB]/10 h-24 resize-none" />
                            </div>
                        </div>
                    </div>

                    {/* Recent Revisions Card */}
                    <div className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm">
                        <h4 className="text-sm font-bold text-[#1E293B] mb-6">Recent Revisions</h4>
                        <div className="space-y-6">
                            {[
                                { status: "current", date: "Oct 24, 2023 at 2:30 PM", author: "Sarah Jenkins" },
                                { status: "past", date: "Sep 10, 2023 at 9:15 AM", author: "Mike Ross", type: "Legal Update" },
                                { status: "past", date: "Aug 01, 2023 at 4:00 PM", author: "System Admin", type: "Initial Draft" }
                            ].map((rev, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-2.5 h-2.5 rounded-full mt-1 ${rev.status === "current" ? "bg-[#2563EB]" : "bg-[#CBD5E1]"}`} />
                                        {i !== 2 && <div className="w-0.5 flex-1 bg-[#F1F5F9] my-1" />}
                                    </div>
                                    <div className="flex-1 pb-1">
                                        <p className={`text-[11px] font-bold leading-none mb-1 ${rev.status === "current" ? "text-[#1E293B]" : "text-[#64748B]"}`}>
                                            {rev.type || "Current Version"}
                                        </p>
                                        <p className="text-[10px] text-[#94A3B8] mb-1">{rev.date}</p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-[10px] font-bold text-[#94A3B8]">by {rev.author}</p>
                                            {rev.status !== "current" && (
                                                <button className="text-[10px] font-bold text-[#2563EB] uppercase hover:underline">Restore</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
