import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from 'next/link'
import "./globals.css";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"





const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aaron James",
  description: "Portfolio for eng 21007",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pr-5 pl-5`}
      >
        <NavigationMenu orientation="vertical">
  <NavigationMenuList>
    <NavigationMenuItem>
      Aaron James
    </NavigationMenuItem>


    <NavigationMenuItem>



    <Link href="/">
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Home
    </NavigationMenuLink>
    </Link>
      
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

          <h1> </h1>

        {children}
      </body>
    </html>
  );
}
