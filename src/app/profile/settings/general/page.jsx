"use client";

import SettingsSidebar from "@/components/profile/settings/SettingsSidebar";
import PersonalInformation from "@/components/profile/settings/PersonalInformation";

export default function GeneralSettingsPage() {
    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <main className="flex flex-col min-h-screen">
                <div className="flex-1 px-4 py-6 md:px-8 lg:px-12 lg:py-10 pt-4 lg:pt-8 space-y-6 lg:space-y-8">
                    {/* Page Header */}
                    <div className="bg-white px-4 py-5 md:px-6 md:py-6 md:rounded-[20px] rounded-[10px] border border-gray-100 shadow-sm">
                        <h1 className="text-2xl md:text-3xl font-[600] text-gray-900 mb-1">Settings</h1>
                        <p className="text-gray-500 text-sm md:text-base font-[500]">
                            Manage your account settings and preferences
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-12 gap-6 pb-5">
                        {/* Settings Sidebar */}
                        <div className="col-span-12 lg:col-span-3">
                            <SettingsSidebar />
                        </div>

                        {/* Main Content */}
                        <div className="col-span-12 lg:col-span-9 space-y-4 md:space-y-8">
                            <PersonalInformation />

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-5 border-t border-gray-100">
                                <button className="px-4 md:px-6 py-3 text-sm font-bold text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-colors w-full sm:w-auto">
                                    Deactivate Account
                                </button>
                                <div className="grid grid-cols-2 sm:flex items-center gap-2 md:gap-3 w-full sm:w-auto">
                                    <button className="px-2 md:px-6 py-3 text-[13px] md:text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                        Discard
                                    </button>
                                    <button className="px-2 md:px-6 py-3 text-[13px] md:text-sm font-bold text-white bg_color rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30 whitespace-nowrap">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
