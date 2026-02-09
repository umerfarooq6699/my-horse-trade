export default function PlatformEvolution() {
    const timeline = [
        {
            year: "2022",
            title: "Concept & Foundation",
            description: "The idea was born to digitize the equestrian trade industry, including research and planning phases to digitalize the marketplace."
        },
        {
            year: "2023",
            title: "Beta Platform Launch",
            description: "Released for a select group of horse breeders and users, the first beta testing occurred during the first testing period."
        },
        {
            year: "2023",
            title: "Smart Contract Integration",
            description: "Introduced Secure Payments and smart contract-based property transfers, which is a core feature."
        },
        {
            year: "2024",
            title: "Global Expansion",
            description: "Introducing blockchain-based horse passports and expanded global reach to bring efficiency and transparency to the community."
        }
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="container-width mx-auto flex flex-col items-center">
                <div className="text-center mb-16">
                    <span className="text_color font-bold uppercase tracking-widest text-xs">OUR JOURNEY</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-2">Evolution of a Platform</h2>
                </div>

                <div className="max-w-3xl w-full">
                    {timeline.map((item, index) => (
                        <div key={index} className="flex gap-8 group">
                            {/* Left Timeline Bar */}
                            <div className="flex flex-col items-center">
                                <div className="w-2.5 h-2.5 rounded-full bg_color ring-4 ring-blue-50 z-10"></div>
                                {index !== timeline.length - 1 && (
                                    <div className="w-px h-full bg-gray-100 flex-grow my-1 group-hover:bg-blue-200 transition-colors"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="pb-12">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="bg-blue-100 text_color text-sm font-bold px-2.5 py-1 rounded-md">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-[#0F172A]">{item.title}</h3>
                                </div>
                                <p className="text-gray-500 leading-relaxed text-sm max-w-xl">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
