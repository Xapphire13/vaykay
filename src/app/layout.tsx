import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "Vaykay Trip Planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
