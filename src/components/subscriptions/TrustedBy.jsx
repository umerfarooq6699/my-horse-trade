import { Shield, Trophy, Award, Building2 } from "lucide-react";

export default function TrustedBy() {
    return (
        <section className="bg-white py-12 border-y border-gray-50 mb-10">
            <div className="container-width mx-auto px-4 flex flex-col items-center">
                <p className="text-gray-400 text-sm font-bold tracking-[0.2em] uppercase mb-8">
                    TRUSTED BY LEADING STABLES
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40">
                    <Shield size={28} className="text-gray-600" />
                    <Trophy size={28} className="text-gray-600" />
                    <Building2 size={28} className="text-gray-600" />
                    <Award size={28} className="text-gray-600" />
                </div>
            </div>
        </section>
    );
}
