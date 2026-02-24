"use client";

import { User, ChevronDown } from "lucide-react";

export default function IdentitySection() {
    return (
        <section className="bg-white rounded-[10px] sm:rounded-[20px] p-4 md:p-4 border border-gray-100 shadow-sm md:mb-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <User size={20} strokeWidth={2} />
                </div>
                <h2 className="text-[20px] font-[700] text-gray-900">Identity</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Horse Name</label>
                    <input
                        type="text"
                        placeholder="Enter horse name"
                        className="w-full bg-gray-50/50 border border-gray-100 rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Breed</label>
                    <div className="relative">
                        <select className="w-full bg-gray-50/50 border border-gray-100 rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all appearance-none cursor-pointer">
                            <option value="">Select Breed</option>
                            <option value="arabian">Arabian</option>
                            <option value="thoroughbred">Thoroughbred</option>
                            <option value="quarter-horse">Quarter Horse</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <ChevronDown size={18} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Gender</label>
                    <div className="relative">
                        <select className="w-full bg-gray-50/50 border border-gray-100 rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all appearance-none cursor-pointer">
                            <option value="">Select Gender</option>
                            <option value="stallion">Stallion</option>
                            <option value="mare">Mare</option>
                            <option value="gelding">Gelding</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <ChevronDown size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
