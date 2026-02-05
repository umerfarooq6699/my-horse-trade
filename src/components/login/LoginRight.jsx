import Image from "../../assets/images/signinImage.png"

export default function LoginRight() {
    return (
        <div className="flex-1 relative overflow-hidden rounded-[24px]">
            <img
                src={Image.src}
                alt="White Horse"
                className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-10 pb-12 lg:pb-14">
                <h2 className="text-3xl font-bold text-white mb-2">Trade with Confidence.</h2>
                <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                    Join the world's most advanced marketplace for premier equines.
                </p>
            </div>
        </div>
    );
}
