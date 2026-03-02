export default function StatsSection() {
    const stats = [
        { value: "1,200+", label: "Premium Horses Sold" },
        { value: "5,000+", label: "Active Global Buyers" },
        { value: "850", label: "Verified Breeders" }
    ];

    return (
        <section className="mobile_spaces lg_spaces bg-[#f8faff]">
            <div className="container-width">
                <div className="bg-white rounded-[2rem] border border-gray-100/80 shadow-sm px-6 py-10 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                        {stats.map((stat, index) => (
                            <div key={index} className={`text-center flex flex-col items-center justify-center relative ${index !== 0 ? 'md:before:content-[""] md:before:absolute md:before:left-0 md:before:top-1/4 md:before:h-1/2 md:before:w-px md:before:bg-gray-100' : ''}`}>
                                <div className="text-3xl sm:text-3xl md:text-4xl font-[600] text_color mb-3 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 font-bold text-[10px] md:text-xs tracking-[0.05em]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
