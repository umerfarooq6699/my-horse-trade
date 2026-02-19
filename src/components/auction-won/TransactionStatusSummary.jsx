"use client";

import React from "react";
import { Layout } from "lucide-react";

export default function TransactionStatusSummary({ horse }) {
    return (
        <div className="bg-white rounded-[10px] sm:rounded-[20px] p-4 sm:p-8 border border-gray-100 shadow-sm space-y-8 flex-1">
            <div className="flex items-center gap-3">
                <Layout size={18} className="text_color" />
                <h3 className="mobile_heading lg_heading">Transaction Summary</h3>
            </div>

            <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-200 shrink-0">
                    <img src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=200" alt="Horse" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1.5 flex-1">
                    <div className="space-y-0.5">
                        <span className="block mobile_para !text-[10px] !text-gray-400 uppercase tracking-widest">Horse Name</span>
                        <h4 className="mobile_heading lg_heading !text-lg tracking-tight">{horse.name}</h4>
                    </div>
                    <div className="space-y-0.5">
                        <span className="block mobile_para !text-[10px] !text-gray-400 uppercase tracking-widest">Agreed Price</span>
                        <p className="mobile_heading lg_heading !text-base tracking-tight">${horse.price?.toLocaleString()}.00 USD</p>
                    </div>
                    <div className="pt-2">
                        <span className="px-3 py-1 bg-gray-50 text-gray-400 mobile_para !text-[10px] uppercase tracking-widest rounded-lg border border-gray-100">
                            ID: {horse.id}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
