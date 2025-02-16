import type { Metadata } from 'next';

import PrimaryContainer from '@/components/PrimaryContainer';
import { Box } from '@chakra-ui/react';
import { BASE_URL } from '@/data/data';


export const metadata:Metadata = {
  title: "BLOG | Mochiken",
  description: "技術コラムやキャリア、プライベートに関する記事を掲載しています。",
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

export default function BlogLayout({
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
