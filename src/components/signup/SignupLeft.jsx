import { ShieldCheck } from "lucide-react";
import Image from "../../assets/images/signupImage.png"

export default function SignupLeft() {
    return (
        <section className="relative hidden lg:flex flex-col justify-end p-16 h-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={Image.src}
                    alt="White Horse"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-white max-w-lg">
                <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-8 border border-white/20 shadow-xl">
                    <ShieldCheck size={28} className="text-white" />
                </div>

                <h1 className="text-5xl font-bold mb-6 leading-tight">
                    The Future of <br /> Equine Trading.
                </h1>

                <p className="text-white/80 text-lg mb-12 leading-relaxed">
                    Connect with premium buyers and sellers worldwide using our secure, blockchain-verified platform.
                </p>

                {/* Social Proof */}
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="w-10 h-10 rounded-full border-2 border-[#0F172A] overflow-hidden bg-gray-200"
                            >
                                <img
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    alt="User"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-[#0F172A] bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                            +2k
                        </div>
                    </div>
                    <p className="text-sm font-medium text-white/90">
                        Trusted by over 2,000 breeders
                    </p>
                </div>
            </div>
        </section>
    );
}
