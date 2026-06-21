"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const InteractiveTerminal = dynamic(
  () => import("./InteractiveTerminalClient"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-secondary-bg border border-border-standard rounded-sm p-4 font-mono-code text-text-muted flex flex-col relative overflow-hidden animate-pulse">
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border-soft">
          <div className="w-3 h-3 rounded-full bg-border-standard"></div>
          <div className="w-3 h-3 rounded-full bg-border-standard"></div>
          <div className="w-3 h-3 rounded-full bg-border-standard"></div>
          <span className="ml-2 font-mono-label">bash - root@server:~</span>
        </div>
        <div>LOADING_TERMINAL_MODULE...</div>
      </div>
    )
  }
);

export default function TerminalLazyWrapper() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if it's desktop
    const media = window.matchMedia("(min-width: 768px)");
    if (!media.matches) {
      // If we switch from desktop to mobile and it was mounted, unmount? 
      // The user just wants it not to mount initially on mobile.
      return; 
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Delay actual hydration a tiny bit to let other things paint
          const idle = window.requestIdleCallback?.(() => setMounted(true)) ?? setTimeout(() => setMounted(true), 100);
          observer.disconnect();
        }
      },
      { rootMargin: "100px 0px" } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {mounted ? <InteractiveTerminal /> : null}
    </div>
  );
}
