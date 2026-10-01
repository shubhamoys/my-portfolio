"use client";

import Header from "@/components/layouts/header/header";
import SidebarDock from "@/components/navigation/sidebar-dock/sidebar-dock";
import Loader from "@/components/layouts/loader/loader";
import { useEffect, useState } from "react";
import Footer from "@/components/layouts/footer/footer";
import { AnimatePresence } from "framer-motion";

export function ClientSideWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Entrance terminal boot loader */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Decorative background glow blobs */}
      <div className="bg-glow" />
      <div className="bg-glow-2" />

      {/* Main layout once loader is done or loading */}
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <section id="header" className={isScrolled ? "scrolled" : ""}>
          <Header />
        </section>

        {/* Floating Side Dock Navigation */}
        <SidebarDock />

        <main id="main">{children}</main>

        <section id="footer">
          <Footer />
        </section>
      </div>
    </>
  );
}
