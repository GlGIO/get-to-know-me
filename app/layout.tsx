import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giovanni Sandrini — Engineer & Builder",
  description: "Developer & Builder — Giovanni Sandrini",
  openGraph: {
    title: "Giovanni Sandrini — Engineer & Builder",
    description: "Developer & Builder — Giovanni Sandrini",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;600;700&family=Azeret+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
