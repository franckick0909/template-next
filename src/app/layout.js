import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Franck Chapelon . Developpeur Web Front-End React.js",
  description: "Portfolio de Franck Chapelon, developpeur web front-end React.js, TailwindCSS, Next.js, Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className}>
        <Script id="theme-switcher" strategy="beforeInteractive">
        {`
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        `}
        </Script>
      <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
