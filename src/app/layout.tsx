import './globals.css';
import MobileNavbar from '@/components/commons/MobileNavbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/commons/app-sidebar';

import QueryProvider from './QueryProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SidebarProvider>
          <AppSidebar />
          <main className="mx-auto flex w-full max-w-[1400px] flex-col px-4 lg:px-6">
            <QueryProvider>{children}</QueryProvider>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
