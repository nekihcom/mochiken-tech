import Link from 'next/link';

import { Box, Flex } from '@chakra-ui/react';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <Box css={{py:10, px:5}} className='py-10 px-5'>
        <Box css={{margin:'10px auto', maxW:'50%'}}>
          <Flex justify={'space-between'}>
            <Box>
              <Link href={'https://x.com/nekihcom'} target='_blank'>
                <FaXTwitter size={'2rem'} />
              </Link>
            </Box>
            <Box>
              <Link href={'https://github.com/nekihcom'} target='_blank'>
                <FaGithub size={'2rem'} />
              </Link>
            </Box>
            <Box>
              <Link href={'https://qiita.com/nekihcom'} target='_blank'>
                <Image src={'/icon/qiita-green.png'} alt={"Qiita"} width={32} height={32} />
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box css={{textAlign:'center'}}>
          &copy; Copyright {new Date().getFullYear()}. Made by <Link href='/'>Masaya Kemmochi</Link>
        </Box>
      </Box>
    </>
  );
}

export default Footer;