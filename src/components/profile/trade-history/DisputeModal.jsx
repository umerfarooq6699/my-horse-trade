"use client";

import { X, Search, Upload, Send } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function DisputeModal({ isOpen, onClose, initialData }) {
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        horseName: "",
        horseId: "",
        transactionId: "",
        counterparty: "",
        disputeType: "",
        description: "",
        evidence: []
    });

    // Handle initial data when modal opens
    useEffect(() => {
        if (isOpen && initialData) {
            setFormData({
                horseName: initialData.horseName || "",
                horseId: initialData.horseId || "",
                transactionId: initialData.transactionId || "",
                counterparty: initialData.counterparty || "",
                disputeType: "",
                description: "",
                evidence: []
            });
        }
    }, [isOpen, initialData]);

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

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prev => ({ ...prev, evidence: [...prev.evidence, ...files] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dispute submitted:", formData);
        onClose();
    };

    const disputeTypes = [
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
            <div className="relative w-full max-w-xl bg-white rounded-[20px] md:rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 flex flex-col max-h-[95vh]">
                {/* Header */}
                <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6 border-b border-gray-100 flex-shrink-0 flex justify-between items-start">
                    <div>
                        <h2 className="text-[20px] md:text-[24px] font-bold text-[#1E293B] leading-tight">Create Dispute Ticket</h2>
                        <p className="text-[12px] md:text-[14px] text-slate-500 mt-1">Please provide details about your dispute for our support team to review.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                    >
                        <X size={20} className="md:w-6 md:h-6" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 md:space-y-6 custom-scrollbar">
                    {/* Horse Name & ID Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Horse Name</label>
                            <input
                                type="text"
                                className="w-full bg-gray-50/80 border border-gray-100 rounded-[10px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none cursor-not-allowed"
                                value={formData.horseName}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">horse ID</label>
                            <input
                                type="text"
                                className="w-full bg-gray-50/80 border border-gray-100 rounded-[10px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none cursor-not-allowed"
                                value={formData.horseId}
                                readOnly
                            />
                        </div>
                    </div>

                    {/* Transaction ID & Counterparty Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Transaction ID</label>
                            <input
                                type="text"
                                className="w-full bg-gray-50/80 border border-gray-100 rounded-[10px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none cursor-not-allowed"
                                value={formData.transactionId}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Counterparty</label>
                            <input
                                type="text"
                                className="w-full bg-gray-50/80 border border-gray-100 rounded-[10px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none cursor-not-allowed"
                                value={formData.counterparty}
                                readOnly
                            />
                        </div>
                    </div>

                    {/* Dispute Type Dropdown */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Dispute Type</label>
                        <select
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-[10px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer"
                            value={formData.disputeType}
                            onChange={(e) => setFormData({ ...formData, disputeType: e.target.value })}
                            required
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
                        >
                            <option value="" disabled>Select dispute type</option>
                            {disputeTypes.map(type => <option key={type} value={type}>{type}</option>)}
                        </select>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Description</label>
                        <textarea
                            rows={4}
                            placeholder="Please provide details about the dispute..."
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-[10px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            required
                        ></textarea>
                    </div>

                    {/* Upload Evidence */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Upload Evidence</label>
                        <div 
                            onClick={handleUploadClick}
                            className="border-2 border-dashed border-gray-100 rounded-xl md:rounded-2xl bg-gray-50/30 p-4 md:p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors group"
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                multiple
                                className="hidden"
                                accept="image/*,.pdf"
                            />
                            <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors mb-2">
                                <Upload size={20} />
                            </div>
                            <p className="text-[13px] font-medium text-slate-600">
                                {formData.evidence.length > 0 
                                    ? `${formData.evidence.length} file(s) selected` 
                                    : "Click to upload evidence"
                                }
                            </p>
                        </div>
                    </div>
                </form>

                {/* Footer Actions */}
                <div className="px-6 md:px-8 py-5 md:py-6 border-t border-gray-100 flex items-center justify-end gap-3 bg-slate-50/30">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl text-[14px] font-semibold hover:bg-slate-50 transition-all shadow-sm"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={!formData.disputeType || !formData.description}
                        className="px-8 py-3 bg-[#0052CC] text-white rounded-xl text-[14px] font-semibold hover:bg-[#0747A6] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Submit Dispute
                    </button>
                </div>
            </div>
        </div>
    );
}
