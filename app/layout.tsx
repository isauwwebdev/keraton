import { League_Spartan } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import "./globals.css";

export const leagueSpartan: NextFont = League_Spartan({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  );
}
