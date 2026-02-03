import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/hero-bg.png')" }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10 bg-gradient-to-t from-gray-900/80 via-transparent to-black/20"></div>

            {/* Content */}
            <div className="relative z-20 container-width text-center px-4">
                <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-white mb-6 uppercase">
                    Best Horse Marketplace
                </span>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                    The Future of <br className="hidden md:block" />
                    <span className="text-white">Horse Trading</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    The online marketplace where incredible horses find good homes.
                    We built the most advanced trading platform for you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/horses" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20">
                        Find a Horse ↗
                    </Link>
                    <Link href="/sell" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all">
                        Sell a Horse
                    </Link>
                </div>
            </div>
        </section>
    );
}
