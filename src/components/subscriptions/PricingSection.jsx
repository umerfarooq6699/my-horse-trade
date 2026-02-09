import { CheckCircle2, Circle } from "lucide-react";

export default function PricingSection() {
    const plans = [
        {
            name: "Free",
            price: "0",
            description: "Perfect for hobbyists getting started.",
            features: [
                { text: "3 Active Listings", included: true },
                { text: "Basic Support", included: true },
                { text: "Standard Visibility", included: true },
                { text: "Analytics Dashboard", included: false }
            ],
            buttonText: "Get Started",
            highlighted: false
        },
        {
            name: "Premium",
            price: "20",
            description: "For serious sellers scaling up.",
            features: [
                { text: "10 Active Listings", included: true },
                { text: "Priority Support", included: true },
                { text: '"Verified Seller" Badge', included: true },
                { text: "2x Visibility Boost", included: true },
                { text: "Basic Analytics", included: true }
            ],
            buttonText: "Go Professional",
            highlighted: true,
            badge: "RECOMMENDED"
        },
        {
            name: "Platinum",
            price: "50",
            description: "Complete dominance for large stables.",
            features: [
                { text: "Unlimited Listings", included: true },
                { text: "Dedicated Account Manager", included: true },
                { text: "Homepage Feature Spots", included: true },
                { text: "Full Analytics Dashboard", included: true }
            ],
            buttonText: "Dominate Market",
            highlighted: false
        }
    ];

    return (
        <section className="bg-white py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-3xl p-6 sm:p-8 border-2 transition-all duration-300 flex flex-col h-full ${plan.highlighted
                            ? "border_color bg-white shadow-2xl lg:scale-105 z-10"
                            : "border-gray-50 bg-[#F9FAFB] hover:border-blue-100"
                            }`}
                    >
                        {plan.badge && (
                            <div className="absolute top-0 right-10 -translate-y-1/2 bg_color text-white text-sm font-bold px-4 py-1.5 rounded-full tracking-wider">
                                {plan.badge}
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className={`text-xl font-bold mb-4 ${plan.highlighted ? "text_color" : "text-gray-900"}`}>
                                {plan.name}
                            </h3>
                            <div className="flex items-baseline mb-2">
                                <span className="text-4xl font-black text-gray-900">${plan.price}</span>
                                <span className="text-gray-500 ml-1">/month</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
                        </div>

                        <div className="flex-grow space-y-5 mb-10">
                            {plan.features.map((feature, fIndex) => (
                                <div key={fIndex} className="flex items-center gap-3">
                                    {feature.included ? (
                                        <CheckCircle2 size={18} className={plan.highlighted ? "text_color" : "text-green-500"} />
                                    ) : (
                                        <Circle size={18} className="text-gray-200" />
                                    )}
                                    <span className={`text-sm ${feature.included ? "text-gray-700 font-medium" : "text-gray-400"}`}>
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button
                            className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlighted
                                ? "bg_color text-white hover:opacity-90 shadow-lg shadow-blue-200"
                                : plan.name === "Platinum"
                                    ? "bg-[#0F172A] text-white hover:bg-gray-800"
                                    : "bg-white text-gray-900 border border-gray-100 hover:bg-gray-50"
                                }`}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
