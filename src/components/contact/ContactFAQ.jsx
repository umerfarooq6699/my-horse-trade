import FAQAccordion from "@/components/about/FAQAccordion";

export default function ContactFAQ() {
    const contactFaqs = [
        {
            question: "How long does it take to get a response?",
            answer: "We typically respond to all messages within 24 business hours. For urgent matters regarding active high-value auctions, we recommend contacting our Sales Team directly."
        },
        {
            question: "Can I schedule a consultation with a sales expert?",
            answer: "Absolutely. Our Sales Team is available for one-on-one consultations to help you manage your digital stable or discuss premium marketing opportunities."
        },
        {
            question: "What is your physical office location?",
            answer: "Our main headquarters is located in Lexington, Kentucky. While we are primarily a digital-first marketplace, we host regular events and face-to-face meetings by appointment."
        }
    ];

    return (
        <section className="bg-white py-12">
            <h4 className="text-xl font-bold text-[#0F172A] mb-8">Common Questions</h4>
            <FAQAccordion faqs={contactFaqs} />
        </section>
    );
}
