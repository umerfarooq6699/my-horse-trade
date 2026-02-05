"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQAccordion({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4 w-full">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`border rounded-2xl transition-all duration-300 ${openIndex === index
                        ? "border-blue-100 bg-blue-50/30 shadow-sm"
                        : "border-gray-100 bg-white hover:border-blue-50"
                        }`}
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                        <span className={`font-semibold text-base sm:text-lg ${openIndex === index ? "text-[#2563EB]" : "text-[#0F172A]"
                            }`}>
                            {faq.question}
                        </span>
                        <div className={`p-1.5 rounded-full transition-all duration-300 ${openIndex === index ? "bg-blue-100 text-blue-600 rotate-180" : "bg-gray-50 text-gray-400"
                            }`}>
                            <ChevronDown size={20} />
                        </div>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
