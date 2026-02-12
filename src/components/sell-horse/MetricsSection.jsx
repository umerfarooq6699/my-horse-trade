"use client";

import { Activity } from "lucide-react";
import { useState } from "react";

export default function MetricsSection() {
    const [age, setAge] = useState(5);
    const [height, setHeight] = useState(16.2);

    return (
        <section className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <Activity size={20} strokeWidth={2} />
                </div>
                <h2 className="text-xl font-bold text-[#1e293b]">Metrics</h2>
            </div>

            <div className="flex flex-col gap-10">
                {/* Age Slider */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Age (Years)</label>
                        <span className="text-[13px] font-bold text_color">{age} yrs</span>
                    </div>
                    <div className="relative w-full h-1.5 bg-gray-100 rounded-full group">
                        <input
                            type="range"
                            min="0"
                            max="30"
                            step="1"
                            value={age}
                            onChange={(e) => setAge(parseInt(e.target.value))}
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div
                            className="absolute left-0 top-0 h-full bg_color rounded-full transition-all"
                            style={{ width: `${(age / 30) * 100}%` }}
                        ></div>
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border_color rounded-full shadow-md transition-all group-hover:scale-110"
                            style={{ left: `calc(${(age / 30) * 100}% - 8px)` }}
                        ></div>
                    </div>
                    <div className="flex justify-between px-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Foal</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">30+</span>
                    </div>
                </div>

                {/* Height Slider */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Height (Hands)</label>
                        <span className="text-[13px] font-bold text_color">{height.toFixed(1)} hh</span>
                    </div>
                    <div className="relative w-full h-1.5 bg-gray-100 rounded-full group">
                        <input
                            type="range"
                            min="8"
                            max="20"
                            step="0.1"
                            value={height}
                            onChange={(e) => setHeight(parseFloat(e.target.value))}
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div
                            className="absolute left-0 top-0 h-full bg_color rounded-full transition-all"
                            style={{ width: `${((height - 8) / (20 - 8)) * 100}%` }}
                        ></div>
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border_color rounded-full shadow-md transition-all group-hover:scale-110"
                            style={{ left: `calc(${((height - 8) / (20 - 8)) * 100}% - 8px)` }}
                        ></div>
                    </div>
                    <div className="flex justify-between px-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pony</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Draft</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
