import Image from "next/image";
import { Play } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container-width mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <span className="inline-block text_color font-bold tracking-widest text-xs uppercase">
                        « THE NEXT GEN PLATFORM
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#0F172A] leading-[1.1]">
                        Redefining the <br />
                        Equestrian Market
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg">
                        Bringing old world traditions to new world technology. We are building a dynamic ecosystem, grounded by trust, to connect the buying and selling equestrians marketplace.
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                        <button className="bg_color text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition shadow-lg shadow-blue-200">
                            Our Story ↗
                        </button>
                        <button className="flex items-center gap-2 border border-blue-200 text_color px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition">
                            <div className="w-6 h-6 rounded-full border border-blue-200 flex items-center justify-center">
                                <Play size={10} fill="currentColor" />
                            </div>
                            Watch Video
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        {/* Placeholder for the horse image - In a real scenario, this would be a local asset or a high-res image */}
                        <img
                            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop"
                            alt="White Horse"
                            className="w-full h-auto object-cover min-h-[400px]"
                        />

                        {/* Glassmorphism Card */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg_color rounded-lg flex items-center justify-center text-white shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                            </div>
                            <div className="text-white">
                                <h4 className="font-semibold text-sm leading-tight">Leveraging Science,</h4>
                                <p className="text-sm opacity-80 uppercase tracking-widest">Brand Content and Beyond pedigree</p>
                            </div>
                        </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
                </div>
            </div>
        </section>
    );
}
