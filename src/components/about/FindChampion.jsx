import Link from "next/link";
import { Rocket } from "lucide-react";

export default function FindChampion() {
    return (
        <section className="bg-white py-10 px-4 sm:px-6">
            <div className="w-full md:w-[85%] lg:w-[70%] mx-auto">
                <div className="relative bg-[#0D59E2] rounded-3xl sm:rounded-[32px] overflow-hidden p-8 sm:p-12 md:py-14 text-center shadow-2xl">
                    {/* Subtle gradient effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
                            <Rocket className="text-white" size={32} fill="white" />
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to find your next champion?
                        </h2>

                        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-12 leading-relaxed">
                            Join thousands of elite breeders, trainers, and buyers on the worlds'
                            most advanced equestrian marketplace.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link href="/marketplace" className="w-full sm:w-min whitespace-nowrap px-10 py-4 bg-white text-[#0D59E2] font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                                Browse Horses
                            </Link>
                            <Link href="#" className="w-full sm:w-min whitespace-nowrap px-10 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                                List a Horse
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
