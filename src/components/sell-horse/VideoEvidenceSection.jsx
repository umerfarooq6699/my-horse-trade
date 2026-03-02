"use client";

import { useState } from "react";
import { Video, CheckCircle2, Youtube, UploadCloud, X } from "lucide-react";

export default function VideoEvidenceSection({ videoData, setVideoData }) {
    const [activeTab, setActiveTab] = useState("upload"); // "upload" or "link"

    const handleVideoUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        const newVideos = files.map((file, index) => ({
            id: Date.now() + index,
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(1) + " MB"
        }));

        setVideoData(prev => ({
            ...prev,
            uploads: [...prev.uploads, ...newVideos]
        }));
    };

    const removeVideo = (id) => {
        setVideoData(prev => ({
            ...prev,
            uploads: prev.uploads.filter(v => v.id !== id)
        }));
    };

    return (
        <section className="bg-white rounded-[10px] sm:rounded-[20px] p-4 md:p-4 border border-gray-100 shadow-sm md:mb-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <Video size={20} strokeWidth={2} />
                </div>
                <h2 className="text-[20px] font-[700] text-[#1e293b]">Video Evidence</h2>
            </div>

            <div className="flex flex-col gap-6">
                {/* Tabs */}
                <div className="flex border-b border-gray-100 mb-2">
                    <button
                        onClick={() => setActiveTab("upload")}
                        className={`pb-4 px-4 text-[12px] font-bold uppercase tracking-wider transition-all relative ${activeTab === 'upload' ? 'text_color' : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        Upload Video
                        {activeTab === 'upload' && <div className="absolute bottom-[-1px] left-0 w-full h-0.5 bg_color"></div>}
                    </button>
                    <button
                        onClick={() => setActiveTab("link")}
                        className={`pb-4 px-4 text-[12px] font-bold uppercase tracking-wider transition-all relative ${activeTab === 'link' ? 'text_color' : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        Youtube/Video
                        {activeTab === 'link' && <div className="absolute bottom-[-1px] left-0 w-full h-0.5 bg_color"></div>}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeTab === "upload" ? (
                        <>
                            {/* Video Items */}
                            {videoData.uploads.map((video) => (
                                <div key={video.id} className="p-4 bg-gray-50/50 border border-gray-100 rounded-2xl flex items-center justify-between group hover:border_color/20 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400 shadow-sm group-hover:text_color transition-colors">
                                            <Video size={18} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[13px] font-bold text-[#1e293b]">{video.name}</span>
                                            <span className="text-[10px] font-medium text-gray-400 uppercase">{video.size}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-green-500">
                                            <CheckCircle2 size={18} strokeWidth={3} />
                                        </div>
                                        <button
                                            onClick={() => removeVideo(video.id)}
                                            className="p-1 px-1.5 text-gray-300 hover:text-red-500 transition-colors"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {/* Add Another */}
                            <div className={`relative bg-[#f8faff] border-2 border-dashed border-blue-100/50 rounded-[10px] md:rounded-[20px] p-6 md:p-10 flex flex-col items-center justify-center gap-4 hover:bg-blue-50/50 transition-all cursor-pointer group ${videoData.uploads.length === 0 ? 'md:col-span-2' : ''}`}>
                                <input
                                    type="file"
                                    accept="video/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                                    onChange={handleVideoUpload}
                                    multiple
                                />
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    <UploadCloud size={28} className="text_color" />
                                </div>
                                <div className="text-center">
                                    <p className="text-[16px] md:text-[20px] font-[600] text-[#1e293b] mb-1">
                                        {videoData.uploads.length === 0 ? "Click to upload or drag videos here" : "Add another video"}
                                    </p>
                                    <p className="text-[12px] md:text-[13px] font-medium text-gray-400 uppercase tracking-tight">MP4, MOV or WEBM (Max 50MB)</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="md:col-span-2 flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Video Link</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Paste YouTube or Vimeo link here"
                                        value={videoData.link}
                                        onChange={(e) => setVideoData({ ...videoData, link: e.target.value })}
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-[5px] md:rounded-2xl px-12 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all"
                                    />
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Youtube size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
