"use client";

import { Activity, ShieldAlert, FileText, LayoutGrid } from "lucide-react";

export default function PerformanceSidebar() {
    const attributes = [
        { name: "SCOPE", value: 95 },
        { name: "LONGEVITY", value: 82 },
        { name: "RIDABILITY", value: 88 },
        { name: "STAMINA", value: 92 },
    ];

    return (
        <div className="flex flex-col gap-6 sticky top-24">
            {/* Performance Attributes */}
            <div className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                        <Activity size={20} />
                    </div>
                    <h3 className="font-extrabold text-gray-900">Performance Attributes</h3>
                </div>

                <div className="space-y-8">
                    {attributes.map((attr, idx) => (
                        <div key={idx}>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[10px] font-black text-gray-400 tracking-widest">{attr.name}</span>
                                <span className="text-[10px] font-black text-blue-600 tracking-widest">{attr.value}%</span>
                            </div>
                            <div className="h-1.5 bg-gray-50 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                                    style={{ width: `${attr.value}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Health Snapshot */}
            <div className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                        <ShieldAlert size={20} />
                    </div>
                    <h3 className="font-extrabold text-gray-900">Health Snapshot</h3>
                </div>

                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 font-medium">Last Vet Check</span>
                        <span className="text-xs font-bold text-gray-900">Feb 15, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 font-medium">Vaccinations</span>
                        <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Up to date
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 font-medium">X-Rays</span>
                        <span className="text-xs font-bold text-blue-600 px-3 py-1 bg-blue-50 rounded-lg">32 Files</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                        <span className="text-xs text-gray-500 font-medium">Shoeing</span>
                        <span className="text-xs font-bold text-gray-900">Full Set (Normal)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
