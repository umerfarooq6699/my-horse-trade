import Link from "next/link";

export default function SubscriptionCTA() {
    return (
        <section className="bg-white sm:px-6">
            <div className="w-full md:w-[85%] lg:w-[70%] mx-auto">
                <div className="relative bg-[#0D59E2] rounded-3xl sm:rounded-[32px] overflow-hidden py-8 sm:p-12 md:py-16 text-center shadow-2xl">
                    {/* Subtle gradient effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to reach more buyers?
                        </h2>

                        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-12 leading-relaxed">
                            Join thousands of sellers who trust MyHorseTrade to find the perfect homes for their horses.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link href="#" className="w-full sm:w-min whitespace-nowrap px-10 py-4 bg-white text-[#0D59E2] font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                                Start Your Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
