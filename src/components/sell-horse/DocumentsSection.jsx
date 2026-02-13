"use client";

import { FileText, Plus, Trash2, Lock } from "lucide-react";

export default function DocumentsSection() {
    const documents = [
        { id: 1, name: "Vet_Certificate_2023.pdf", status: "Private" },
    ];

    return (
        <section className="bg-white rounded-[32px] p-5 md:p-8 border border-gray-100 shadow-sm md:mb-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <FileText size={20} strokeWidth={2} />
                </div>
                <h2 className="text-xl font-bold text-[#1e293b]">Documents</h2>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <p className="text-[13px] font-medium text-gray-400 leading-relaxed">
                        Upload vet checks, registration papers, or X-rays. (Private by default)
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    {documents.map((doc) => (
                        <div key={doc.id} className="p-4 bg-gray-50/50 border border-gray-100 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border_color/20 transition-all">
                            <div className="flex items-center gap-4 w-full sm:w-auto overflow-hidden">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-red-400 shadow-sm shrink-0">
                                    <FileText size={18} />
                                </div>
                                <span className="text-[13px] font-bold text-[#1e293b] truncate">{doc.name}</span>
                            </div>
                            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                                <span className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[9px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                                    <Lock size={10} />
                                    {doc.status}
                                </span>
                                <button className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="flex items-center gap-2 text_color text-[11px] font-bold uppercase tracking-wider mt-2 group hover:gap-3 transition-all">
                    <Plus size={16} strokeWidth={3} />
                    Upload Document
                </button>
            </div>
        </section>
    );
}
