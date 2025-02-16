import type { Metadata } from 'next';

import { Box } from '@chakra-ui/react';

import '../styles/globals.css';
import { Provider } from '@/components/ui/provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BASE_URL } from '@/data/data';


const siteConfig = {
  baseUrl: BASE_URL
}

export const metadata:Metadata = {
  title: "Mochiken",
  description: "エンジニアMochikenのポートフォリオサイトです。",
  metadataBase: new URL(siteConfig.baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mochiken",
    description: "エンジニアMochikenのポートフォリオサイトです。",
    images: [{
      url: "/ogp/thumbnail.png",
      width: 1200,
      height: 630
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#000000'
        />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta
          name='msapplication-config'
          content='/favicon/browserconfig.xml'
        />
        <meta name='theme-color' content='#000' />
        <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      </head>
      <body>
        <Provider>
          <Box backgroundColor={'gray.950'} p={{base:3, md:5}}>
            <Box backgroundColor={'gray.100'} borderRadius={'1rem'}>
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
