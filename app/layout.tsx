import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northline EV — Electric freedom, beyond the road",
  description: "A European platform exploring the next generation of electric road travel.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
