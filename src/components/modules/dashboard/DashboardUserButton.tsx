'use client';

import { GeneratedAvatar } from '@/components/generated-avatar';
import CreditCardIcon from '@/components/icons/CreditCardIcon';
import LogOutIcon from '@/components/icons/LogOutIcon';
import SparklesIcon from '@/components/icons/SparklesIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useSidebar } from '@/components/ui/sidebar';
import { authClient } from '@/lib/auth-client';
import { ChevronsUpDown } from 'lucide-react';
import { useRouter } from 'next/navigation';


const DashboardUserButton = () => {

  const { data, isPending } = authClient.useSession();
  const { isMobile } = useSidebar();
  const router = useRouter();

  const onLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/sign-in');
        }
      }
    });
  };


  if (isPending || !data?.user) {
    return null;
  }


  return (


    <DropdownMenu>
      <DropdownMenuTrigger className='rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden gap-x-2'>
        {data.user.image ? (
          <Avatar>
            <AvatarImage src={data.user.image} />
          </Avatar>
        ) : (
          <GeneratedAvatar
            seed={data.user.name}
            variant='botttsNeutral'
            className='size-9 mr-3'
          />
        )}

        <div className='flex-1 flex flex-col gap-1 overflow-hidden'>
          <p className='text-sm truncate w-full '>
            {data.user.name}
          </p>
          <p className='text-xs truncate w-full'>
            {data.user.email}
          </p>
        </div>

        <ChevronsUpDown className="ml-auto size-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={isMobile ? "bottom" : "right"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={data.user.image ?? ''} alt={data.user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{data.user.name}</span>
              <span className="truncate text-xs">{data.user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <SparklesIcon />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>

          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>

        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={onLogout}>
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  );
};

export default DashboardUserButton;


