"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardCharts } from "@/redux/slices/adminSlice";
import { TrendingUp } from "lucide-react";

export default function TransactionChart() {
    const dispatch = useDispatch();
    const { dashboardCharts, loading } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(fetchDashboardCharts());
    }, [dispatch]);

    // Parse values as numbers
    const chartData = dashboardCharts.map(item => ({
        name: item.name,
        value: parseFloat(item.value) || 0
    }));

    // Calculate total for display
    const totalTransactions = chartData.reduce((acc, curr) => acc + curr.value, 0);

    // Dynamic SVG Path generation
    // ViewBox: 0 0 800 240
    const getPoints = () => {
        if (chartData.length === 0) return [];
        const maxValue = Math.max(...chartData.map(d => d.value), 100); // Guard against 0
        return chartData.map((d, i) => ({
            x: 100 + (i * 200),
            y: 180 - (d.value / maxValue * 120)
        }));
    };

    const points = getPoints();
    const linePath = points.length > 0 
        ? `M ${points[0].x} ${points[0].y} ` + points.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ")
        : "";
    
    const fillPath = points.length > 0 
        ? `${linePath} L ${points[points.length - 1].x} 240 L ${points[0].x} 240 Z`
        : "";

    if (loading) {
        return (
            <div className="bg-white p-3 md:p-6 lg:pb-2 rounded-[32px] border border-[#F1F5F9] shadow-sm animate-pulse">
                <div className="flex justify-between mb-8">
                    <div className="space-y-3">
                        <div className="h-5 w-40 bg-gray-100 rounded-md" />
                        <div className="h-3 w-20 bg-gray-50 rounded-md" />
                    </div>
                    <div className="h-8 w-32 bg-gray-100 rounded-md" />
                </div>
                <div className="h-40 w-full bg-gray-50/50 rounded-2xl mb-4" />
                <div className="flex justify-between px-2">
                    {[1, 2, 3, 4].map(w => <div key={w} className="h-2 w-12 bg-gray-50 rounded-md" />)}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-3 md:p-6 lg:pb-2 rounded-[32px] border border-[#F1F5F9] shadow-sm">
            <div className="sm:flex items-start justify-between">
                <div>
                    <h3 className="text-[20px] text-nowrap font-[700] text-[#1E293B] mb-1">Transaction Volume</h3>
                    <p className="text-[13px] text-gray-500 uppercase tracking-tight">Last 30 Days</p>
                </div>
                <div className="text-right">
                    <div className="flex items-center gap-2 text-[24px] font-[700] text-[#1E293B]">
                        ${totalTransactions.toLocaleString()}
                        <span className="bg-green-50 text-green-500 text-[11px] font-black px-2 py-0.5 rounded-lg flex items-center gap-1">
                            +0%
                        </span>
                    </div>
                </div>
            </div>

            <div className="relative h-28 md:h-64 lg:h-52 w-full mt-4">
                {chartData.length > 0 ? (
                    <svg viewBox="0 0 800 240" className="w-full h-full preserve-3d">
                        <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Fill Area */}
                        <path
                            d={fillPath}
                            fill="url(#chartGradient)"
                            className="transition-all duration-700 ease-in-out"
                        />

                        {/* Line */}
                        <path
                            d={linePath}
                            fill="none"
                            stroke="#2563EB"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-all duration-700 ease-in-out"
                        />

                        {/* Points */}
                        {points.map((pt, i) => (
                            <circle 
                                key={i} 
                                cx={pt.x} 
                                cy={pt.y} 
                                r="6" 
                                fill="white" 
                                stroke="#2563EB" 
                                strokeWidth="3" 
                                className="transition-all duration-500"
                            />
                        ))}
                    </svg>
                ) : (
                    <div className="h-full w-full flex items-center justify-center border-2 border-dashed border-gray-100 rounded-2xl">
                        <p className="text-sm font-bold text-[#94A3B8]">No transaction data yet</p>
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between mt-6 lg:mt-2 px-6">
                {chartData.map((item, i) => (
                    <span key={i} className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em]">{item.name}</span>
                ))}
            </div>
        </div>
    );
}
