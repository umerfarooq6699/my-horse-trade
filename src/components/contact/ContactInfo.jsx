import { Headset, Users, MapPin } from "lucide-react";

export default function ContactInfo() {
    const contactLinks = [
        {
            icon: <Headset size={24} />,
            title: "Customer Support",
            description: "For general inquiries and account help.",
            detail: "support@myhorsetrade.com",
            detailType: "email"
        },
        {
            icon: <Users size={24} />,
            title: "Sales Team",
            description: "For high-value auctions and listings.",
            detail: "sales@myhorsetrade.com",
            detailType: "email"
        },
        {
            icon: <MapPin size={24} />,
            title: "Headquarters",
            description: "123 Equestrian Way, Lexington, KY",
            detail: "Open Mon-Fri, 9am - 5pm EST",
            detailType: "text"
        }
    ];

    return (
        <div className="space-y-8">
            {/* Premium Support Image */}
            <div className="relative rounded-[32px] overflow-hidden shadow-xl aspect-video md:aspect-auto md:h-64">
                <img
                    src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop"
                    alt="White Horse Head"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-[#0F172A] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        Premium Support
                    </span>
                </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl p-4 sm:p-8 border border-gray-100 shadow-sm space-y-8">
                <h4 className="text-xl font-bold text-[#0F172A]">Other ways to connect</h4>

                <div className="space-y-8">
                    {contactLinks.map((link, index) => (
                        <div key={index} className="flex gap-4 group">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text_color flex items-center justify-center shrink-0 group-hover:bg_color group-hover:text-white transition-colors duration-300">
                                {link.icon}
                            </div>
                            <div>
                                <h5 className="font-bold text-[#0F172A] mb-1">{link.title}</h5>
                                <p className="text-sm text-gray-500 mb-2 leading-relaxed">{link.description}</p>
                                {link.detailType === "email" ? (
                                    <a href={`mailto:${link.detail}`} className="text_color font-bold text-sm hover:underline">
                                        {link.detail}
                                    </a>
                                ) : (
                                    <span className="text-gray-400 text-sm font-medium italic">
                                        {link.detail}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
