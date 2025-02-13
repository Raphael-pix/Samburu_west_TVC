"use client";

import { ChevronFirst, ChevronLast } from "lucide-react";

import { useSidebar } from "@/store/use-sidebar";
import Hint from "../hint";
import Image from "next/image";

const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed && (
        <div className="w-full hidden lg:flex items-center justify-center pt-4 mb-4">
          <Hint label={label} side="right" asChild>
            <button onClick={onExpand} className="h-auto p-2">
              <ChevronLast className="h-5 w-5" />
            </button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 hidden lg:flex items-center w-full">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={20}
              height={20}
              className="h-10 w-10 rounded-full"
            />
            <span className="hidden md:inline text-base font-semibold text-gray-800">
              Admin Dashboard
            </span>
          </div>
          <Hint label={label} side="right" asChild>
            <button onClick={onCollapse} className="h-auto p-2 ml-auto">
              <ChevronFirst className="h-5 w-5" />
            </button>
          </Hint>
        </div>
      )}
    </>
  );
};

export default Toggle;
