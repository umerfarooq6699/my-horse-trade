"use client";

import { useState } from "react";
import { FileText, Sparkles, Bold, Italic, Underline, List, ListOrdered, Quote } from "lucide-react";

export default function NarrativeSection() {
    const [description, setDescription] = useState("");

    return (
        <section className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                        <FileText size={20} strokeWidth={2} />
                    </div>
                    <h2 className="text-xl font-bold text-[#1e293b]">Description</h2>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 bg-blue-50/50 text_color rounded-xl text-[11px] font-bold uppercase tracking-widest border border-blue-100/50 hover:bg-blue-50 transition-all group">
                    <Sparkles size={14} className="group-hover:scale-110 transition-transform" />
                    AI Assist
                </button>
            </div>

            <div className="flex flex-col border border-gray-100 rounded-3xl overflow-hidden focus-within:ring-2 focus-within:ring_color/20 focus-within:border_color transition-all">
                {/* Editor Toolbar */}
                <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-[#1e293b] hover:bg-white rounded-lg transition-all"><Bold size={18} /></button>
                        <button className="p-2 text-gray-400 hover:text-[#1e293b] hover:bg-white rounded-lg transition-all"><Italic size={18} /></button>
                        <button className="p-2 text-gray-400 hover:text-[#1e293b] hover:bg-white rounded-lg transition-all"><Underline size={18} /></button>
                        <div className="w-px h-6 bg-gray-200 mx-1"></div>
                        <button className="p-2 text-gray-400 hover:text-[#1e293b] hover:bg-white rounded-lg transition-all"><List size={18} /></button>
                        <button className="p-2 text-gray-400 hover:text-[#1e293b] hover:bg-white rounded-lg transition-all"><ListOrdered size={18} /></button>
                        <div className="w-px h-6 bg-gray-200 mx-1"></div>
                        <button className="p-2 text-gray-400 hover:text-[#1e293b] hover:bg-white rounded-lg transition-all"><Quote size={18} /></button>
                    </div>
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Markdown Supported</span>
                </div>

                {/* Text Area */}
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tell their story. Mention temperament, health history, competition results..."
                    className="w-full min-h-[400px] p-8 text-[15px] font-medium text-[#1e293b] leading-relaxed bg-white focus:outline-none resize-none"
                    maxLength={5000}
                />

                {/* Footer Status */}
                <div className="px-8 py-4 bg-gray-50/30 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-gray-400">Minimum 100 characters recommended</span>
                    <span className={`text-[11px] font-bold tracking-widest ${description.length > 4500 ? 'text-orange-500' : 'text-gray-400'}`}>
                        {description.length}/5000
                    </span>
                </div>
            </div>
        </section>
    );
}
