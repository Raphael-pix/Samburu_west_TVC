"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { LogOut } from "lucide-react";

const LogoutBtn = () => {
  const { collapsed } = useSidebar((state) => state);

  return (
    <button
      className={cn(
        "w-full flex items-center gap-3 px-4 py-2 text-red-500 rounded-lg font-medium hover:text-red-600 group relative ",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <div className="flex items-center gap-x-4">
        <LogOut className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
        {!collapsed && <span>Logout</span>}
      </div>
    </button>
  );
};

export default LogoutBtn;
