"use client";

import { useState } from "react";
import { UploadCloud, X, Camera } from "lucide-react";

const initialPhotos = [
    { id: 1, url: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=400", isCover: true },
    { id: 2, url: "https://images.unsplash.com/photo-1598974357851-cb810e7486a4?q=80&w=400", isCover: false },
    { id: 3, url: "https://images.unsplash.com/photo-1534073733321-e126c897a936?q=80&w=400", isCover: false },
];

export default function PhotoGallerySection() {
    const [photos, setPhotos] = useState(initialPhotos);

    return (
        <section className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm mb-8">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                        <Camera size={20} strokeWidth={2} />
                    </div>
                    <h2 className="text-xl font-bold text-[#1e293b]">Photo Gallery</h2>
                </div>
                <span className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {photos.length}/10 Uploaded
                </span>
            </div>

            <div className="flex flex-col gap-6">
                {/* Upload Area */}
                <div className="relative border-2 border-dashed border-gray-100 rounded-[32px] p-12 flex flex-col items-center justify-center gap-4 hover:border_color hover:bg-blue-50/10 transition-all cursor-pointer group">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text_color group-hover:scale-110 transition-transform">
                        <UploadCloud size={32} />
                    </div>
                    <div className="text-center">
                        <p className="text-[15px] font-bold text-[#1e293b] mb-1">Click to upload or drag photos here</p>
                        <p className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">JPG, PNG or WEBP (Max 15MB)</p>
                    </div>
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" multiple />
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {photos.map((photo) => (
                        <div key={photo.id} className="relative group aspect-square rounded-2xl overflow-hidden border border-gray-100">
                            <img src={photo.url} alt="Horse" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button className="p-2 bg-white rounded-xl text-red-500 hover:scale-110 transition-transform shadow-sm">
                                    <X size={16} strokeWidth={3} />
                                </button>
                            </div>

                            {/* Badge */}
                            {photo.isCover && (
                                <div className="absolute bottom-0 left-0 w-full bg_color py-2 text-center">
                                    <span className="text-[9px] font-bold text-white uppercase tracking-widest">Cover Photo</span>
                                </div>
                            )}

                            {/* Selection Status */}
                            {photo.isCover && (
                                <div className="absolute inset-0 border-4 border_color rounded-2xl pointer-events-none"></div>
                            )}
                        </div>
                    ))}

                    {/* Mock Uploading State */}
                    <div className="relative aspect-square rounded-2xl border border-gray-100 bg-gray-50/50 flex flex-col items-center justify-center p-4">
                        <button className="absolute top-2 right-2 text-gray-300">
                            <X size={14} />
                        </button>
                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden mb-3">
                            <div className="w-2/3 h-full bg_color animate-progress"></div>
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Uploading... 66%</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
