"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function ScrollRestoration() {
  const { replace } = useRouter();

  useEffect(() => {
    // Check if the URL contains a hash
    if (window.location.hash) {
      // Replace the URL with the base URL (without the hash) and navigate to the top of the home page
      replace(window.location.pathname);
      window.scrollTo(0, 0); // Scroll to top after hash removal
    }

    if ("scrollRestoration" in window.history) {
      const scrollRestoration = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";

      return () => {
        window.history.scrollRestoration = scrollRestoration;
      };
    }
  }, [replace]);

  return null;
}