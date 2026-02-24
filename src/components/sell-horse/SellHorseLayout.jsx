"use client";

import ProgressSidebar from "./ProgressSidebar";
import LivePreviewCard from "./LivePreviewCard";
import Link from "next/link";

export default function SellHorseLayout({ children, currentStep = 1, nextLink = "#", backLink = "#" }) {
    return (
        <div className="bg-[#f8fafc] min-h-screen pt-8 md:pt-10 mb-8 md:pb-16">
            <div className="container-width mx-auto px-3 lg:px-14">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Sidebar - Progress */}
                    <ProgressSidebar currentStep={currentStep} />

                    {/* Middle Content - Form */}
                    <div className="flex-1 max-w-[720px]">
                        {children}

                        {/* Bottom Actions - Now aligned with form content */}
                        <div className="mt-5 bg-white rounded-[10px] md:rounded-[20px] p-4 sm:p-5 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                <button className="flex-1 sm:flex-none px-4 sm:px-6 py-4 text-[13px] sm:text-[14px] font-bold text-gray-500 bg-gray-50/50 rounded-2xl hover:bg-gray-100 transition-all border border-gray-100/50 whitespace-nowrap">
                                    Save as Draft
                                </button>
                                <Link
                                    href={backLink}
                                    className="flex-1 sm:hidden px-4 py-4 text-[13px] font-bold text-[#1e293b] bg-[#f8fafc] rounded-2xl hover:bg-gray-100 transition-all border border-gray-100/50 flex items-center justify-center"
                                >
                                    Back
                                </Link>
                            </div>
                            <div className="flex items-center w-full sm:w-auto">
                                <Link
                                    href={backLink}
                                    className="hidden sm:flex px-8 py-4 text-[14px] font-bold text-[#1e293b] bg-[#f8fafc] rounded-2xl hover:bg-gray-100 transition-all mr-4 items-center justify-center min-w-[120px]"
                                >
                                    Back
                                </Link>
                                {currentStep === 4 ? (
                                    <button className="w-full sm:w-auto px-6 sm:px-10 py-4 text-[13px] sm:text-[14px] font-bold text-white bg-[#0fb478] rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-green-100 flex items-center justify-center gap-2 group whitespace-nowrap">
                                        Publish Listing
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                                    </button>
                                ) : (
                                    <Link
                                        href={nextLink}
                                        className="w-full sm:w-auto px-6 sm:px-10 py-4 text-[13px] sm:text-[14px] font-bold text-white bg_color rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group whitespace-nowrap"
                                    >
                                        Next Step
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Preview */}
                    <div className="hidden xl:block">
                        <LivePreviewCard step={currentStep} />
                    </div>
                </div>
            </div>
        </div>
    );
}
