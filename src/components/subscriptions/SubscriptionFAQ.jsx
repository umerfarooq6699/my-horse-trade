import FAQAccordion from "@/components/about/FAQAccordion";

export default function SubscriptionFAQ() {
    const subscriptionFaqs = [
        {
            question: "Can I upgrade or downgrade my plan at any time?",
            answer: "Yes, you can upgrade your plan at any time through your stable settings. When upgrading, the change is immediate and pro-rated. Downgrades will take effect at the end of your current billing cycle."
        },
        {
            question: "Are there any hidden listing fees?",
            answer: "No, MyHorseTrade believe in transparent pricing. Your subscription covers everything including active listings, image hosting, and lead notifications. We do not charge transaction commissions."
        },
        {
            question: "What happens if my subscription expires?",
            answer: "If your subscription expires, your account will revert to the Free tier. Any active listings above the free limit (3) will be moved to 'Draft' status until you renew or reduce your inventory."
        },
        {
            question: "Do you offer discounts for annual billing?",
            answer: "Yes! Choosing annual billing gives you 2 months free (approximately 20% discount) compared to the monthly billing cycle. You can switch to annual billing at any point."
        }
    ];

    return (
        <section className="bg-white mobile_spaces lg_spaces">
            <div className="container-width mx-auto max-w-3xl">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] text-center mb-5 sm:mb-12">
                    Frequently Asked Questions
                </h2>

                <FAQAccordion faqs={subscriptionFaqs} />
            </div>
        </section>
    );
}
