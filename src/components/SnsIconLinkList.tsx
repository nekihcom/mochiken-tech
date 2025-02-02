import Image from 'next/image';
import Link from "next/link";
import { Flex, Box } from "@chakra-ui/react";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const SnsIconLinkList = () => {
  return (
    <>
      <Flex justify={'space-between'} w={'100%'}>
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
    </>
  )
};

export default SnsIconLinkList;