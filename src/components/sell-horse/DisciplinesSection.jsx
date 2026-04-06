"use client";

import { Trophy, CheckCircle2 } from "lucide-react";

const disciplines = [
    "Racing", "Dressage", "Show Jumping", "Eventing", 
    "Western Pleasure", "Reinning", "Endurance", "Polo",
    "Driving", "Vaulting", "Showing", "Hunting",
    "Dancing" // Added from screenshot
];

export default function DisciplinesSection({ formik }) {
    const toggleDiscipline = (discipline) => {
        const currentDisciplines = formik.values.disciplines || [];
        const newDisciplines = currentDisciplines.includes(discipline)
            ? currentDisciplines.filter(d => d !== discipline)
            : [...currentDisciplines, discipline];
        formik.setFieldValue("disciplines", newDisciplines);
    };

    return (
        <section className="bg-white rounded-[10px] sm:rounded-[20px] p-4 md:p-4 border border-gray-100 shadow-sm md:mb-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <Trophy size={20} strokeWidth={2} />
                </div>
                <h2 className="text-[20px] font-[700] text-[#1e293b]">Disciplines</h2>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <p className="text-[13px] font-medium text-gray-400 leading-relaxed">
                        Select the disciplines your horse is trained or experienced in.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {disciplines.map((discipline) => {
                        const isSelected = (formik.values.disciplines || []).includes(discipline);
                        return (
                            <button
                                key={discipline}
                                type="button"
                                onClick={() => toggleDiscipline(discipline)}
                                className={`px-4 py-2 rounded-full border text-[13px] font-bold transition-all flex items-center gap-2 ${isSelected
                                    ? 'bg_color text-white border_color'
                                    : 'bg-white border-gray-100 text-[#1e293b] hover:border_color/30'
                                    }`}
                            >
                                {discipline}
                                {isSelected && <CheckCircle2 size={14} />}
                            </button>
                        );
                    })}
                </div>
                {formik.touched.disciplines && formik.errors.disciplines && (
                    <p className="text-[11px] font-bold text-red-500 ml-1">{formik.errors.disciplines}</p>
                )}
            </div>
        </section>
    );
}
