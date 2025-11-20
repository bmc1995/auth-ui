import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./lib/components/NavBar";

export const metadata: Metadata = {
  title: "Auth UI",
  description: "Welcome to the Auth UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>
        {children}
        <footer>
          <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
              <p>
                Copyright © {new Date().getFullYear()} - All rights reserved by
                GetYouLoggedIn Ltd
              </p>
            </aside>
          </footer>
        </footer>
      </body>
    </html>
  );
}
