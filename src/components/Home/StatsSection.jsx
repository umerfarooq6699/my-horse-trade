export default function StatsSection() {
    return (
        <section className="mobile_spaces lg_spaces border-b border-gray-100 bg-white">
            <div className="container-width">
                <div className="grid grid-cols-3 divide-x divide-gray-100">
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text_color mb-2">1,200+</div>
                        <div className="text-gray-500 font-medium text-sm md:text-base">Premium Horses</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text_color mb-2">5,000+</div>
                        <div className="text-gray-500 font-medium text-sm md:text-base">Active Traders</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text_color mb-2">850+</div>
                        <div className="text-gray-500 font-medium text-sm md:text-base">Verified Breeders</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
