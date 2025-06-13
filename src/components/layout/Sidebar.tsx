// src/components/layout/Sidebar.tsx
import {
  LayoutDashboard,
  FileText,
  Workflow,
  ShieldCheck,
  Settings,
  ScanSearch,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "./../../lib/utils";

import { useTranslation } from "react-i18next";


const navItems = [
  { key: "dashboard", icon: LayoutDashboard, path: "/dashboard/admin" },
  { key: "users", icon: ShieldCheck, path: "/dashboard/admin/users" },
  { key: "documents", icon: FileText, path: "/dashboard/admin/documents" },
  { key: "workflows", icon: Workflow, path: "/dashboard/admin/workflows" },
  { key: "audit", icon: ShieldCheck, path: "/dashboard/admin/audit" },
  { key: "settings", icon: Settings, path: "/dashboard/admin/settings" },
  { key: "ocr", icon: ScanSearch, path: "/dashboard/admin/ocr" },
];



export default function Sidebar() {
  const { t } = useTranslation();

  return (
    <aside className="w-[250px] min-h-screen border-r bg-white px-4 py-6 shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold mb-8">
        <span className="text-gray-900">Content</span>
        <span className="text-[#f26322]">Ops</span>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {navItems.map(({ key, icon: Icon, path }) => (
          <NavLink
            key={key}
            to={path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-all",
                isActive ? "bg-[#f26322] text-white" : "text-gray-600 hover:bg-gray-100"
              )
            }
          >
            <Icon className="w-5 h-5" />
            {t(`sidebar.${key}`)}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
