import type { Metadata } from 'next';

import { Box } from '@chakra-ui/react';

import { HOME_OG_IMAGE_URL } from '@/lib/constants';
import PrimaryContainer from '@/components/PrimaryContainer';

export const metadata: Metadata = {
  title: `Work | Mochiken`,
  description: `エンジニアもちけんのポートフォリオサイトです。`,
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
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
