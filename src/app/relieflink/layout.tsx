import type { ReactNode } from "react";
import { Noto_Serif, Public_Sans } from "next/font/google";

import styles from "./relieflink.module.css";

const reliefSerif = Noto_Serif({
  variable: "--rl-font-serif",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const reliefSans = Public_Sans({
  variable: "--rl-font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function ReliefLinkLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${styles.reliefLink} ${reliefSerif.variable} ${reliefSans.variable}`}
    >
      {children}
    </div>
  );
}
