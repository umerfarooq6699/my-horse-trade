import { Activity } from "lucide-react";

export default function MetricsSection({ formik }) {
    return (
        <section className="bg-white rounded-[10px] sm:rounded-[20px] p-4 md:p-4 border border-gray-100 shadow-sm md:mb-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <Activity size={20} strokeWidth={2} />
                </div>
                <h2 className="text-[20px] font-[700] text-[#1e293b]">Metrics</h2>
            </div>

            <div className="grid grid-cols-1 gap-3 md:gap-6">
                {/* Age Slider */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Age (Years)</label>
                        <span className="text-[15px] font-bold text_color">{formik.values.age} yrs</span>
                    </div>
                    <div className="relative w-full h-1.5 bg-gray-100 rounded-full group">
                        <input
                            type="range"
                            name="age"
                            min="0"
                            max="30"
                            step="1"
                            value={formik.values.age}
                            onChange={(e) => formik.setFieldValue("age", parseInt(e.target.value))}
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div
                            className="absolute left-0 top-0 h-full bg_color rounded-full transition-all"
                            style={{ width: `${(formik.values.age / 30) * 100}%` }}
                        ></div>
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border_color rounded-full shadow-md transition-all group-hover:scale-110"
                            style={{ left: `calc(${(formik.values.age / 30) * 100}% - 8px)` }}
                        ></div>
                    </div>
                    <div className="flex justify-between px-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Foal</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">30+</span>
                    </div>
                </div>

                {/* Height Slider */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Height (Hands)</label>
                        <span className="text-[15px] font-bold text_color">{parseFloat(formik.values.height).toFixed(1)} hh</span>
                    </div>
                    <div className="relative w-full h-1.5 bg-gray-100 rounded-full group">
                        <input
                            type="range"
                            name="height"
                            min="8"
                            max="20"
                            step="0.1"
                            value={formik.values.height}
                            onChange={(e) => formik.setFieldValue("height", parseFloat(e.target.value))}
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div
                            className="absolute left-0 top-0 h-full bg_color rounded-full transition-all"
                            style={{ width: `${((formik.values.height - 8) / (20 - 8)) * 100}%` }}
                        ></div>
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border_color rounded-full shadow-md transition-all group-hover:scale-110"
                            style={{ left: `calc(${((formik.values.height - 8) / (20 - 8)) * 100}% - 8px)` }}
                        ></div>
                    </div>
                    <div className="flex justify-between px-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pony</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Draft</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
