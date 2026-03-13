"use client";

import { TrendingUp } from "lucide-react";

export default function TransactionChart() {
    return (
        <div className="bg-white p-3 md:p-6 lg:pb-2 rounded-[32px] border border-[#F1F5F9] shadow-sm">
            <div className="sm:flex items-start justify-between">
                <div>
                    <h3 className="text-[20px] text-nowrap font-[700] text-[#1E293B] mb-1">Transaction Volume</h3>
                    <p className="text-[13px] text-gray-500 uppercase tracking-tight">Last 30 Days</p>
                </div>
                <div className="text-right">
                    <div className="flex items-center gap-2 text-[24px] font-[700] text-[#1E293B]">
                        $145,000
                        <span className="bg-green-50 text-green-500 text-[11px] font-black px-2 py-0.5 rounded-lg flex items-center gap-1">
                            +12%
                        </span>
                    </div>
                </div>
            </div>

            <div className="relative h-28 md:h-64 lg:h-52 w-full">
                {/* SVG Chart Placeholder */}
                <svg viewBox="0 80 800 120" className="w-full h-full">
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Fill Area */}
                    <path
                        d="M0,180 C100,160 150,80 200,90 C250,100 300,160 400,140 C500,120 550,220 600,200 C650,180 700,100 800,80 L800,240 L0,240 Z"
                        fill="url(#chartGradient)"
                    />

                    {/* Line */}
                    <path
                        d="M0,180 C100,160 150,80 200,90 C250,100 300,160 400,140 C500,120 550,220 600,200 C650,180 700,100 800,80"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Points */}
                    {[
                        { x: 200, y: 90 },
                        { x: 400, y: 140 },
                        { x: 600, y: 200 },
                        { x: 800, y: 80 }
                    ].map((pt, i) => (
                        <circle key={i} cx={pt.x} cy={pt.y} r="6" fill="white" stroke="#2563EB" strokeWidth="3" />
                    ))}
                </svg>
            </div>

            <div className="flex items-center justify-between mt-6 lg:mt-2 px-2">
                {["WEEK 1", "WEEK 2", "WEEK 3", "WEEK 4"].map((week, i) => (
                    <span key={i} className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em]">{week}</span>
                ))}
            </div>
        </div>
    );
}
