import { ClientSideWrapper } from "@/lib/client-side-wrapperr";
import { Providers } from "@/lib/providers";
import "@/styles/variables.scss";
import type { Metadata } from "next";
import "./globals.scss";
import { Outfit, Fira_Code } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shubhamoy Sarker | Full Stack Developer",
  description:
    "Full Stack developer crafting scalable backends and seamless user experiences with modern bento design.",
  keywords: [
    "Frontend Developer",
    "Full Stack Developer",
    "Mobile Developer",
    "Next.js Developer",
    "Nest.js Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <ClientSideWrapper>{children}</ClientSideWrapper>
        </Providers>
      </body>
    </html>
  );
}
