import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata = {
    title: "Contact Us | My Horse Trade",
    description: "Get in touch with My Horse Trade. Whether you are a buyer or a seller, our team is here to help you navigate our modern equestrian marketplace.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHeader />

            <section className="mobile_spaces lg_spaces pt-12">
                <div className="container-width mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>

                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-12">
                            <ContactInfo />
                            <ContactFAQ />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
