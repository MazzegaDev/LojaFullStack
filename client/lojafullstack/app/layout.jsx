import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nunito } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({subsets: ['latin']})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Loja fullstack",
  description: "API-REST de uma loja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        {children}
      </body>
    </html>
  );
}
