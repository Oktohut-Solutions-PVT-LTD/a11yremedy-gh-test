import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "A11yRemedy GitHub test",
  description: "A test site for A11yRemedy's GitHub connector",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/">A11yRemedy test</Link>
        </header>
        <main id="content" className="site-content">{children}</main>
        <footer className="site-footer">© Oktohut</footer>
      </body>
    </html>
  );
}
