import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";;
import '@stream-io/video-react-sdk/dist/css/styles.css'
import 'react-datepicker/dist/react-datepicker.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VidConnect",
  description: "Let's connect everyone",
  icons: {
    icon: "/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        layout: {
          logoImageUrl: '/icons/yoom-logo.svg',
          socialButtonsVariant: 'iconButton'
        },
        variables: {
          colorTextOnPrimaryBackground: "#fff",
          colorText: '#fff',
          colorPrimary: '#0E78F9',
          colorBackground: "#1C1F2E",
          colorInputBackground: "#252a41",
          colorInputText: "#fff"
        }
      }
      }>
        <body className={`${inter.className} bg-dark-2`}>{children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
