"use client";

import { X, AlertCircle, FileText, Send, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function DisputeModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        transactionId: "",
        category: "",
        subject: "",
        description: ""
    });

    // Scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dispute submitted:", formData);
        onClose();
    };

    const categories = [
        "Payment Issue",
        "Horse Condition Mismatch",
        "Documentation Missing",
        "Seller Communication",
        "Other"
    ];

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-gray-50 flex-shrink-0">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 shadow-sm ring-8 ring-red-50/30">
                            <AlertCircle size={24} />
                        </div>
                        <div>
                            <h2 className="text-[23px] font-[700] text-[#1E293B] tracking-tight">Create Dispute</h2>
                            <p className="text-[10px] font-[600] text-gray-400 uppercase tracking-widest">Resolution Center</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2.5 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all shadow-sm bg-gray-50/50"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
                    <div className="space-y-5">
                        {/* Transaction ID */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Related Transaction</label>
                            <input
                                type="text"
                                placeholder="e.g. #ORD-7728 or Horse Name"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-[10px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] md:text-[14px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all outline-none"
                                value={formData.transactionId}
                                onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                                required
                            />
                        </div>

                        {/* Category */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Dispute Category</label>
                            <div className="relative">
                                <select
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-[10px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] md:text-[14px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all appearance-none cursor-pointer"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    required
                                >
                                    <option value="" disabled>Select a category</option>
                                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <ChevronDown size={18} />
                                </div>
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Subject</label>
                            <input
                                type="text"
                                placeholder="Brief summary of the issue"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-[10px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] md:text-[14px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all outline-none"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Detailed Description</label>
                            <textarea
                                rows={4}
                                placeholder="Please provide as much detail as possible to help us resolve this issue..."
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-[10px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] md:text-[14px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all resize-none outline-none"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                required
                            ></textarea>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="py-4 bg-gray-100 text-[#1e293b] rounded-[10px] md:rounded-2xl text-[14px] font-bold hover:bg-gray-200 transition-all cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="py-4 bg_color text-white rounded-[10px] md:rounded-2xl text-[14px] font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100 cursor-pointer"
                        >
                            <Send size={16} />
                            Submit Dispute
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
