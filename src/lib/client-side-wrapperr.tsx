"use client";

import Drawer from "@/components/navigation/drawer/drawer";
import Header from "@/components/layouts/header/header";
import { useEffect, useState } from "react";
import Footer from "@/components/layouts/footer/footer";

export function ClientSideWrapper({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Add or remove the "no-scroll" class on the <html> element
  useEffect(() => {
    if (isDrawerOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [isDrawerOpen]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled (you can adjust the threshold as needed)
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call once to set initial state
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        id="header"
        className={`${isDrawerOpen ? "blurred" : ""} ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <Header isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </section>

      {/* Drawer Component */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <section id="main" className={isDrawerOpen ? "blurred" : ""}>
        <main>{children}</main>
      </section>

      <section id="footer" className={isDrawerOpen ? "blurred" : ""}>
        <Footer></Footer>
      </section>
    </>
  );
}
