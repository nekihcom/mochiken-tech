import Link from 'next/link';

import { Box } from '@chakra-ui/react';

import SnsIconLinkList from './SnsIconLinkList';

const Footer = () => {
  return (
    <>
      <Box as={'footer'} css={{py:3, px:5}}>
        <Box css={{margin:'10px auto', maxW:'150px'}}>
          <SnsIconLinkList />
        </Box>
        <Box css={{textAlign:'center'}}>
          &copy; Copyright {new Date().getFullYear()}.<br className='is-sp'/> Made by <Link href='/'>Masaya Kemmochi</Link>
        </Box>
      </Box>
    </>
  );
}

export default Footer;