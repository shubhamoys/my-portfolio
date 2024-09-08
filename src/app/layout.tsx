import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import "@/styles/variables.scss";
import Header from "@/components/layouts/header/header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Shubhamoy Sarker | Full Stack developer",
  description: "Shubhamoy's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientSideWrapper>{children}</ClientSideWrapper>
      </body>
    </html>
  );
}

function ClientSideWrapper({ children }: { children: React.ReactNode }) {
  "use client";

  return (
    <>
      <section id="header">
        <Header />
      </section>

      <section id="main">
        <main>{children}</main>
      </section>
    </>
  );
}
