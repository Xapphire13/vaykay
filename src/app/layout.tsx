import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";
import Header from "./Header/Header";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Vaykay Trip Planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
