"use client";

import React, { useState } from "react";
import { Info, Flag, Shield, Paperclip, Image as ImageIcon, Smile, Send, CheckCircle2, Globe } from "lucide-react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ user }) {
    const [messageText, setMessageText] = useState("");

    const mockMessages = [
        {
            id: 1,
            sender: "other",
            content: "Hi there! I'm really interested in the Andalusian Stallion you listed. He looks magnificent.",
            timestamp: "10:23 AM",
        },
        {
            id: 2,
            sender: "other",
            content: "One quick question before I make an offer - is the vet check recent? Could you share the documents?",
            timestamp: "10:24 AM",
        },
        {
            id: 3,
            sender: "me",
            content: "Hello Sarah! Yes, absolutely. We just had a full exam done yesterday.",
            timestamp: "10:30 AM",
            status: "read"
        },
        {
            id: 4,
            sender: "me",
            content: "Here is the file. Let me know if you need anything else!",
            timestamp: "10:31 AM",
            status: "read",
            attachment: {
                name: "Vet_Report_Oct202...",
                size: "2.4 MB",
                type: "PDF"
            }
        }
    ];

    return (
        <div className="flex-1 flex flex-col bg-[#F8FAFC] h-full overflow-hidden">
            {/* Header */}
            <div className="h-24 bg-white border-b border-gray-100 px-8 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-gray-100 overflow-hidden">
                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-base font-black text-[#1e293b]">{user.name}</h3>
                            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-50 rounded-lg border border-green-100">
                                <CheckCircle2 size={10} className="text-green-500" />
                                <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">Verified</span>
                            </div>
                        </div>
                        <p className="text-[10px] font-black text-green-500 uppercase tracking-[0.15em] mt-0.5">Online now</p>
                    </div>
                </div>

                <div className="flex items-center gap-12">
                    <div className="hidden md:flex items-center gap-4 p-2.5 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="w-10 h-10 rounded-xl bg-gray-200 overflow-hidden shrink-0">
                            <img src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=200" alt="Horse" className="w-full h-full object-cover" />
                        </div>
                        <div className="pr-4">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Regarding</p>
                            <h4 className="text-[13px] font-black text-[#1e293b] whitespace-nowrap">Andalusian Stallion</h4>
                        </div>
                        <div className="pl-4 border-l border-gray-100">
                            <span className="text-sm font-black text_color">$15,000</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="p-3 hover:bg-gray-50 rounded-2xl text-gray-400 transition-colors">
                            <Info size={20} />
                        </button>
                        <button className="p-3 hover:bg-gray-50 rounded-2xl text-gray-400 transition-colors">
                            <Flag size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-10">
                {/* Safety Tip */}
                <div className="max-w-2xl mx-auto py-4 px-6 bg-orange-50/50 border border-orange-100/50 rounded-3xl flex items-center gap-4 mb-16">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-orange-500 shadow-sm shrink-0">
                        <Shield size={20} />
                    </div>
                    <p className="text-[12px] font-bold text-orange-800 leading-relaxed">
                        <span className="font-black uppercase tracking-widest">Safety Tip:</span> Keep all communications and payments within MyHorseTrade. Never transfer money via wire transfer outside the platform.
                    </p>
                </div>

                <div className="text-center">
                    <span className="px-4 py-1.5 bg-gray-50/50 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Today</span>
                </div>

                <div className="max-w-4xl mx-auto flex flex-col gap-8">
                    {mockMessages.map((msg) => (
                        <MessageBubble key={msg.id} message={msg} isSender={msg.sender === 'me'} />
                    ))}
                </div>
            </div>

            {/* Input Area */}
            <div className="p-8 bg-white border-t border-gray-100 shrink-0">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-50/50 rounded-[32px] p-2 border border-gray-100 focus-within:border_color focus-within:bg-white focus-within:shadow-xl focus-within:shadow-blue-50/50 transition-all">
                        <div className="flex items-end gap-2 px-4 pb-2 pt-4">
                            <div className="flex items-center gap-2 mb-2">
                                <button className="p-2.5 hover:bg-white hover:shadow-sm rounded-xl text-gray-400 hover:text_color transition-all">
                                    <Paperclip size={20} />
                                </button>
                                <button className="p-2.5 hover:bg-white hover:shadow-sm rounded-xl text-gray-400 hover:text_color transition-all">
                                    <ImageIcon size={20} />
                                </button>
                            </div>

                            <textarea
                                value={messageText}
                                onChange={(e) => setMessageText(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 bg-transparent border-none outline-none py-3 text-sm font-bold text-[#1e293b] placeholder:text-gray-300 resize-none max-h-32 min-h-12"
                                rows={1}
                            />

                            <div className="flex items-center gap-3 mb-2">
                                <button className="p-2.5 hover:bg-white hover:shadow-sm rounded-xl text-gray-400 hover:text_color transition-all">
                                    <Smile size={20} />
                                </button>
                                <button
                                    className={`p-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all ${messageText.trim()
                                            ? "bg_color text-white shadow-lg shadow-blue-100 scale-105 active:scale-95"
                                            : "bg-gray-200 text-gray-400 scale-100"
                                        }`}
                                >
                                    <Send size={20} strokeWidth={2.5} />
                                    <span className="text-xs font-black uppercase tracking-widest px-1">Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-6 mt-4">
                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
                            Press <span className="text-gray-400 border border-gray-200 px-1 rounded mx-1">Enter</span> to send
                        </p>
                        <div className="flex items-center gap-1.5 grayscale opacity-50">
                            <Shield size={12} className="text_color" />
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Protected by Buyer Protection</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
