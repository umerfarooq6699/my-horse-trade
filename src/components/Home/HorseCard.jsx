import Link from "next/link";

export default function HorseCard({ horse }) {
    return (
        <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 transform h-full flex flex-col">
            {/* Image */}
            <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                {horse.tag && (
                    <div className="absolute top-4 left-4 z-10 bg-[#FF6B00] text-white text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wide flex items-center gap-1 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M2.5 13.5l5.5-8 2 3h9l-6.5 10-2-3h-8z" /></svg>
                        {horse.tag}
                    </div>
                )}
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    <img
                        src={horse.image}
                        alt={horse.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--theme-color)] transition-colors mb-1">{horse.name}</h3>
                    <p className="text-sm text-gray-400 font-medium">{horse.breed} • {horse.age} Years</p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                    <p className="text-xl font-bold text_color">${horse.price.toLocaleString()}</p>
                    <Link href={`/marketplace/${horse.id}`} className="text-xs font-bold text-gray-900 uppercase tracking-widest hover:text-[var(--theme-color)] transition-colors flex items-center gap-1">
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}
