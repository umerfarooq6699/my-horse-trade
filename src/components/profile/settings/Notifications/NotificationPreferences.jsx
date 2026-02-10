"use client";

import { useState } from "react";
import ActivityAlerts from "./ActivityAlerts";
import RecommendationsSearch from "./RecommendationsSearch";
import NewsUpdates from "./NewsUpdates";
import ActionButtons from "./ActionButtons";

export default function NotificationPreferences() {
    const [notifications, setNotifications] = useState({
        newMessages: true,
        offerReceived: true,
        listingUpdates: true,
        savedSearchAlerts: true,
        priceDropAlerts: false,
        newsletter: true,
        partnerPromotions: false
    });

    const toggleNotification = (type) => {
        setNotifications({
            ...notifications,
            [type]: !notifications[type]
        });
    };

    return (
        <div className="space-y-6">
            {/* Section Header */}


            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-8">
                <div className="space-y-10">
                    <ActivityAlerts notifications={notifications} toggleNotification={toggleNotification} />
                    <RecommendationsSearch notifications={notifications} toggleNotification={toggleNotification} />
                    <NewsUpdates notifications={notifications} toggleNotification={toggleNotification} />
                </div>
            </div>

            <ActionButtons />
        </div>
    );
}
