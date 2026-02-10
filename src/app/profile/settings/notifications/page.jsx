"use client";

import SettingsSidebar from "@/components/profile/settings/SettingsSidebar";
import NotificationPreferences from "@/components/profile/settings/Notifications/NotificationPreferences";

export default function NotificationSettingsPage() {
    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <main className="flex flex-col min-h-screen">
                <div className="flex-1 px-4 py-6 md:px-8 lg:px-12 lg:py-10 pt-4 lg:pt-8 space-y-6 lg:space-y-8">
                    {/* Page Header */}
                    <div className="bg-white px-4 py-5 md:px-6 md:py-6 rounded-[28px] border border-gray-100 shadow-sm">
                        <h1 className="text-2xl md:text-3xl font-[600] text-gray-900 mb-1">Notification Preferences</h1>
                        <p className="text-gray-500 text-sm md:text-base font-[500]">
                            Manage how and when MyHorseTrade communicates with you.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-12 gap-6 pb-5">
                        {/* Settings Sidebar */}
                        <div className="col-span-12 lg:col-span-3">
                            <SettingsSidebar />
                        </div>

                        {/* Main Content */}
                        <div className="col-span-12 lg:col-span-9">
                            <NotificationPreferences />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
