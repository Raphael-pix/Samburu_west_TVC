"use client"

import React from "react";
import { usePathname } from "next/navigation";
import NavItem from "./nav-item";
import { HelpCircle,  Settings } from "lucide-react";
import LogoutBtn from "./logout";

const bottomItems = [
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: HelpCircle, label: "Help Center", href: "/help" },
];

const BottomNavigation= () => {
  const pathname = usePathname();
  return (
    <div className="mt-auto border-t p-4 space-y-2">
      {bottomItems.map((item) => (
        <NavItem
          key={item.href}
          label={item.label}
          icon={item.icon}
          href={item.href}
          isActive={pathname === item.href}
          isBottom={true}
        />
      ))}
      <LogoutBtn/>
    </div>
  );
};

export default BottomNavigation;
