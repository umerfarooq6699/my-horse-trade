import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MeetInnovators() {
    const team = [
        {
            name: "James Sterling",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
            bio: "Former equine investment planner with 15 years in the industry."
        },
        {
            name: "Elena Rodriguez",
            role: "Chief Product Officer",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
            bio: "Product visionary behind several successful fintech marketplaces."
        },
        {
            name: "Marcus Chen",
            role: "Head of Blockchain",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
            bio: "Early blockchain architectural specialist focused on secure asset transfers."
        },
        {
            name: "Sarah Jenkins",
            role: "Director of Trust",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
            bio: "Veterinary expert specialized in equestrian pedigree health standards."
        }
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="container-width mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">Meet the Innovators</h2>
                        <p className="text-gray-500 max-w-xl">
                            A diverse team of equestrians, engineers, and visionaries working together.
                        </p>
                    </div>
                    <Link href="#" className="flex items-center gap-2 text_color font-bold text-sm hover:gap-3 transition-all">
                        View All Members <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 group shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-[#0F172A] mb-1">{member.name}</h3>
                                <p className="text_color text-sm font-semibold mb-3 uppercase tracking-wider">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
