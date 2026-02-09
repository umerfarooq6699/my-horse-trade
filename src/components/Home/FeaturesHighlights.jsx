export default function FeaturesHighlights() {
    return (
        <section className="mobile_spaces lg_spaces bg-gray-50 border-t border-gray-200">
            <div className="container-width text-center">

                <span className="text_color font-bold uppercase tracking-widest text-xs mb-3 block">Why Choose Us</span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">The Smartest Way to Trade Horses</h2>
                <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-base sm:text-lg">Managing and trading studs and mares is complex. We simplify the entire process with trusted verification, secure payments, and global reach.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group text-left">
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text_color mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Pedigrees</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Every horse on our platform undergoes a rigorous document verification process to ensure authentic lineage and health records.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group text-left">
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text_color mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Escrow</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Funds are held safely in our neutral escrow account until both buyer and seller confirm the safe transfer and condition of the horse.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group text-left">
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text_color mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Global Logistics</h3>
                        <p className="text-gray-500 leading-relaxed">
                            We handle all the paperwork, quarantine requirements, and specialized transport logistics to get your horse home safely anywhere in the world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
