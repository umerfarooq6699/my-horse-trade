"use client";

import StatsCards from "@/components/admin/StatsCards";
import TransactionChart from "@/components/admin/TransactionChart";
import { QuickActions, SystemStatus } from "@/components/admin/QuickActions";
import RecentActivity from "@/components/admin/RecentActivity";
import { FileDown, Plus } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="space-y-5 sm:space-y-8 pb-10">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-[24px] sm:text-[32px] font-[600] text-[#1E293B] tracking-tight mb-2">Dashboard Overview</h1>
                    <p className="text-gray-400">
                        Welcome back, here's what's happening at MyHorseTrade today.
                    </p>
                </div>
                <div className="sm:flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm font-bold text-[#1E293B] hover:bg-gray-50 transition-all shadow-sm">
                        <FileDown className="w-4 h-4" />
                        Export Report
                    </button>
                    <button className="mt-3 sm:mt-0 flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                        <Plus className="w-4 h-4" />
                        New Listing
                    </button>
                </div>
            </div>

            {/* Stats Cards Section */}
            <StatsCards />

            {/* Analytics and Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Chart */}
                <div className="lg:col-span-8 flex flex-col">
                    <TransactionChart />
                </div>

                {/* Right Column - Actions & Status */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    <QuickActions />
                    <SystemStatus />
                </div>
            </div>

            {/* Recent Activity Table */}
            <RecentActivity />
        </div>
    );
}
