"use client";

import { usePathname } from "next/navigation";
import SpotlightIcon from "../Logo/SpotlightIcon";

const Sidebar = () => {
    const pathName = usePathname();

    return (
        <div className="-18 sm:w-28 h-screen sticky top-0 py-10 px-2 sm:px-6 border bg-background border-border flex flex-col items-center justify-start gpa-10">
            <div>
                <SpotlightIcon />
            </div>

        </div>
    );
};
export default Sidebar;