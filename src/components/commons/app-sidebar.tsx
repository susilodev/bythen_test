'use client';

import { ChevronLeft, ShieldCheck, UserRound } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { useMediaQuery } from 'usehooks-ts';
import { useEffect } from 'react';

// Menu items.
const items = [
  {
    title: 'Connections',
    url: '/',
    icon: UserRound,
  },
];

export function AppSidebar() {
  const { state, toggleSidebar, setOpen } = useSidebar();
  const expanded = state === 'expanded';

  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (isMobile) {
      setOpen(true);
    }
  }, [isMobile]);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="">
        <SidebarMenu className="mx-auto flex w-full justify-center">
          <SidebarMenuItem className="">
            <a
              href="#"
              className={cn(
                'absolute flex h-20 items-center transition-all duration-500 ease-in-out',
                expanded ? 'left-0' : 'left-1',
              )}>
              <ShieldCheck className="relative z-50 size-7 bg-white" />
              <span
                className={cn(
                  'absolute flex h-full items-center overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out',
                  expanded
                    ? 'left-9 top-0 max-w-xs translate-y-0 opacity-100'
                    : 'left-9 top-0 max-w-0 -translate-y-full opacity-0 ',
                )}>
                Reqmi
              </span>
            </a>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="mt-32">
        <SidebarGroup>
          <SidebarGroupLabel
            className={cn(
              'overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out',
              expanded
                ? 'left-9 top-0 max-w-xs translate-y-0 opacity-100'
                : 'left-9 max-w-0 -translate-y-full opacity-0',
            )}>
            User menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mx-auto flex w-full justify-center">
              {items.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    <a
                      href={item.url}
                      className={cn(
                        'absolute flex h-auto w-full items-center p-2 transition-all duration-500 ease-in-out',
                        expanded ? 'left-0 rounded-lg bg-slate-100' : 'left-0 rounded-full bg-slate-200',
                      )}>
                      <item.icon
                        className={cn('relative z-50 size-5 bg-transparent', expanded ? 'left-0' : 'left-[0.10rem]')}
                      />
                      <span
                        className={cn(
                          'absolute flex h-full items-center overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out',
                          expanded
                            ? 'left-9 top-0 max-w-xs translate-y-0 opacity-100'
                            : 'left-9 top-0 max-w-0 -translate-y-full opacity-0 ',
                        )}>
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="relative bottom-4 h-20">
        <SidebarMenu className="mx-auto flex w-full justify-center">
          <SidebarMenuItem onClick={toggleSidebar}>
            <a
              href="#"
              className={cn(
                'absolute right-0 flex h-20 items-center transition-all duration-500 ease-in-out',
                expanded ? 'opacity-40 hover:opacity-100' : 'opacity-80',
              )}>
              <ChevronLeft
                className={cn(
                  'relative size-6 transition-all duration-500 ease-in-out',
                  expanded ? 'right-10' : 'right-1 rotate-180',
                )}
              />

              <span
                className={cn(
                  'absolute flex h-full items-center overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out',
                  expanded
                    ? 'right-1 top-0 max-w-xs translate-x-0 opacity-100'
                    : 'right-0 top-0 max-w-0 -translate-x-full opacity-0 ',
                )}>
                <strong className="text-sm">Hide</strong>
              </span>
            </a>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
