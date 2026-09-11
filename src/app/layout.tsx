import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import BackToTop from "@/components/BackToTop";

// Applies the saved palette to <html> before first paint to avoid a flash.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='light';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: {
    default: "Maria-Jesus Huaccha — UX Engineering Portfolio",
    template: "%s — Maria-Jesus Huaccha",
  },
  description:
    "Senior UX Designer becoming a Systems Engineer. Human-centered design for complex, AI-era products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg)] font-sans text-[var(--ink)] transition-colors">
        <header className="border-b border-[var(--line)]">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="font-serif text-lg tracking-tight text-[var(--title)]"
            >
              Maria-Jesus Huaccha
            </Link>
            <div className="flex items-center gap-6 text-sm text-[var(--muted)]">
              <Link href="/case-studies" className="hover:text-[var(--ink)]">
                Case studies
              </Link>
              <Link href="/writings" className="hover:text-[var(--ink)]">
                Writings
              </Link>
              <Link href="/about" className="hover:text-[var(--ink)]">
                About
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="flex-1 w-full">{children}</main>
        <footer className="border-t border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[var(--faint)] flex items-center justify-between">
            <span>© {new Date().getFullYear()} Maria-Jesus Huaccha</span>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/maria-jesus-ho/?locale=en-US"
                className="hover:text-[var(--ink)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/MariaJesusHO"
                className="hover:text-[var(--ink)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
        <BackToTop />
      </body>
    </html>
  );
}
