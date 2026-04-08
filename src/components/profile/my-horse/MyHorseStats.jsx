"use client";

import { CheckCircle2, Eye, Tag, TrendingUp } from "lucide-react";

export default function MyHorseStats({ stats }) {
    const statCards = [
        {
            label: "Total Listings",
            value: stats?.active + stats?.drafts + stats?.sold || 0,
            trend: "All",
            icon: <TrendingUp size={20} />,
            iconBg: "bg-blue-50",
            iconColor: "text_color",
        },
        {
            label: "Horses Sold",
            value: stats?.sold || 0,
            trend: "History",
            icon: <Tag size={20} />,
            iconBg: "bg-orange-50",
            iconColor: "text-orange-500",
        },
        {
            label: "Active Now",
            value: stats?.active || 0,
            trend: "Live",
            icon: <CheckCircle2 size={20} />,
            iconBg: "bg-green-50",
            iconColor: "text-green-500",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-3">
            {statCards.map((stat, index) => (
                <div key={index} className="bg-white p-3 rounded-[30px] border border-gray-100 shadow-sm relative overflow-hidden group">
                    <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-2xl ${stat.iconBg} ${stat.iconColor}`}>
                            {stat.icon}
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-[600] uppercase tracking-widest mb-2">{stat.label}</p>
                        <div className="flex items-end gap-3">
                            <h3 className="text-4xl font-[600] text-gray-900 tracking-tight">{stat.value}</h3>
                            <div className="flex items-center gap-1 mb-1.5">
                                {index !== 2 && <TrendingUp size={14} className={stat.iconColor} />}
                                <span className="text-[10px] font-[600] text-gray-500 whitespace-nowrap">
                                    {index !== 2 && <span className={stat.iconColor}>{stat.trend.split(" ")[0]}</span>}
                                    {index !== 2 ? ` ${stat.trend.split(" ").slice(1).join(" ")}` : stat.trend}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Optional: subtle background trend line or decoration could go here */}
                </div>
            ))}
        </div>
    );
}
