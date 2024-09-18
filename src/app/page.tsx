"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // Ensure correct import path

import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";
import { Navbar } from "~/components/navbar";
import { Projects } from "~/components/projects";

export default function HomePage() {
  useEffect(() => {
    // Initialize Lenis inside useEffect to prevent SSR issues
    const lenis = new Lenis({});

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    // Optional: Clean up on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Projects />
      {/* <About /> */}
      <Contact />
      <Footer />
    </main>
  );
}
