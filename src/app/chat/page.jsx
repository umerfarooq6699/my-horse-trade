"use client";

import React, { useState } from "react";
import MessageSidebar from "@/components/messages/MessageSidebar";
import ChatWindow from "@/components/messages/ChatWindow";

export default function MessagesPage() {
    const [activeThreadId, setActiveThreadId] = useState(1);

    const mockUser = {
        id: 1,
        name: "Sarah Jenkins",
        avatar: "https://avatar.iran.liara.run/public/girl?username=Sarah",
        isOnline: true,
        isVerified: true,
    };

    return (
        <div className="h-screen bg-white flex overflow-hidden">
            {/* Thread Sidebar */}
            <MessageSidebar
                activeId={activeThreadId}
                onSelect={(id) => setActiveThreadId(id)}
            />

            {/* Active Conversation */}
            <ChatWindow user={mockUser} />
        </div>
    );
}
