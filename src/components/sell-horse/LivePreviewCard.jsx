"use client";

import { MapPin, Maximize, Heart, Share2, HelpCircle, Sparkles } from "lucide-react";

export default function LivePreviewCard({ step = 1 }) {
    return (
        <div className="w-full max-w-[340px] sticky top-32 h-fit mb-20">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Live Preview</h4>
                {step === 2 && (
                    <span className="text-[10px] font-bold text_color animate-pulse">Updating...</span>
                )}
            </div>

            <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl shadow-blue-50/50 border border-gray-100 mb-6">
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] bg-gray-100 flex items-center justify-center group">
                    <img
                        src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=400"
                        alt="Preview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-bold text-[#1e293b] uppercase tracking-wider shadow-sm">
                            New Listing
                        </span>
                    </div>
                    {step === 2 && (
                        <div className="absolute bottom-4 right-4">
                            <div className="px-2 py-1 bg-black/40 backdrop-blur-md rounded-lg flex items-center gap-1.5 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /></svg>
                                <span className="text-[10px] font-bold tracking-widest">3</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex flex-col gap-0.5">
                            <h3 className="text-lg font-bold text-[#1e293b] leading-tight">Midnight Shadow</h3>
                            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-tight">Arabian • Stallion • 5 yrs</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-red-500 transition-colors">
                                <Heart size={16} />
                            </button>
                            <button className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text_color transition-colors">
                                <Share2 size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-[#1e293b]">$ 45,000</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                {step === 2 ? 'Current Bid' : 'Asking Price'}
                            </span>
                        </div>

                        {step === 4 && (
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 bg-blue-50 text-[9px] font-bold text_color rounded-lg uppercase tracking-wider">X-Rays Available</span>
                                <span className="px-2.5 py-1 bg-blue-50 text-[9px] font-bold text_color rounded-lg uppercase tracking-wider">Papers Ready</span>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Location</span>
                                <div className="flex items-center gap-1.5 text-[#1e293b]">
                                    <MapPin size={12} className="text_color" />
                                    <span className="text-[11px] font-bold">Kentucky, USA</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Height</span>
                                <div className="flex items-center gap-1.5 text-[#1e293b]">
                                    <Maximize size={12} className="text_color" />
                                    <span className="text-[11px] font-bold">16.2 hh</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <button className="py-3.5 bg-gray-50 text-[#1e293b] text-[12px] font-bold rounded-2xl hover:bg-gray-100 transition-all uppercase tracking-widest">
                                Details
                            </button>
                            <button className="py-3.5 bg_color text-white text-[12px] font-bold rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-blue-100 uppercase tracking-widest">
                                {step === 2 ? 'Bid Now' : 'Contact'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Optimization Tip / Quality Check */}
            {step === 4 ? (
                <div className="p-6 bg-blue-50/50 rounded-[32px] border border-blue-100/50 flex gap-4">
                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm text_color">
                        <Sparkles size={20} className="text_color" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-bold text-[#1e293b] uppercase tracking-wider">Listing Optimization</span>
                        <p className="text-[10px] font-medium text-gray-500 leading-relaxed">
                            Your listing strength is <span className="text_color font-bold">High</span>. Adding a video could increase views by another 25%.
                        </p>
                    </div>
                </div>
            ) : step === 2 ? (
                <div className="p-6 bg-blue-50/50 rounded-[32px] border border-blue-100/50 flex gap-4">
                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm text_color">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-bold text-[#1e293b] uppercase tracking-wider">Quality Check</span>
                        <p className="text-[10px] font-medium text-gray-500 leading-relaxed">
                            Great job! Your cover photo resolution is excellent (4K). This increases buyer confidence.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="p-6 bg-blue-50/50 rounded-[32px] border border-blue-100/50 flex gap-4">
                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm text_color">
                        <HelpCircle size={18} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-bold text-[#1e293b] uppercase tracking-wider">AI Assistant</span>
                        <p className="text-[10px] font-medium text-gray-500 leading-relaxed">
                            Our system will automatically tag your listing based on the description you provide in step 3.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
