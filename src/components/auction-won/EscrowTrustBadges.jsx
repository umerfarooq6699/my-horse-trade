"use client";

import React from "react";
import { HeadphonesIcon, Gavel, Landmark } from "lucide-react";

export default function EscrowTrustBadges() {
    const badges = [
        {
            icon: HeadphonesIcon,
            title: "24/7 Support",
            description: "Real humans help with your transaction."
        },
        {
            icon: Gavel,
            title: "Dispute Resolution",
            description: "We mediate any issues with the sale."
        },
        {
            icon: Landmark,
            title: "Insured Accounts",
            description: "Your money is held in FDIC insured banks."
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:pt-12 border-t border-gray-100 mt-12">
            {badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg_color/5 group-hover:text_color transition-all duration-300">
                        <badge.icon size={22} strokeWidth={2} />
                    </div>
                    <div>
                        <h4 className="mobile_heading lg_heading !text-sm mb-1">{badge.title}</h4>
                        <p className="mobile_para !leading-tight">{badge.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
