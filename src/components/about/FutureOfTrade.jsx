import { Shield, Zap, FileSearch } from "lucide-react";

export default function FutureOfTrade() {
    const features = [
        {
            icon: <Shield className="text_color" size={24} />,
            title: "Maximum Security",
            description: "Blockchain-backed transaction systems ensure your funds and assets are safe at every stage of trade and management.",
            bgColor: "bg-blue-50/50"
        },
        {
            icon: <Zap className="text_color" size={24} />,
            title: "Unmatched Speed",
            description: "Instant listings, real-time communications, and streamlined financing to get you from discovery to ownership in record time.",
            bgColor: "bg-blue-50/50"
        },
        {
            icon: <FileSearch className="text_color" size={24} />,
            title: "Pedigree Verification",
            description: "Integrated database checks to verify lineage and health history automatically, ensuring you know exactly who you're buying.",
            bgColor: "bg-blue-50/50"
        }
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="container-width mx-auto text-center mb-16 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">The Future of Trade</h2>
                <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    Experience the proud advantages of the high-end trade platform, built for the modern equestrian who values precision and peace of mind.
                </p>
            </div>

            <div className="container-width mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                    >
                        <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#0F172A] mb-4">{feature.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
