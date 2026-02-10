"use client";

import PaymentMethodExpiring from "@/components/profile/settings/Billing/PaymentMethodExpiring";
import MyWallet from "@/components/profile/settings/Billing/MyWallet";
import CurrentPlan from "@/components/profile/settings/Billing/CurrentPlan";
import PaymentMethods from "@/components/profile/settings/Billing/PaymentMethods";
import BillingHistory from "@/components/profile/settings/Billing/BillingHistory";

export default function BillingPricing() {
    return (
        <div className="space-y-6">
            <PaymentMethodExpiring />
            <MyWallet />
            <CurrentPlan />
            <PaymentMethods />
            <BillingHistory />
        </div>
    );
}
