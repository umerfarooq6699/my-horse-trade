"use client";

import { useState } from "react";
import SubscriptionHeader from "@/components/subscriptions/SubscriptionHeader";
import PricingSection from "@/components/subscriptions/PricingSection";
import TrustedBy from "@/components/subscriptions/TrustedBy";
import SubscriptionFAQ from "@/components/subscriptions/SubscriptionFAQ";
import SubscriptionCTA from "@/components/subscriptions/SubscriptionCTA";

export default function SubscriptionsPage() {
    const [billingCycle, setBillingCycle] = useState("monthly");

    return (
        <main className="min-h-screen bg-white mobile_spaces lg_spaces">
            <div className="container-width mx-auto">
                <SubscriptionHeader billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
                <PricingSection billingCycle={billingCycle} />
                <TrustedBy />
                <SubscriptionFAQ />
                <SubscriptionCTA />
            </div>
        </main>
    );
}
