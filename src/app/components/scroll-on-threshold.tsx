"use client";

import { useEffect, RefObject } from "react";

interface AutoScrollProps {
  targetRef: RefObject<HTMLElement | null>;
  threshold?: number;
  lockDuration?: number; // milliseconds
}

export default function AutoScrollOnThreshold({
  targetRef,
  threshold = 200,
  lockDuration = 1500, // default: 1.5s
}: AutoScrollProps) {
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        // Disable scrolling
        document.body.style.overflow = "hidden";

        targetRef.current?.scrollIntoView({ behavior: "smooth" });

        // Re-enable scrolling after lockDuration
        setTimeout(() => {
          document.body.style.overflow = "";
        }, lockDuration);

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetRef, threshold, lockDuration]);

  return null;
}
