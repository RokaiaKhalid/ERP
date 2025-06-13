// src/pages/login/index.tsx
import LoginForm from "./../../features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12">
      {/* Logo */}
      <div className="text-3xl font-bold mb-6">
        <span className="text-gray-900">Content</span>
        <span className="text-[#f26322]">Ops</span>
      </div>

      <LoginForm />
    </div>
  );
}
