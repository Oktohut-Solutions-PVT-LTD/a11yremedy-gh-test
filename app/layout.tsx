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
        <div className="site-header">
          <Link href="/">A11yRemedy test</Link>
        </div>
        <div id="content" className="site-content">{children}</div>
        <div className="site-footer">© Oktohut</div>
      </body>
    </html>
  );
}
