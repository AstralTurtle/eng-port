
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

const works: { title: string; href: string;}[] = [
  {
    title: "Introduction",
    href: "/works/introduction",
  },
  {
    title: "Job Packet",
    href: "/works/job-packet",
  },
  {
    title: "Rhetorical Analysis",
    href: "/works/rhetorical-analysis",
  },
  {
    title: "Research Essay / Proprosal",
    href: "/works/research",
  },
  {
    title: "Product Documentation",
    href: "/works/docs",
  },
  {
    title: "Other",
    href: "/works/other",
  },

]

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
        <NavigationMenu orientation="vertical" className="p-2">
  <NavigationMenuList>
    <NavigationMenuItem className="p-2">
      Aaron James
    </NavigationMenuItem>
    <NavigationMenuItem>




    <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
      Home
    </NavigationMenuLink>

      
    </NavigationMenuItem>
    <NavigationMenuItem>
          <NavigationMenuTrigger className="p-2">Works</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {works.map((component) => (
                <NavigationMenuLink href={component.href} key={component.title}>
                <li
                  // 
                  // title={component.title}
                 
                >
                  {component.title}
                  {/* {component.description} */}
                </li>
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
    
  </NavigationMenuList>
</NavigationMenu>

          <h1> </h1>

        {children}
      </body>
    </html>
  );
}


/*
teaching c++ in the middle of writing website code lmao
void function a(){
  b();
}

void function b(){
  a();
}

*/