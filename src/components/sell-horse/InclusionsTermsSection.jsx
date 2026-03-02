"use client";

import { useState } from "react";
import { ClipboardCheck } from "lucide-react";

const inclusions = [
    "Registration Papers", "Recent Vet X-Rays",
    "Tack (Saddle/Bridle)", "Blankets/Rugs"
];

export default function InclusionsTermsSection() {
    const [selectedInclusions, setSelectedInclusions] = useState([]);

    const toggleInclusion = (item) => {
        if (selectedInclusions.includes(item)) {
            setSelectedInclusions(selectedInclusions.filter(i => i !== item));
        } else {
            setSelectedInclusions([...selectedInclusions, item]);
        }
    };

    return (
        <section className="bg-white rounded-[10px] sm:rounded-[20px] p-4 md:p-4 border border-gray-100 shadow-sm md:mb-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <ClipboardCheck size={20} strokeWidth={2} />
                </div>
                <h2 className="text-[20px] font-[700] text-[#1e293b]">Inclusions & Terms</h2>
            </div>

            <div className="flex flex-col gap-8">
                {/* Checklist */}
                <div className="flex flex-col gap-4">
                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">What is included in the sale?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {inclusions.map((item) => (
                            <button
                                key={item}
                                onClick={() => toggleInclusion(item)}
                                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${selectedInclusions.includes(item)
                                    ? 'bg-blue-50/30 border_color shadow-sm'
                                    : 'bg-white border-gray-100 hover:border-gray-200'
                                    }`}
                            >
                                <div className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${selectedInclusions.includes(item)
                                    ? 'border_color bg_color'
                                    : 'border-gray-200 bg-gray-50'
                                    }`}>
                                    {selectedInclusions.includes(item) && (
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    )}
                                </div>
                                <span className={`text-[13px] font-bold ${selectedInclusions.includes(item) ? 'text-[#1e293b]' : 'text-gray-600'
                                    }`}>
                                    {item}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Disclaimers */}
                <div className="flex flex-col gap-2">
                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Disclaimers / Special Conditions</label>
                    <textarea
                        placeholder="Enter any additional terms or conditions here..."
                        className="w-full h-32 bg-gray-50/50 border border-gray-100 rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] placeholder:font-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all resize-none"
                    />
                </div>
            </div>
        </section>
    );
}
