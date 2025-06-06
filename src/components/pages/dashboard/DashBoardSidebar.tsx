'use client';
import SpotlightLogo from '@/components/icons/SpotlightLogo';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton } from '@/components/ui/sidebar';
import VideoIcon from '@/components/icons/VideoIcon';
import BotIcon from '@/components/icons/BotIcon';
import StarIcon from '@/components/icons/StarIcon';
import { Link } from 'next-view-transitions';
import React from 'react';
import { Separator } from '@/components/ui/separator';

type Props = {};

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

const DashBoardSidebar = (props: Props) => {
  return (
    <Sidebar>
      <SidebarHeader className='text-sidebar-accent-foreground'>
        <Link href={'/'} className='flex items-center gap-2 px-2 pt-2'>
          <SpotlightLogo />
        </Link>
      </SidebarHeader>

      <div className='px-4 py-2'>
        <Separator className='opacity-10 text-[#5D6B68]' />
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {firstSection.map((item) => (
                <SidebarMenu key={item.href}>
                  <SidebarMenuButton>
                    <Link href={item.href}>
                      <item.icon className='size-5' />
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
    </Sidebar>
  );
};

export default DashBoardSidebar;