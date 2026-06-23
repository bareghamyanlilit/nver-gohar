import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Նվեր և Գոհար",
  description: "Նվեր և Գոհար",
  openGraph: {
    title: "Նվեր և Գոհարի հարսանեկան հրավիրատոմս",
    description: "Best invitation website",
    url: "https://wedding-invitation-1-ecru.vercel.app/",
    siteName: "Նվեր և Գոհար",
    images: [
      {
        url: "/first.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}>
        {children}
      </body>
    </html>
  );
}
