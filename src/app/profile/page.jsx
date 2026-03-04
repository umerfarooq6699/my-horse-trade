"use client";

import Sidebar from "@/components/profile/Sidebar";
import ActiveListings from "@/components/profile/ActiveListings";
import RecentTransactions from "@/components/profile/RecentTransactions";
import ProfileDetails from "@/components/profile/ProfileDetails";
import Link from "next/link";

import { useState } from "react";
import { Menu } from "lucide-react";

export default function ProfilePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="bg-[#F8FAFC]">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className="lg:pl-64 flex flex-col min-h-screen transition-all duration-300">
                <div className="flex-1 px-4 py-6 md:px-8 lg:px-12 lg:py-10 pt-4 lg:pt-8 space-y-8 lg:space-y-6">
                    {/* Mobile Menu Toggle & Header */}
                    <div className="lg:hidden flex items-center justify-between bg-white px-3 py-2 md:px-6 md:py-4 rounded-2xl border border-gray-200 shadow-sm mb-4">
                        <h1 className="text-[19px] font-[600]">Profile Dashboard</h1>
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2.5 bg-gray-50 rounded-xl text-gray-600 hover:text_color transition-colors"
                        >
                            <Menu size={22} />
                        </button>
                    </div>

                    {/* Welcome Section */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between bg-white px-3 py-4 md:px-4 md:py-5 lg:px-5 lg:py-4 rounded-[10px] md:rounded-[20px] border border-gray-100 shadow-sm relative overflow-hidden group gap-3">
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-4xl lg:text-2xl font-[500] text-gray-900 md:mb-1">Welcome back, <span className="text_color">Alex</span></h2>
                            <p className="mobile_para">Here&apos;s what&apos;s happening in your stable today.</p>
                        </div>
                        <Link href="/sell-horse" className="relative z-10 w-full lg:w-auto bg_color text-white px-8 py-4 md:px-5 md:py-4 rounded-[20px] md:rounded-[15px] font-black shadow-lg hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-4 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/center" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                            List New Horse
                        </Link>

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-blue-50/50 rounded-full -mr-24 -mt-24 md:-mr-32 md:-mt-32 blur-3xl transition-all group-hover:bg-blue-100/50 duration-700"></div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-12 gap-6 md:gap-4 lg:gap-5 items-start pb-5">
                        {/* Active Listings Full Width */}
                        <div className="col-span-12">
                            <ActiveListings />
                        </div>

                        {/* Transactions Table */}
                        <div className="col-span-12 xl:col-span-8 order-2 xl:order-1">
                            <RecentTransactions />
                        </div>

                        {/* Profile Details Sidebar Side */}
                        <div className="col-span-12 xl:col-span-4 order-1 xl:order-2">
                            <ProfileDetails />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
