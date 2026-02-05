import SignupLeft from "@/components/signup/SignupLeft";
import SignupForm from "@/components/signup/SignupForm";

export const metadata = {
    title: "Create Account | My Horse Trade",
    description: "Join the future of equine trading. Create your account today and connect with premium buyers and sellers worldwide.",
};

export default function SignupPage() {
    return (
        <main className="h-screen bg-[#FDFDFD] flex flex-col lg:flex-row overflow-hidden pt-[74px] lg:pt-0">
            {/* Left Section - Hero/Image */}
            <div className="hidden lg:block lg:w-1/2 h-full">
                <SignupLeft />
            </div>

            {/* Right Section - Form */}
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center bg-white lg:bg-[#FDFDFD] overflow-hidden lg:pt-[74px]">
                <div className="w-full">
                    <SignupForm />
                </div>
            </div>
        </main>
    );
}
