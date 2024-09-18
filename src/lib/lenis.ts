// utils/lenis.js
import Lenis from "lenis";

export const initializeLenis = () => {
  const lenis = new Lenis({
    duration: 1.2, // Adjust the duration as needed
    easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
  });

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};
