import { useEffect, useState } from "react";

export default function useLightboxEffects() {
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(function lightboxEffect() {
    const query = window.matchMedia("(min-width: 1024px)");
    query.addEventListener("change", handleLightboxBreakpoint);

    function handleLightboxBreakpoint() {
      if (query.matches) return;
      setShowLightbox(false);
    }

    return function lightboxEffectCleanup() {
      query.removeEventListener("change", handleLightboxBreakpoint);
    };
  }, []);

  return { showLightbox, setShowLightbox };
}
