import { ClientSideWrapper } from "@/lib/client-side-wrapperr";
import { Providers } from "@/lib/providers";
import "@/styles/variables.scss";
import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Shubhamoy Sarker | Full Stack developer from Siliguri, India",
  description:
    "Full stack developer crafting scalable backends and seamless user experiences.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <ClientSideWrapper>{children}</ClientSideWrapper>
        </Providers>
      </body>
    </html>
  );
}
