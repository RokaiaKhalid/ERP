// src/app/layout/ProtectedRoute.tsx
import { useAuth } from "./../../features/auth/hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ role, children }: { role: string; children: React.ReactNode }) {
  const { user } = useAuth(); // From Redux

  if (!user) return <Navigate to="/login" />;
  if (user.role !== role) return <Navigate to="/unauthorized" />;

  return <>{children}</>;
}
