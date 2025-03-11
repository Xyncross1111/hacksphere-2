import "./globals.css";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'], weight: ['400', '900']
});

export const metadata: Metadata = {
  title: "HackSphere 2.0",
  description: "Unleash your Imagination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={orbitron.className}
      >
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
        {children}
      </body>
    </html>
  );
}
