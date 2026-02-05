import SubscriptionHeader from "@/components/subscriptions/SubscriptionHeader";
import PricingSection from "@/components/subscriptions/PricingSection";
import TrustedBy from "@/components/subscriptions/TrustedBy";
import SubscriptionFAQ from "@/components/subscriptions/SubscriptionFAQ";
import SubscriptionCTA from "@/components/subscriptions/SubscriptionCTA";

export const metadata = {
    title: "Subscriptions | My Horse Trade",
    description: "Upgrade your stable with professional tools designed for the modern equestrian market. Choose the plan that fits your ambitions.",
};

export default function SubscriptionsPage() {
    return (
        <main className="min-h-screen bg-white mobile_spaces lg_spaces">
            <div className="container-width mx-auto">
                <SubscriptionHeader />
                <PricingSection />
                <TrustedBy />
                <SubscriptionFAQ />
                <SubscriptionCTA />
            </div>
        </main>
    );
}
