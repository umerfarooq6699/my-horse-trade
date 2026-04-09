"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardStats } from "@/redux/slices/adminSlice";
import { Users, FileText, Smartphone, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";

export default function StatsCards() {
    const dispatch = useDispatch();
    const { dashboardStats, loading } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(fetchDashboardStats());
    }, [dispatch]);

    const statsConfig = [
        {
            title: "Total Users",
            value: dashboardStats.totalUsers.toLocaleString(),
            change: "+5% this week", // Mock trend as not provided in API yet
            changeType: "up",
            icon: <Users className="w-5 h-5 text-blue-600" />,
            bg: "bg-blue-50/50"
        },
        {
            title: "Active Listings",
            value: dashboardStats.activeListings.toLocaleString(),
            change: "+2% this week", // Mock trend as not provided in API yet
            changeType: "up",
            icon: <FileText className="w-5 h-5 text-blue-600" />,
            bg: "bg-blue-50/50"
        },
        {
            title: "Pending Transactions",
            value: dashboardStats.pendingTransactions,
            change: "Waiting for approval",
            changeType: "neutral",
            icon: <Smartphone className="w-5 h-5 text-orange-500" />,
            bg: "bg-orange-50/50"
        },
        {
            title: "Open Disputes",
            value: dashboardStats.openDisputes.toLocaleString(),
            change: "Action required",
            changeType: "down",
            icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
            bg: "bg-red-50/50"
        }
    ];

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm animate-pulse">
                        <div className="flex items-start justify-between mb-4">
                            <div className="space-y-3">
                                <div className="h-3 w-20 bg-gray-100 rounded-md" />
                                <div className="h-8 w-24 bg-gray-100 rounded-md" />
                            </div>
                            <div className="w-12 h-12 bg-gray-50 rounded-xl" />
                        </div>
                        <div className="h-3 w-32 bg-gray-50 rounded-md" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsConfig.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[24px] border border-[#F1F5F9] shadow-sm hover:shadow-md transition-all group">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <p className="text-xs font-bold text-gray-600 mb-1 tracking-tight">{stat.title}</p>
                            <h3 className="text-[20px] sm:text-[28px] font-[700] text-[#1E293B] leading-none">{stat.value}</h3>
                        </div>
                        <div className={`p-3 rounded-xl ${stat.bg} group-hover:scale-110 transition-transform`}>
                            {stat.icon}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {stat.changeType === "up" && <TrendingUp className="w-3.5 h-3.5 text-green-500" />}
                        {stat.changeType === "down" && <TrendingDown className="w-3.5 h-3.5 text-red-500" />}
                        {stat.changeType === "neutral" && <div className="w-2 h-0.5 bg-orange-300" />}
                        <p className={`text-[11px] font-bold ${stat.changeType === "up" ? "text-green-500" :
                            stat.changeType === "down" ? "text-red-500" :
                                "text-orange-500"
                            }`}>
                            {stat.change}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
