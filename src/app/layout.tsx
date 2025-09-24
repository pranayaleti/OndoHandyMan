import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ondo-handyman.com"),
  title: {
    default: "Ondo Handyman | Trusted Home Repairs in Lehi, Utah",
    template: "%s | Ondo Handyman",
  },
  description:
    "Ondo Handyman delivers reliable home repair, remodeling, and property maintenance for homeowners and businesses across Lehi and northern Utah County.",
  keywords: [
    "handyman Lehi",
    "Lehi home repairs",
    "Utah County handyman",
    "home maintenance Lehi",
    "remodeling Lehi",
    "Ondo Handyman",
  ],
  openGraph: {
    title: "Ondo Handyman | Trusted Home Repairs in Lehi",
    description:
      "Schedule dependable handyman, remodel, and maintenance services backed by experienced Lehi locals.",
    url: "https://ondo-handyman.com",
    siteName: "Ondo Handyman",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ondo Handyman | Trusted Home Repairs in Lehi",
    description:
      "Licensed and insured handyman pros serving Lehi, American Fork, Saratoga Springs, and surrounding areas.",
    creator: "@ondo_handyman",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased bg-neutral-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
