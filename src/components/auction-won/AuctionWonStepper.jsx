"use client";

import React from "react";

const steps = [
    { id: 1, label: "Auction Won", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg> },
    { id: 2, label: "Review Contract", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> },
    { id: 3, label: "Escrow", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg> },
    { id: 4, label: "Transfer", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5"><rect x="1" y="3" width="15" height="13" /><polyline points="16 8 20 8 23 11 23 16 16 16" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg> },
];

export default function AuctionWonStepper({ currentStep = 1 }) {
    return (
        <div className="w-full py-4 sm:py-6 overflow-hidden">
            <div className="flex items-start justify-between max-w-4xl mx-auto relative px-2 sm:px-4">
                {/* Connection Lines */}
                <div className="absolute top-[18px] sm:top-[24px] left-0 w-full h-[1px] sm:h-0.5 bg-gray-100 z-0"></div>

                {steps.map((step, index) => {
                    const isActive = step.id === currentStep;
                    const isCompleted = step.id < currentStep;

                    return (
                        <div key={step.id} className="relative z-10 flex flex-col items-center flex-1">
                            <div
                                className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${isActive
                                    ? "bg_color border_color text-white shadow-lg shadow-blue-100 sm:scale-110"
                                    : isCompleted
                                        ? "bg-green-500 border-green-500 text-white"
                                        : "bg-white border-gray-100 text-gray-400"
                                    }`}
                            >
                                {isCompleted ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><polyline points="20 6 9 17 4 12" /></svg>
                                ) : (
                                    <step.icon />
                                )}
                            </div>
                            <span className={`mt-2 sm:mt-3 text-[14px] sm:text-[12px] text-center transition-colors px-1 leading-tight ${isActive ? "text_color" : isCompleted ? "text-green-600" : "text-gray-400"
                                }`}>
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
