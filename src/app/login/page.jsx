import LoginForm from "@/components/login/LoginForm";
import LoginRight from "@/components/login/LoginRight";

export const metadata = {
    title: "Login | My Horse Trade",
    description: "Welcome back to My Horse Trade. Log in to access your account and manage your stable.",
};

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 sm:p-6 pt-[74px]">
            <div className="bg-white w-full max-w-[1000px] min-h-[500px] sm:min-h-[600px] rounded-3xl sm:rounded-[32px] overflow-hidden flex shadow-2xl shadow-blue-100/50">
                {/* Left Side: Form */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <LoginForm />
                </div>

                {/* Right Side: Visual */}
                <div className="hidden md:block w-1/2 p-3">
                    <LoginRight />
                </div>
            </div>
        </main>
    );
}
