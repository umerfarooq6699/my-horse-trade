"use client";

import SettingsSidebar from "@/components/profile/settings/SettingsSidebar";
import BillingPricing from "@/components/profile/settings/Billing/BillingPricing";

export default function BillingSettingsPage() {
    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <main className="flex flex-col min-h-screen">
                <div className="flex-1 px-4 py-6 md:px-8 lg:px-12 lg:py-10 pt-4 lg:pt-8 space-y-6 lg:space-y-8">
                    {/* Page Header */}
                    <div className="bg-white px-4 py-5 md:px-6 md:py-6 rounded-[28px] border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-[600] text-gray-900 mb-1">Billing & Invoices</h1>
                            <p className="text-gray-500 text-sm md:text-base font-[500]">
                                Manage your subscription, payment methods, and view your billing history
                            </p>
                        </div>
                        <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-blue-100 text_color font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-sm">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download All Invoices
                        </button>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-12 gap-6 pb-5">
                        {/* Settings Sidebar */}
                        <div className="col-span-12 lg:col-span-3">
                            <SettingsSidebar />
                        </div>

                        {/* Main Content */}
                        <div className="col-span-12 lg:col-span-9">
                            <BillingPricing />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
