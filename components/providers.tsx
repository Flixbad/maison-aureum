"use client";

import { CustomCursor } from "@/components/custom-cursor";
import { LenisRoot } from "@/components/lenis-root";
import { Preloader } from "@/components/preloader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <LenisRoot>{children}</LenisRoot>
    </>
  );
}
