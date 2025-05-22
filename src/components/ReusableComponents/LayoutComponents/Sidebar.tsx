"use client";

import { usePathname } from "next/navigation";
import SpotlightIcon from "../Logo/SpotlightIcon";
import { sidebarData } from "@/lib/data";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="w-18 sm:w-28 h-screen sticky top-0 py-10 px-2 sm:px-6 border bg-background border-border flex flex-col items-center justify-start gpa-10">
      <div className="mb-10">
        <SpotlightIcon />
      </div>

      <div className="w-full h-full justify-between items-center flex flex-col">
        <div className="w-full h-fit flex flex-col gap-4 items-center justify-center">
          {sidebarData.map((item) => (
            <TooltipProvider key={item.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={item.link}
                    className={`flex items-center gap-2 cursor-pointer rounded-lg p-2 ${pathName.includes(item.link) ? 'iconBackground' : ''}`}>

                    <item.icon className={`w-4 h-4 ${pathName.includes(item.link) ? '' : 'opacity-80'}`} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <span className="text-sm">{item.title}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        <UserButton />
      </div>

    </div>
  );
};
export default Sidebar;