"use client";

import React from "react";
import { Search, SquarePen, CheckCircle2 } from "lucide-react";

const mockThreads = [
    {
        id: 1,
        name: "Sarah Jenkins",
        avatar: "https://avatar.iran.liara.run/public/girl?username=Sarah",
        lastMessage: "Re: Andalusian Stallion - Is the vet check rece...",
        time: "2m ago",
        isOnline: true,
        isVerified: true,
        unread: true,
    },
    {
        id: 2,
        name: "Mark O'Conner",
        avatar: "https://avatar.iran.liara.run/public/boy?username=Mark",
        lastMessage: "Quarter Horse Mare - Offer received",
        time: "1d ago",
        isOnline: false,
        isVerified: false,
        unread: false,
    },
    {
        id: 3,
        name: "Elite Stables Inc.",
        avatar: "https://avatar.iran.liara.run/public/boy?username=Elite",
        lastMessage: "Question about shipping logistics to Kentuc...",
        time: "3d ago",
        isOnline: true,
        isVerified: true,
        unread: false,
    },
    {
        id: 4,
        name: "Jessica Wu",
        avatar: "https://avatar.iran.liara.run/public/girl?username=Jessica",
        lastMessage: "Thanks for the info!",
        time: "1w ago",
        isOnline: false,
        isVerified: false,
        unread: false,
    }
];

export default function MessageSidebar({ activeId, onSelect }) {
    return (
        <div className="w-full lg:w-[350px] border-r border-gray-100 flex flex-col bg-white h-full">
            {/* Header */}
            <div className="p-6 flex justify-between items-center">
                <h1 className="text-2xl font-black text-[#1e293b] tracking-tight">Messages</h1>
                <button className="p-2 hover:bg-gray-50 rounded-xl text-gray-400 transition-colors">
                    <SquarePen size={20} />
                </button>
            </div>

            {/* Search */}
            <div className="px-6 pb-6">
                <div className="relative group">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text_color transition-colors" />
                    <input
                        type="text"
                        placeholder="Search conversations..."
                        className="w-full bg-gray-50 border border-transparent focus:border_color focus:bg-white rounded-2xl pl-12 pr-6 py-3.5 text-sm font-bold text-[#1e293b] outline-none transition-all placeholder:font-bold placeholder:text-gray-300"
                    />
                </div>
            </div>

            {/* Thread List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-2 pb-6">
                <div className="space-y-1">
                    {mockThreads.map((thread) => (
                        <button
                            key={thread.id}
                            onClick={() => onSelect(thread.id)}
                            className={`w-full flex items-start gap-4 p-4 rounded-3xl transition-all duration-300 group ${activeId === thread.id
                                    ? "bg-blue-50/50"
                                    : "hover:bg-gray-50"
                                }`}
                        >
                            <div className="relative flex-shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-gray-100 overflow-hidden">
                                    <img src={thread.avatar} alt={thread.name} className="w-full h-full object-cover" />
                                </div>
                                {thread.isOnline && (
                                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                                )}
                            </div>

                            <div className="flex-1 text-left min-w-0">
                                <div className="flex justify-between items-start mb-0.5">
                                    <div className="flex items-center gap-1 min-w-0">
                                        <h4 className={`text-sm font-black truncate ${activeId === thread.id ? "text_color" : "text-[#1e293b]"}`}>
                                            {thread.name}
                                        </h4>
                                        {thread.isVerified && <CheckCircle2 size={12} className="text-blue-500 flex-shrink-0" />}
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap ml-2">{thread.time}</span>
                                </div>
                                <p className={`text-[12px] font-bold truncate ${thread.unread ? "text-gray-600 font-extrabold" : "text-gray-400"}`}>
                                    {thread.lastMessage}
                                </p>
                            </div>

                            {thread.unread && <div className="w-2 h-2 rounded-full bg_color mt-2.5"></div>}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
