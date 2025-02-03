import Link from "next/link";

import { Flex, Box } from "@chakra-ui/react";

import { SnsLinkList } from '@/data/data';

const SnsIconLinkList = () => {
  return (
    <>
      <Flex justify={'space-between'} w={'100%'}>
        { SnsLinkList && SnsLinkList.map((sns, index)=>(
          <Box key={index}>
            <Link href={sns.link} target='_blank'>
              {sns.icon}
            </Link>
          </Box>
        ))}        
      </Flex>
    </>
  )
};

export default SnsIconLinkList;