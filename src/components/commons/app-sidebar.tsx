"use client"

import { ChevronLeft, ShieldCheck, UserRound } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { useMediaQuery } from 'usehooks-ts'
import { useEffect } from "react"

// Menu items.
const items = [
  {
    title: "Connections",
    url: "/",
    icon: UserRound,
  }
]

export function AppSidebar() {
  const { state, toggleSidebar, setOpen } = useSidebar()
  const expanded = state === "expanded"


  const isMobile = useMediaQuery('(max-width: 768px)')


  useEffect(() => {

    if (isMobile) {
      setOpen(true)
    }

  }, [isMobile])


  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="">
        <SidebarMenu className="mx-auto flex justify-center w-full">
          <SidebarMenuItem className="" >
            <a href="#" className={cn("absolute flex items-center h-20 transform transition-all duration-500 ease-in-out",
              expanded ? "left-0" : "left-1"

            )}>
              <ShieldCheck className="relative w-7 h-7 z-50 bg-white" />
              <span
                className={cn(
                  "absolute flex items-center overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out transform h-full",
                  expanded
                    ? "max-w-xs opacity-100 translate-y-0 left-9 top-0"
                    : "max-w-0 opacity-0 -translate-y-full top-0 left-9 "
                )}
              >Reqmi</span>
            </a>
          </SidebarMenuItem>
        </SidebarMenu>

      </SidebarHeader>

      <SidebarContent className="mt-32">
        <SidebarGroup>
          <SidebarGroupLabel
            className={cn(
              "overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out transform",
              expanded
                ? "max-w-xs opacity-100 translate-y-0 left-9 top-0"
                : "max-w-0 opacity-0 -translate-y-full left-9"
            )}

          >User menu</SidebarGroupLabel>
          <SidebarGroupContent>

            <SidebarMenu className="mx-auto flex justify-center w-full">
              {
                items.map(item => {
                  return (
                    <SidebarMenuItem className="" >
                      <a href={item.url} className={cn("absolute flex items-center h-20 transform transition-all duration-500 ease-in-out",
                        expanded ? "left-0" : "left-1"

                      )}>
                        <item.icon className="relative w-5 h-5 z-50 bg-white" />
                        <span
                          className={cn(
                            "absolute flex items-center overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out transform h-full",
                            expanded
                              ? "max-w-xs opacity-100 translate-y-0 left-9 top-0"
                              : "max-w-0 opacity-0 -translate-y-full top-0 left-9 "
                          )}
                        >Connection</span>
                      </a>
                    </SidebarMenuItem>
                  )
                })

              }


            </SidebarMenu>




            {/* <SidebarMenu> */}
            {/*   {items.map((item) => ( */}
            {/*     <SidebarMenuItem key={item.title} className={cn(expanded ? "mx-0" : "mx-auto")}> */}
            {/*       <a href={item.url} className={cn("absolute flex items-center h-20 transform transition-all duration-500 ease-in-out", */}
            {/*         expanded ? "left-0" : "left-1" */}
            {/**/}
            {/*       )}> */}
            {/*         <item.icon className={cn("relative w-5 h-5 z-50 bg-white")} /> */}
            {/*         <span */}
            {/*           className={cn( */}
            {/*             "absolute flex items-center overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out transform h-full", */}
            {/*             expanded */}
            {/*               ? "max-w-xs opacity-100 translate-y-0 left-9 top-0" */}
            {/*               : "max-w-0 opacity-0 -translate-y-full top-0 left-9 " */}
            {/*           )} */}
            {/*         > */}
            {/**/}
            {/*           {item.title} */}
            {/*         </span> */}
            {/**/}
            {/**/}
            {/*       </a> */}
            {/*     </SidebarMenuItem> */}
            {/*   ))} */}
            {/* </SidebarMenu> */}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="hidden lg:block lg:w-full h-20 pr-1">
          <SidebarMenu className="mx-auto flex justify-end w-auto" onClick={toggleSidebar}>
            <SidebarMenuItem className="flex justify-end w-full" >
              <a href="#" className={cn("relative flex items-center h-20 transform transition-all duration-500 ease-in-out",
                expanded ? "right-0 opacity-30 hover:opacity-100" : "opacity-100 right-1"

              )}>
                <ChevronLeft className={cn("transition-all transform duration-500 ease-in-out absolute flex w-5 h-5 z-50 bg-white ml-1 text-gray-700",
                  expanded ? "right-12" : "right-0 rotate-180"
                )} />
                <span
                  className={cn(
                    "absolute right-2 flex items-center overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out transform h-full",
                    "font-medium text-gray-700",
                    expanded
                      ? "max-w-xs opacity-100 translate-y-0"
                      : "max-w-0 opacity-0 -translate-y-4"
                  )}
                ><strong>Hide</strong></span>
              </a>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarFooter>
    </Sidebar >
  )
}
