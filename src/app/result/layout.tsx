import "../globals.css";
import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'], weight: ['400', '900']
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "HackSphere 2.0",
  description: "Unleash your Imagination"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body
         className={`${spaceGrotesk.className} ${orbitron.className}`}
      >
        {children}
      </body>
    </html>
  );
}
