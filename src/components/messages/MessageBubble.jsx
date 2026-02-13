"use client";

import React from "react";
import { Check, CheckCheck, FileText, Download } from "lucide-react";

export default function MessageBubble({ message, isSender }) {
    return (
        <div className={`flex flex-col ${isSender ? "items-end" : "items-start"} space-y-1.5`}>
            {/* Bubble */}
            <div className={`max-w-[80%] px-6 py-4 rounded-[28px] text-[13px] font-bold leading-relaxed shadow-sm ${isSender
                    ? "bg-[#3356D0] text-white rounded-tr-none"
                    : "bg-white text-[#1e293b] border border-gray-100 rounded-tl-none"
                }`}>
                {message.content}

                {/* Attachment if any */}
                {message.attachment && (
                    <div className={`mt-4 p-4 rounded-2xl border flex items-center gap-4 group cursor-pointer transition-all ${isSender
                            ? "bg-white/10 border-white/10 hover:bg-white/20"
                            : "bg-gray-50 border-gray-100 hover:border_color/20"
                        }`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isSender ? "bg-white/20" : "bg-white shadow-sm text_color"
                            }`}>
                            <FileText size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[12px] font-black truncate">{message.attachment.name}</p>
                            <p className={`text-[10px] uppercase tracking-widest font-bold opacity-60`}>
                                {message.attachment.size} • {message.attachment.type}
                            </p>
                        </div>
                        <Download size={16} className={`opacity-60 group-hover:opacity-100 transition-opacity`} />
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="flex items-center gap-1.5 px-2">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{message.timestamp}</span>
                {isSender && (
                    <div className="text-blue-400">
                        {message.status === 'read' ? <CheckCheck size={12} strokeWidth={3} /> : <Check size={12} strokeWidth={3} />}
                    </div>
                )}
            </div>
        </div>
    );
}
