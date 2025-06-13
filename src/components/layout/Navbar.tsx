import { useTranslation } from "react-i18next";

import { Input } from "./../../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./../../components/ui/dropdown-menu";
import { Globe, LogOut, Settings, User } from "lucide-react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./../../features/auth/authSlice";

export default function TopBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language.toUpperCase());

  const switchLanguage = () => {
    const nextLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLang);
    setLanguage(nextLang.toUpperCase());
  };
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-6 py-3 border-b">
      {/* Search */}
      <div className="flex items-center gap-3 w-full max-w-lg">
        <div className="relative w-full">
          <Input
            className="w-full pl-10 rounded-full border border-gray-300"
            placeholder={t("search")}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Language + Avatar */}
      <div className="flex items-center gap-4">
        {/* Language Switch */}
        <button
          onClick={switchLanguage}
          className="text-sm text-gray-600 hover:text-black flex items-center gap-1"
        >
          <Globe className="w-4 h-4" />
          {language}
        </button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              className="w-8 h-8 rounded-full cursor-pointer object-cover"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{t("account")}</DropdownMenuLabel>
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              {t("profile")}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              {t("settings")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive"
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}
            >
              <LogOut className="w-4 h-4 mr-2" />
                {t("logout")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
