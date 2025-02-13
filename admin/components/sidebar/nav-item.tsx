"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
  isBottom?: boolean;
}

const NavItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  isBottom = false,
}: NavItemProps) => {
  const { collapsed } = useSidebar((state) => state);

  if (isBottom) {
    return (
      <button
        className={cn(
          "w-full flex items-center gap-3 px-4 py-1 text-gray-700 rounded-lg font-medium hover:text-gray-800 group relative ",
          collapsed ? "justify-center" : "justify-start",
        )}
      >
        <div className="flex items-center gap-x-4">
          <Icon className={cn("h-4 w-4 md:h-8 md:w-8", collapsed ? "mr-0" : "mr-2")} />
          {!collapsed && <span className="text-sm">{label}</span>}
        </div>
      </button>
    );
  }
  return (
    <Link
      href={href}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg font-medium hover:bg-gray-100 hover:text-blue-600 group relative ",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-gray-100 text-blue-600 font-semibold"
      )}
    >
      <div className="flex items-center gap-x-4">
        <Icon className={cn("h-4 w-4 md:h-6 md:w-6", collapsed ? "mr-0" : "mr-2")} />
        {!collapsed && <span className="text-sm">{label}</span>}
      </div>
    </Link>
  );
};

export default NavItem;
