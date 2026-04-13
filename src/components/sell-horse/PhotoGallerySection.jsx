import { UploadCloud, X, Camera } from "lucide-react";

export default function PhotoGallerySection({ formik }) {
    const photos = formik.values.photos;

    const handleUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        const newPhotos = files.slice(0, 10 - photos.length).map((file, index) => ({
            id: Date.now() + index,
            file: file, // actual File object for upload
            url: URL.createObjectURL(file), // preview URL
            isCover: photos.length === 0 && index === 0
        }));

        formik.setFieldValue("photos", [...photos, ...newPhotos]);
    };

    const removePhoto = (id) => {
        const filtered = photos.filter(p => p.id !== id);
        // If we removed the cover photo, set a new one if photos still exist
        if (filtered.length > 0 && !filtered.some(p => p.isCover)) {
            filtered[0].isCover = true;
        }
        formik.setFieldValue("photos", filtered);
    };

    return (
        <section className="bg-white rounded-[10px] sm:rounded-[20px] p-4 md:p-8 border border-gray-100 shadow-sm md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                        <Camera size={20} className="text_color" />
                    </div>
                    <h2 className="text-[20px] md:text-[24px] font-[600] text-[#1e293b] whitespace-nowrap">Photo Gallery</h2>
                </div>
                <div className="w-fit bg-[#f8faff] px-4 py-1.5 rounded-lg border border-gray-100">
                    <span className="text-[12px] font-bold text-gray-400">
                        {photos.length}/10 Uploaded
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                {/* Upload Area */}
                <div className="relative bg-[#f8faff] border-2 border-dashed border-blue-100/50 rounded-[10px] md:rounded-[20px] p-3 md:p-8 flex flex-col items-center justify-center gap-5 hover:bg-blue-50/50 transition-all cursor-pointer group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <UploadCloud size={32} className="text_color" />
                    </div>
                    <div className="text-center">
                        <p className="text-[14px] md:text-[19px] font-[550] text-[#1e293b] mb-1">Click to upload or drag photos here</p>
                        <p className="text-[12px] md:text-[14px] text-gray-400 mb-1">JPG, PNG or WEBP (Max 15MB)</p>
                    </div>
                    <input
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        multiple
                        accept="image/*"
                        onChange={handleUpload}
                    />
                </div>

                {/* Photo Grid */}
                {photos.length > 0 && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
                        {photos.map((photo) => (
                            <div key={photo.id} className="relative group aspect-square rounded-xl overflow-hidden border border-gray-100">
                                <img src={photo.url} alt="Horse" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                                {/* Badge */}
                                {photo.isCover && (
                                    <div className="absolute inset-0 bg_color/90 flex flex-col items-center justify-center lg:bottom-0 lg:top-auto lg:h-auto lg:flex-row lg:bg_color lg:py-1.5 z-0">
                                        <span className="text-[11px] lg:text-[8px] font-bold text-white uppercase tracking-widest text-center leading-tight lg:leading-normal">Cover<br className="lg:hidden" /> Photo</span>
                                    </div>
                                )}

                                {/* Selection Status */}
                                {photo.isCover && (
                                    <div className="absolute inset-0 border-[3px] border_color rounded-xl pointer-events-none z-10"></div>
                                )}

                                {/* Overlay (Delete Button) */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-start justify-end p-1.5 z-20">
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removePhoto(photo.id);
                                        }}
                                        className="p-1.5 bg-white/95 backdrop-blur-sm rounded-lg text-red-500 hover:bg-white hover:scale-110 transition-transform shadow-md"
                                    >
                                        <X size={16} strokeWidth={3} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
