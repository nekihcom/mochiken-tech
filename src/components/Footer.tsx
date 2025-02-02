import Link from 'next/link';

import { Box } from '@chakra-ui/react';

import SnsIconLinkList from './SnsIconLinkList';

const Footer = () => {
  return (
    <>
      <Box as={'footer'} css={{py:3, px:5}}>
        <Box css={{margin:'10px auto', maxW:'50%'}}>
          <SnsIconLinkList />
        </Box>
        <Box css={{textAlign:'center'}}>
          &copy; Copyright {new Date().getFullYear()}. Made by <Link href='/'>Masaya Kemmochi</Link>
        </Box>
      </Box>
    </>
  );
}

export default Footer;