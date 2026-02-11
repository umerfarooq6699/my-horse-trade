"use client";

export default function RecommendationsSearch({ notifications, toggleNotification }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="text-gray-400">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3 className="sm:text-lg font-bold text-gray-900">Recommendations & Search</h3>
                </div>
            </div>

            <div className="space-y-6 border-b border-gray-100 pb-8 pl-0 sm:pl-8">
                {/* Saved Search Alerts */}
                <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4 sm:pr-8">
                        <p className="text-sm font-bold text-gray-900 mb-1">Saved Search Alerts</p>
                        <p className="text-sm text-gray-500 leading-relaxed">Daily summary of new horses matching your saved search criteria.</p>
                    </div>
                    <button className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${notifications.savedSearchAlerts ? "bg_color" : "bg-gray-200"}`} onClick={() => toggleNotification('savedSearchAlerts')}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${notifications.savedSearchAlerts ? "translate-x-5" : "translate-x-1"}`} />
                    </button>
                </div>

                {/* Price Drop Alerts */}
                <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4 sm:pr-8">
                        <p className="text-sm font-bold text-gray-900 mb-1">Price Drop Alerts</p>
                        <p className="text-sm text-gray-500 leading-relaxed">Notify me when a horse I've favorited drops in price.</p>
                    </div>
                    <button className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${notifications.priceDropAlerts ? "bg_color" : "bg-gray-200"}`} onClick={() => toggleNotification('priceDropAlerts')}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${notifications.priceDropAlerts ? "translate-x-5" : "translate-x-1"}`} />
                    </button>
                </div>
            </div>
        </div>
    );
}
