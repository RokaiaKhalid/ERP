// src/app/layout/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "./../../components/layout/Sidebar";
import Navbar from "./../../components/layout/Navbar";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function MainLayout() {
const { i18n } = useTranslation();

useEffect(() => {
  const html = document.documentElement;
  if (i18n.language === "ar") {
    html.setAttribute("dir", "rtl");
  } else {
    html.setAttribute("dir", "ltr");
  }
}, [i18n.language]);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-4">
          <Outlet /> {/* Nested routes render here */}
        </main>
      </div>
    </div>
  );
}
