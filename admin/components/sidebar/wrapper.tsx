"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-white z-50 px-2 py-4 shadow-sm",
        collapsed && "lg:w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
