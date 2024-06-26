import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";

import Nav from "./components/nav";
import GoBack from "./components/go-back";

export const metadata: Metadata = {
  title: "View Pokemon",
  description: "View and discover all pokemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Nav />
          <Suspense>
            <GoBack />
          </Suspense>
          <main className="container mx-auto my-5 pb-12 sm:mt-16 px-5 sm:px-12">
            {children}
          </main>  
        </Theme>
      </body>
    </html>
  );
}
