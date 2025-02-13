"use client";

import { usePathname } from "next/navigation";
import {
  Home,
  Calendar,
  Users,
  FileText,
  BookOpen,
  Flag,
  Download,
} from "lucide-react";
import NavItem from "./nav-item";

const Navigation = () => {
  const pathname = usePathname();

  const routes = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Calendar, label: "Events", href: "/events" },
    { icon: Users, label: "Applications", href: "/applications" },
    { icon: BookOpen, label: "Clubs", href: "/clubs" },
    { icon: Flag, label: "Stories", href: "/stories" },
    { icon: FileText, label: "Documents", href: "/documents" },
    { icon: Download, label: "Downloads", href: "/downloads" },
  ];

  return (
    <ul className="space-y-2 px-2 pt-4 lg:pt-0">
      {routes.map((route) => (
        <NavItem
          key={route.href}
          label={route.label}
          icon={route.icon}
          href={route.href}
          isActive={pathname === route.href}
        />
      ))}
    </ul>
  );
};

export default Navigation;
