"use client";

export default function ActivityAlerts({ notifications, toggleNotification }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="text-gray-400">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Activity Alerts</h3>
                </div>
                <button className="text-xs font-bold text-gray-500 hover:text-gray-700">Enable all</button>
            </div>

            <div className="space-y-6 border-b border-gray-100 pb-8 pl-0 sm:pl-8">
                {/* New Messages */}
                <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4 sm:pr-8">
                        <p className="text-sm font-bold text-gray-900 mb-1">New Messages</p>
                        <p className="text-sm text-gray-500 leading-relaxed">Get notified immediately when you receive a message from a buyer or seller.</p>
                    </div>
                    <button className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${notifications.newMessages ? "bg_color" : "bg-gray-200"}`} onClick={() => toggleNotification('newMessages')}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${notifications.newMessages ? "translate-x-5" : "translate-x-1"}`} />
                    </button>
                </div>

                {/* Offer Received */}
                <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4 sm:pr-8">
                        <p className="text-sm font-bold text-gray-900 mb-1">Offer Received</p>
                        <p className="text-sm text-gray-500 leading-relaxed">Receive an email when someone makes an offer on one of your horses.</p>
                    </div>
                    <button className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${notifications.offerReceived ? "bg_color" : "bg-gray-200"}`} onClick={() => toggleNotification('offerReceived')}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${notifications.offerReceived ? "translate-x-5" : "translate-x-1"}`} />
                    </button>
                </div>

                {/* Listing Status Updates */}
                <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4 sm:pr-8">
                        <p className="text-sm font-bold text-gray-900 mb-1">Listing Status Updates</p>
                        <p className="text-sm text-gray-500 leading-relaxed">Alerts when your listing is approved, expiring, or requires attention.</p>
                    </div>
                    <button className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${notifications.listingUpdates ? "bg_color" : "bg-gray-200"}`} onClick={() => toggleNotification('listingUpdates')}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${notifications.listingUpdates ? "translate-x-5" : "translate-x-1"}`} />
                    </button>
                </div>
            </div>
        </div>
    );
}
