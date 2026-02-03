import Image from "next/image";
import Link from "next/link";

export default function HorseCard({ horse }) {
    return (
        <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 transform hover:-translate-y-1">
            {/* Image */}
            <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                {horse.tag && (
                    <div className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                        {horse.tag}
                    </div>
                )}
                <div className="relative w-full h-full">
                    {/* Using Next.js Image with fill for responsive fitting */}
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder loading state */}
                    <img
                        src={horse.image}
                        alt={horse.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{horse.name}</h3>
                        <p className="text-sm text-gray-500">{horse.breed} • {horse.age}yo</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">${horse.price.toLocaleString()}</p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    {horse.location}
                </div>

                <Link href={`/horses/${horse.id}`} className="block w-full text-center py-2.5 rounded-lg border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-900 hover:text-white transition-all">
                    View Details
                </Link>
            </div>
        </div>
    );
}
