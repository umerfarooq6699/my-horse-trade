"use client";

import { DollarSign, ShoppingCart, Tag } from "lucide-react";

const stats = [
    {
        label: "Total Volume",
        value: "$125,000",
        icon: <DollarSign size={20} />,
        iconBg: "bg-blue-50",
        iconColor: "text_color",
    },
    {
        label: "Horses Bought",
        value: "4",
        icon: <ShoppingCart size={20} />,
        iconBg: "bg-green-50",
        iconColor: "text-green-500",
    },
    {
        label: "Horses Sold",
        value: "2",
        icon: <Tag size={20} />,
        iconBg: "bg-orange-50",
        iconColor: "text-orange-500",
    },
];

export default function FavoritesStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-3">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white p-3 rounded-[30px] border border-gray-100 shadow-sm relative overflow-hidden group">
                    <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-2xl ${stat.iconBg} ${stat.iconColor}`}>
                            {stat.icon}
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-[600] uppercase tracking-widest mb-2">{stat.label}</p>
                        <h3 className="text-4xl font-[600] text-gray-900 tracking-tight">{stat.value}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
