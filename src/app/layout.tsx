import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/header/header";
import { SkipLink } from "@/components/skip-link/skip-link";
import { SITE } from "@/data/content";
import "./globals.scss";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"], // width axis 62–125 + weight 100–900
  display: "swap",
  variable: "--font-archivo",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export const viewport: Viewport = {
  themeColor: "#0D0D0C",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available before first paint so scroll-reveal content doesn't flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
