// src/features/auth/components/LoginForm.tsx
import { useState } from "react";
import { Input } from "./../../../components/ui/input";
import { Button } from "./../../../components/ui/button";
import { useLoginMutation } from "../authApi";
import { useDispatch } from "react-redux";
import { setAuth } from "../authSlice";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "./../../../components/ui/checkbox";

import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const login = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login.mutateAsync({ email, password });
      dispatch(setAuth(res));
      if (remember) localStorage.setItem("token", res.token);
      navigate(`/dashboard/${res.user.role}`);
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-6">
      <h2 className="text-center text-2xl font-bold">Welcome Back !</h2>

      <div className="space-y-1">
        <label className="text-sm font-medium">
          Email Address <span className="text-red-500">*</span>
        </label>
        <Input
          type="email"
          placeholder="Example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
  <label className="text-sm font-medium">
    Password <span className="text-red-500">*</span>
  </label>
  <div className="relative">
    <Input
      type={showPassword ? "text" : "password"}
      placeholder="**************"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="pr-10"
    />
    <button
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-black"
    >
      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
    </button>
  </div>
</div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={remember}
            onCheckedChange={() => setRemember((prev) => !prev)}
          />
          <label htmlFor="remember" className="cursor-pointer">
            Remember Me
          </label>
        </div>
        <a href="#" className="text-orange-600 hover:underline font-medium">
          Forget Password ?
        </a>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#f26322] hover:bg-orange-600 text-white font-semibold rounded-md"
      >
        Sign In
      </Button>
    </form>
  );
}
