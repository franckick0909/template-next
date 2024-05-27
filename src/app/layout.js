import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Franck Chapelon . Developpeur Web Front-End React.js",
  description: "Portfolio de Franck Chapelon, developpeur web front-end React.js, TailwindCSS, Next.js, Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className}>
      <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
