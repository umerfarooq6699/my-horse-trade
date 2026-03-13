"use client";

import StatsCards from "@/components/admin/StatsCards";
import TransactionChart from "@/components/admin/TransactionChart";
import { QuickActions, SystemStatus } from "@/components/admin/QuickActions";
import RecentActivity from "@/components/admin/RecentActivity";


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

            </div>

            {/* Stats Cards Section */}
            <StatsCards />

            {/* Analytics and Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-start gap-8">
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
