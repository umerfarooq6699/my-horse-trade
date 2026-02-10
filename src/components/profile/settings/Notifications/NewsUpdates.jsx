"use client";

export default function NewsUpdates({ notifications, toggleNotification }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="text-gray-400">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">News & Updates</h3>
                </div>
            </div>

            <div className="space-y-6 pb-2 pl-0 sm:pl-8">
                {/* MyHorseTrade Newsletter */}
                <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4 sm:pr-8">
                        <p className="text-sm font-bold text-gray-900 mb-1">MyHorseTrade Newsletter</p>
                        <p className="text-sm text-gray-500 leading-relaxed">Weekly digest of top equestrian news and featured listings.</p>
                    </div>
                    <button className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${notifications.newsletter ? "bg_color" : "bg-gray-200"}`} onClick={() => toggleNotification('newsletter')}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${notifications.newsletter ? "translate-x-5" : "translate-x-1"}`} />
                    </button>
                </div>

                {/* Partner Promotions */}
                <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4 sm:pr-8">
                        <p className="text-sm font-bold text-gray-900 mb-1">Partner Promotions</p>
                        <p className="text-sm text-gray-500 leading-relaxed">Special offers from our trusted equestrian partners and brands.</p>
                    </div>
                    <button className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${notifications.partnerPromotions ? "bg_color" : "bg-gray-200"}`} onClick={() => toggleNotification('partnerPromotions')}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${notifications.partnerPromotions ? "translate-x-5" : "translate-x-1"}`} />
                    </button>
                </div>
            </div>
        </div>
    );
}
