import './globals.css';
import MobileNavbar from "@/components/commons/navbar";
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/commons/app-sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SidebarProvider>
          <MobileNavbar />
          <AppSidebar />
          <main className="mx-auto flex w-full max-w-[1400px] flex-col px-4 lg:px-6">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
