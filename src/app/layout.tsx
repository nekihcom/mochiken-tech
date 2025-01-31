import type { Metadata } from "next";

import { Provider } from "@/components/ui/provider";

import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box, Center } from "@chakra-ui/react";
// import "./globals.css";

export const metadata: Metadata = {
  title: `Mochiken`,
  description: `エンジニアもちけんのポートフォリオサイトです。`,
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body>
        <Provider>
          <Box css={{background:"gray.950", p:1}}>
            <Box css={{background:"gray.100", borderRadius:5}}>
              <Header />
              {children}
              <Footer />              
            </Box>
          </Box>
        </Provider>
      </body>
    </html>
  );
}
