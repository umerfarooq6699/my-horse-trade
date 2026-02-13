"use client";

import React from "react";
import { ListTodo, CheckCircle2, Circle } from "lucide-react";

export default function NextStepsCard() {
    const steps = [
        {
            title: "Seller Notified",
            description: "The seller has been alerted that funds are secured. They will contact you shortly.",
            isCompleted: true
        },
        {
            title: "Arrange Transport",
            description: "Coordinate with the seller or a third-party transporter for pickup.",
            isCompleted: false
        },
        {
            title: "Confirm Delivery",
            description: "Once the horse arrives, mark the delivery as complete in your dashboard.",
            isCompleted: false
        }
    ];

    return (
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm space-y-8 flex-1">
            <div className="flex items-center gap-3">
                <ListTodo size={18} className="text_color" />
                <h3 className="text-sm font-black text-[#1e293b] tracking-tight">Next Steps</h3>
            </div>

            <div className="space-y-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                        <div className={`shrink-0 mt-0.5 ${step.isCompleted ? "text-green-500" : "text-gray-300"}`}>
                            {step.isCompleted ? <CheckCircle2 size={24} strokeWidth={2.5} /> : <Circle size={24} strokeWidth={2.5} />}
                        </div>
                        <div className="space-y-1">
                            <h4 className={`text-sm font-black ${step.isCompleted ? "text-[#1e293b]" : "text-gray-500"}`}>{step.title}</h4>
                            <p className="text-[12px] font-bold text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
