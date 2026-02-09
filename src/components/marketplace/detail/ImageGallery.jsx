"use client";

import { useState } from "react";
import { Maximize2, Play } from "lucide-react";

export default function ImageGallery({ images, tags }) {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image Container */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                <img
                    src={images[activeImage]?.src || images[activeImage]}
                    alt="Main horse view"
                    className="w-full h-full object-cover"
                />

                {/* Badges */}
                <div className="absolute top-6 left-6 flex gap-2">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-1.5 bg-white/80 backdrop-blur-md text-gray-900 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            {tag}
                        </span>
                    ))}
                    <span className="px-4 py-1.5 bg_color text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                        PREMIUM
                    </span>
                </div>

                {/* Controls */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                    <button className="p-3 bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors rounded-full text-white">
                        <Maximize2 size={20} />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors rounded-full text-white">
                        <Play size={20} fill="currentColor" />
                    </button>
                </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-3">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`aspect-video rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border_color ring-2 ring-blue-50' : 'border-transparent hover:border-gray-200'}`}
                    >
                        <img src={img?.src || img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                    </button>
                ))}
                <button className="aspect-video rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400 hover:bg-gray-100 hover:border-gray-300 transition-all">
                    +18 More
                </button>
            </div>
        </div>
    );
}
