"use client";

import Link from "next/link";
import { CheckCircle2, Image as ImageIcon, FileText, DollarSign, HelpCircle } from "lucide-react";

const steps = [
    { id: 1, title: "1. Vital Statistics", icon: CheckCircle2, sub: "Basics", path: "/sell-horse" },
    { id: 2, title: "2. Visual Evidence", icon: ImageIcon, sub: "Visuals", path: "/sell-horse/visuals" },
    { id: 3, title: "3. The Narrative", icon: FileText, sub: "Details", path: "/sell-horse/narrative" },
    { id: 4, title: "4. Commercials", icon: DollarSign, sub: "Sales", path: "/sell-horse/commercials" },
];

export default function ProgressSidebar({ currentStep = 1, horseId }) {
    const currentStepData = steps.find(s => s.id === currentStep) || steps[0];

    return (
        <div className="w-full max-w-[280px] hidden lg:block sticky top-32 h-fit">
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1e293b] mb-1">Progress</h3>
                <p className="text-[14px] font-bold text-gray-400">Step {currentStep} of {steps.length}: {currentStepData.sub}</p>
                <div className="w-full h-1 bg-gray-100 mt-4 rounded-full overflow-hidden">
                    <div
                        className="h-full bg_color transition-all duration-500"
                        style={{ width: `${(currentStep / steps.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {steps.map((step) => {
                    const Icon = step.icon;
                    const isActive = step.id === currentStep;
                    const isCompleted = step.id < currentStep;

                    return (
                        <Link
                            key={step.id}
                            href={horseId ? `${step.path}?horse_id=${horseId}` : step.path}
                            className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${isActive
                                ? 'bg-blue-50'
                                : 'bg-transparent hover:bg-gray-50/50'
                                }`}
                        >
                            <div className={`shrink-0 ${isActive ? 'text_color' : 'text-gray-400'}`}>
                                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            </div>
                            <span className={`text-[13px] font-semibold transition-colors ${isActive ? 'text_color' : 'text-slate-600'}`}>
                                {step.title}
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* Help Tip */}
            <div className="mt-16 p-8 bg-blue-50/50 rounded-[32px] border border-blue-100/50">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text_color">
                        <HelpCircle size={18} strokeWidth={2.5} />
                        <span className="text-[13px] font-bold uppercase tracking-wider">Help Tip</span>
                    </div>
                    <p className="text-[13px] font-bold text-gray-500 leading-relaxed">
                        Listing with high-quality photos increases visibility by 40%. Ensure your asset is well-lit.
                    </p>
                </div>
            </div>
        </div>
    );
}
