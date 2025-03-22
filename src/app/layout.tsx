import { ClientSideWrapper } from "@/lib/client-side-wrapperr";
import { Providers } from "@/lib/providers";
import "@/styles/variables.scss";
import type { Metadata } from "next";
import "./globals.scss";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <ClientSideWrapper>{children}</ClientSideWrapper>
        </Providers>
      </body>
    </html>
  );
}
