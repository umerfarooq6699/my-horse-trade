"use client";

import { Share2, FileText } from "lucide-react";

export default function PedigreeSection() {
    return (
        <div className="p-8 bg-white border border-gray-100 rounded-[32px]">
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                        <Share2 size={20} />
                    </div>
                    <h3 className="font-extrabold text-gray-900">Pedigree Lineage</h3>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-100 transition-all">
                    View Full Document
                    <FileText size={14} />
                </button>
            </div>

            <div className="relative overflow-x-auto">
                <div className="min-w-[500px] flex items-center gap-8 py-4">
                    {/* Level 1: Progeny */}
                    <div className="flex flex-col gap-12">
                        <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl w-48 relative">
                            <p className="text-[10px] font-black text-gray-400 mb-1 uppercase">SIRE</p>
                            <p className="text-sm font-bold text-gray-900">Electric Bug</p>
                            <div className="absolute right-0 top-1/2 translate-x-full w-8 h-px bg-gray-200"></div>
                        </div>
                        <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl w-48 relative">
                            <p className="text-[10px] font-black text-gray-400 mb-1 uppercase">DAM</p>
                            <p className="text-sm font-bold text-gray-900">Lunar Tide</p>
                            <div className="absolute right-0 top-1/2 translate-x-full w-8 h-px bg-gray-200"></div>
                        </div>
                    </div>

                    {/* Level 2: Grandparents */}
                    <div className="flex flex-col gap-4">
                        <div className="p-3 bg-white border border-gray-100 rounded-xl w-40">
                            <p className="text-[8px] font-bold text-gray-400">Pire Dust II</p>
                        </div>
                        <div className="p-3 bg-white border border-gray-100 rounded-xl w-40">
                            <p className="text-[8px] font-bold text-gray-400">Galaxy Girl</p>
                        </div>
                        <div className="p-3 bg-white border border-gray-100 rounded-xl w-40 mt-4">
                            <p className="text-[8px] font-bold text-gray-400">Ocean Blue</p>
                        </div>
                        <div className="p-3 bg-white border border-gray-100 rounded-xl w-40">
                            <p className="text-[8px] font-bold text-gray-400">Silent Walker</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
