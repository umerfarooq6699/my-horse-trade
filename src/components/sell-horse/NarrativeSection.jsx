import { FileText } from "lucide-react";

export default function NarrativeSection({ formik }) {
    return (
        <section className="bg-white rounded-[10px] sm:rounded-[20px] p-4 md:p-4 border border-gray-100 shadow-sm md:mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 md:mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                        <FileText size={20} strokeWidth={2} />
                    </div>
                    <h2 className="text-[20px] font-[700] text-[#1e293b]">Description</h2>
                </div>
            </div>

            <div className={`flex flex-col border rounded-3xl overflow-hidden transition-all focus-within:ring-2 focus-within:ring_color/20 focus-within:border_color ${formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-100'}`}>
                {/* Text Area */}
                <textarea
                    name="description"
                    value={formik.values.description}
                    onChange={(e) => formik.setFieldValue("description", e.target.value)}
                    onBlur={formik.handleBlur}
                    placeholder="Tell their story. Mention temperament, health history, competition results..."
                    className="w-full min-h-[150px] p-8 text-[15px] font-medium text-[#1e293b] leading-relaxed bg-white focus:outline-none resize-none"
                    maxLength={5000}
                />

                {/* Footer Status */}
                <div className="px-8 py-4 bg-gray-50/30 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-medium text-gray-400">Minimum 100 characters recommended</span>
                        {formik.touched.description && formik.errors.description && (
                            <span className="text-[11px] font-bold text-red-500">{formik.errors.description}</span>
                        )}
                    </div>
                    <span className={`text-[11px] font-bold tracking-widest ${formik.values.description.length > 4500 ? 'text-orange-500' : 'text-gray-400'}`}>
                        {formik.values.description.length}/5000
                    </span>
                </div>
            </div>
        </section>
    );
}
