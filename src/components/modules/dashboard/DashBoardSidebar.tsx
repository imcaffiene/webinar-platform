'use client';

import SpotlightLogo from '@/components/icons/SpotlightLogo';
import VideoIcon from '@/components/icons/VideoIcon';
import BotIcon from '@/components/icons/BotIcon';
import StarIcon from '@/components/icons/StarIcon';
import React, { use } from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton } from '@/components/ui/sidebar';
import DashboardUserButton from './DashboardUserButton';
import Link from 'next/link';




const firstSection = [
  {
    icon: VideoIcon,
    label: 'Meetings',
    href: '/meetings'
  },
  {
    icon: BotIcon,
    label: 'Agents',
    href: '/agents'
  }
];

const secondSection = [
  {
    icon: StarIcon,
    label: 'Upgrade',
    href: '/upgrade'
  }
];



const DashBoardSidebar = () => {

  const pathName = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className='text-sidebar-accent-foreground'>
        <Link href={'/'} className='flex items-center gap-2 px-2 pt-2'>
          <SpotlightLogo />
        </Link>
      </SidebarHeader>

      <div className='px-4 py-2'>
        <Separator className='text-[#010163] dark:text-white opacity-50' />
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {firstSection.map((item) => (
                <SidebarMenu key={item.href}>
                  <SidebarMenuButton asChild
                    className={cn(
                      'h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50',
                      pathName === item.href && 'bg-linear-to-r/oklch border border-[#5D6B68]/10'
                    )}
                    isActive={pathName === item.href}
                  >
                    <Link href={item.href} className="flex items-center gap-4">
                      <item.icon className='size-5 mr-3' />
                      <span className='text-sm font-medium tracking-tight'>
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenu>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className='px-4 py-2'>
          <Separator className='text-[#010163] dark:text-white opacity-50' />
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondSection.map((item) => (
                <SidebarMenu key={item.href}>
                  <SidebarMenuButton asChild
                    className={cn(
                      'h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50',
                      pathName === item.href && 'bg-linear-to-r/oklch border border-[#5D6B68]/10'
                    )}
                    isActive={pathName === item.href}
                  >
                    <Link href={item.href} className="flex items-center gap-4">
                      <item.icon className='size-5 mr-3' />
                      <span className='text-sm font-medium tracking-tight'>
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenu>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <DashboardUserButton />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashBoardSidebar;