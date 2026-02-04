"use client";

import { Info, Ruler, Calendar, ShieldCheck } from "lucide-react";

export default function SpecsRibbon({ horse }) {
    const specs = [
        { label: "BREED", value: horse.breed, icon: Info },
        { label: "HEIGHT", value: `${horse.height} hh`, icon: Ruler },
        { label: "FOALED", value: horse.foaled || "2018 (6yo)", icon: Calendar },
        { label: "GENDER", value: horse.gender || "Stallion", icon: ShieldCheck },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {specs.map((spec, idx) => (
                <div key={idx} className="p-5 bg-white border border-gray-100 rounded-3xl flex items-center gap-4 hover:shadow-xl hover:shadow-gray-50 transition-all">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                        <spec.icon size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{spec.label}</p>
                        <p className="text-sm font-bold text-gray-900">{spec.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
