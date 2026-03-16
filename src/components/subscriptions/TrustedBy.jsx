import { Shield, Trophy, Award, Building2 } from "lucide-react";

export default function TrustedBy() {
    return (
        <section className="bg-white sm:py-2 border-y border-gray-50 mb-3 sm:mt-12">
            <div className="container-width mx-auto px-4 flex flex-col items-center">
                <p className="text-gray-600 sm:text-sm font-[600] sm:font-bold sm:tracking-[0.2em] uppercase mb-4 sm:mb-8">
                    TRUSTED BY LEADING STABLES
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-40">
                    <Shield size={28} className="text-gray-800" />
                    <Trophy size={28} className="text-gray-800" />
                    <Building2 size={28} className="text-gray-800" />
                    <Award size={28} className="text-gray-800" />
                </div>
            </div>
        </section>
    );
}
