import type { Metadata } from 'next';

import { Box } from '@chakra-ui/react';

import PrimaryContainer from '@/components/PrimaryContainer';
import { BASE_URL } from '@/data/data';


export const metadata:Metadata = {
  title: "WORK | Mochiken",
  description: "エンジニアMochikenのこれまでに成果物をご紹介します。",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Mochiken",
    description:
      "エンジニアMochikenのポートフォリオサイトです。",
    images: [{
      url: "/ogp/thumbnail.png",
      width: 1200,
      height: 630
    }],
  },
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PrimaryContainer>
        <Box as={'article'} my={28}>
          { children }
        </Box>
      </PrimaryContainer>
    </>
  );
}
