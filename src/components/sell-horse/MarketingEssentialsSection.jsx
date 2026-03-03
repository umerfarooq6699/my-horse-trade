"use client";

import { Star } from "lucide-react";

const tags = [
    "Motivated Seller", "Video Available", "Safe for Beginners",
    "Vet Checked", "Imported"
];

export default function MarketingEssentialsSection({ formik }) {
    const toggleTag = (tag) => {
        const currentTags = formik.values.promotional_tags;
        const newTags = currentTags.includes(tag)
            ? currentTags.filter(t => t !== tag)
            : [...currentTags, tag];
        formik.setFieldValue("promotional_tags", newTags);
    };

    return (
        <section className="bg-white rounded-[10px] sm:rounded-[20px] p-4 md:p-4 border border-gray-100 shadow-sm md:mb-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <Star size={20} strokeWidth={2} />
                </div>
                <h2 className="text-nowrap sm:text-[20px] font-[700] text-[#1e293b]">Marketing Essentials</h2>
            </div>

            <div className="flex flex-col gap-8">
                {/* Headline */}
                <div className="flex flex-col gap-2">
                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Listing Headline</label>
                    <input
                        type="text"
                        name="listing_headline"
                        value={formik.values.listing_headline}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="e.g. Grand Prix Potential with Exceptional Lineage!"
                        className={`w-full bg-gray-50/50 border rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] placeholder:font-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all ${formik.touched.listing_headline && formik.errors.listing_headline ? 'border-red-500' : 'border-gray-100'}`}
                    />
                    {formik.touched.listing_headline && formik.errors.listing_headline && (
                        <p className="text-[10px] md:text-[11px] font-medium text-red-500 ml-1">{formik.errors.listing_headline}</p>
                    )}
                    <p className="text-[10px] md:text-[11px] font-medium text-gray-500 ml-1">A short, catchy phrase that appears on the search card.</p>
                </div>

                {/* Promotional Tags */}
                <div className="flex flex-col gap-4">
                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Promotional Tags</label>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <button
                                key={tag}
                                type="button"
                                onClick={() => toggleTag(tag)}
                                className={`px-5 py-2.5 rounded-full text-[12px] font-bold transition-all border ${formik.values.promotional_tags.includes(tag)
                                    ? 'bg-blue-50/50 border_color text_color'
                                    : 'bg-white border-gray-100 text-gray-600 hover:border-gray-200 hover:text-[#1e293b]'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
