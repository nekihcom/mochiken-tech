import type { Metadata } from 'next';

// import '../styles/globals.css';
import { HOME_OG_IMAGE_URL } from '@/lib/constants';
import PrimaryContainer from '@/components/PrimaryContainer';
import { Box } from '@chakra-ui/react';
// import { Provider } from '@/components/ui/provider';

export const metadata: Metadata = {
  title: `Blog | Mochiken`,
  description: `エンジニアもちけんのポートフォリオサイトです。`,
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
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
