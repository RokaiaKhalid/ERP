// src/app/routes.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
// Ensure the file exists at ../pages/login.tsx or ../pages/login/index.tsx
// If the file is named differently (e.g., LoginPage.tsx), update the import accordingly:
import LoginPage from "./../pages/login";
import AdminDashboard from "./../pages/dashboard/admin";
import ManagerDashboard from "./../pages/dashboard/manager";
import TeamDashboard from "./../pages/dashboard/team";
import ProtectedRoute from "./layout/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <MainLayout />, // Sidebar/Navbar wrapper
    children: [
      {
        path: "admin",
        element: (
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "manager",
        element: (
          <ProtectedRoute role="manager">
            <ManagerDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "team",
        element: (
          <ProtectedRoute role="team">
            <TeamDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "",
        element: <Navigate to="/dashboard/team" />, // Default redirect
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);
