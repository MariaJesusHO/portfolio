import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-neutral-200">
          <nav className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Maria-Jesus Huaccha
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/case-studies" className="hover:underline">
                Case studies
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1 mx-auto w-full max-w-4xl px-6 py-12">
          {children}
        </main>
        <footer className="border-t border-neutral-200">
          <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-neutral-500 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Maria-Jesus Huaccha</span>
            <a
              href="https://github.com/MariaJesusHO"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
