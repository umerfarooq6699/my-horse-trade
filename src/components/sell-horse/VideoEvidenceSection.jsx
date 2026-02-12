"use client";

import { useState } from "react";
import { Video, Plus, CheckCircle2, Youtube } from "lucide-react";

export default function VideoEvidenceSection() {
    const [activeTab, setActiveTab] = useState("upload"); // "upload" or "link"

    return (
        <section className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <Video size={20} strokeWidth={2} />
                </div>
                <h2 className="text-xl font-bold text-[#1e293b]">Video Evidence</h2>
            </div>

            <div className="flex flex-col gap-6">
                {/* Tabs */}
                <div className="flex border-b border-gray-100 mb-2">
                    <button
                        onClick={() => setActiveTab("upload")}
                        className={`pb-4 px-2 text-[12px] font-bold uppercase tracking-wider transition-all relative ${activeTab === 'upload' ? 'text_color' : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        Upload File
                        {activeTab === 'upload' && <div className="absolute bottom-[-1px] left-0 w-full h-0.5 bg_color"></div>}
                    </button>
                    <button
                        onClick={() => setActiveTab("link")}
                        className={`pb-4 px-8 text-[12px] font-bold uppercase tracking-wider transition-all relative ${activeTab === 'link' ? 'text_color' : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        Youtube/Vimeo
                        {activeTab === 'link' && <div className="absolute bottom-[-1px] left-0 w-full h-0.5 bg_color"></div>}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeTab === "upload" ? (
                        <>
                            {/* Video Item */}
                            <div className="p-5 bg-gray-50/50 border border-gray-100 rounded-2xl flex items-center justify-between group hover:border_color/20 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400 shadow-sm group-hover:text_color transition-colors">
                                        <Video size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[13px] font-bold text-[#1e293b]">trot_sequence...</span>
                                        <span className="text-[10px] font-medium text-gray-400 uppercase">14.2 MB</span>
                                    </div>
                                </div>
                                <div className="text-green-500">
                                    <CheckCircle2 size={18} strokeWidth={3} />
                                </div>
                            </div>

                            {/* Add Another */}
                            <button className="p-5 border border-dashed border-gray-100 rounded-2xl flex items-center justify-center gap-2 text-gray-400 hover:border_color hover:text_color hover:bg-blue-50/10 transition-all group">
                                <Plus size={18} className="group-hover:scale-110 transition-transform" />
                                <span className="text-[11px] font-bold uppercase tracking-widest">Add Another Video</span>
                            </button>
                        </>
                    ) : (
                        <div className="md:col-span-2 flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Video Link</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Paste YouTube or Vimeo link here"
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-12 py-4 text-[13px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all"
                                    />
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Youtube size={18} />
                                    </div>
                                </div>
                            </div>
                            <button className="w-fit px-8 py-3 bg_color text-white text-[11px] font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-blue-100 hover:opacity-90 transition-all">
                                Add Video
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
