"use client";

import { ClipboardCheck, Plus, X } from "lucide-react";
import { useState } from "react";

const inclusionOptions = [
    "Saddle", "Bridle", "Winter Blanket",
    "Registration Papers", "Recent Vet X-Rays"
];

export default function InclusionsTermsSection({ formik }) {
    const [newTerm, setNewTerm] = useState("");

    const toggleInclusion = (item) => {
        const currentInclusions = formik.values.inclusions || [];
        const newInclusions = currentInclusions.includes(item)
            ? currentInclusions.filter(i => i !== item)
            : [...currentInclusions, item];
        formik.setFieldValue("inclusions", newInclusions);
    };

    const addTerm = () => {
        if (!newTerm.trim()) return;
        const currentTerms = formik.values.inclusions_and_terms || [];
        formik.setFieldValue("inclusions_and_terms", [...currentTerms, newTerm.trim()]);
        setNewTerm("");
    };

    const removeTerm = (index) => {
        const currentTerms = formik.values.inclusions_and_terms || [];
        formik.setFieldValue("inclusions_and_terms", currentTerms.filter((_, i) => i !== index));
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
                {/* Checklist (Inclusions) */}
                <div className="flex flex-col gap-4">
                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">What is included in the sale? (Inclusions)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {inclusionOptions.map((item) => {
                            const isSelected = (formik.values.inclusions || []).includes(item);
                            return (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => toggleInclusion(item)}
                                    className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${isSelected
                                        ? 'bg-blue-50/30 border_color shadow-sm'
                                        : 'bg-white border-gray-100 hover:border-gray-200'
                                        }`}
                                >
                                    <div className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${isSelected
                                        ? 'border_color bg_color'
                                        : 'border-gray-200 bg-gray-50'
                                        }`}>
                                        {isSelected && (
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        )}
                                    </div>
                                    <span className={`text-[13px] font-bold ${isSelected ? 'text-[#1e293b]' : 'text-gray-600'
                                        }`}>
                                        {item}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Custom Terms (Inclusions and Terms) */}
                <div className="flex flex-col gap-4">
                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Inclusions and Terms (Custom)</label>
                    <div className="flex flex-col gap-3">
                        {(formik.values.inclusions_and_terms || []).map((term, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <span className="text-[13px] font-medium text-[#1e293b]">{term}</span>
                                <button
                                    type="button"
                                    onClick={() => removeTerm(index)}
                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newTerm}
                            onChange={(e) => setNewTerm(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTerm())}
                            placeholder="e.g. Payment via wire transfer only"
                            className="flex-1 bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-2 text-[13px] focus:outline-none focus:border_color transition-all"
                        />
                        <button
                            type="button"
                            onClick={addTerm}
                            className="bg_color text-white p-2 rounded-xl hover:bg_color/90 transition-all"
                        >
                            <Plus size={20} />
                        </button>
                    </div>
                </div>

                {/* Disclaimers */}
                <div className="flex flex-col gap-2">
                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Disclaimers</label>
                    <textarea
                        name="disclaimers"
                        value={formik.values.disclaimers}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="e.g. Horse has a mild allergy to certain grains..."
                        className={`w-full h-32 bg-gray-50/50 border rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] placeholder:font-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all resize-none ${formik.touched.disclaimers && formik.errors.disclaimers ? 'border-red-500' : 'border-gray-100'}`}
                    />
                    {formik.touched.disclaimers && formik.errors.disclaimers && (
                        <p className="text-[10px] md:text-[11px] font-medium text-red-500 ml-1">{formik.errors.disclaimers}</p>
                    )}
                </div>
            </div>
        </section>
    );
}
