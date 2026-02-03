export default function StatsSection() {
    return (
        <section className="py-12 border-b border-gray-100 bg-white">
            <div className="container-width px-4">
                <div className="grid grid-cols-3 divide-x divide-gray-100">
                    <div className="text-center px-4">
                        <div className="text-3xl md:text-5xl font-bold text-blue-600 mb-2">1,200+</div>
                        <div className="text-gray-500 font-medium text-sm md:text-base">Premium Horses</div>
                    </div>
                    <div className="text-center px-4">
                        <div className="text-3xl md:text-5xl font-bold text-blue-600 mb-2">5,000+</div>
                        <div className="text-gray-500 font-medium text-sm md:text-base">Active Traders</div>
                    </div>
                    <div className="text-center px-4">
                        <div className="text-3xl md:text-5xl font-bold text-blue-600 mb-2">850+</div>
                        <div className="text-gray-500 font-medium text-sm md:text-base">Verified Breeders</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
