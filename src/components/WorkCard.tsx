import Link from "next/link";

import { Box, Card, Heading, Text, Image, Flex } from "@chakra-ui/react";

import { Work } from "@/type/type";

type Props = {
  work: Work;
}
const WorkCard = (props: Props) => {
  const { work } = props;
  return (
    <>
      <Card.Root maxW="sm" overflow="hidden" css={{boxShadow:'0px 5px 20px -5px #777777', position:'relative'}}>
        <Link href={`/work/${work.id}`}>
          <Box maxW={'315px'} borderRadius={'1rem'}>
            <Image
              src={work.thumbnail && work.thumbnail.url}
              alt={work.title}
            />
          </Box>
          <Flex _hover={{opacity:'1', transition:'all 0.3s'}} 
            opacity={0} 
            textAlign={'center'} 
            position={'absolute'} 
            top={'0'} 
            height={'100%'} 
            width={'100%'} 
            align={'center'} 
            justify={'center'} 
            backgroundColor={'rgba(0,0,0,0.75)'}
            color={'gray.100'}
          >
            <Box>
              <Heading as={'h3'} fontWeight={700} fontSize={'1.5rem'} pt={5} pb={2} px={7}>{work.title}</Heading>
              <Text fontWeight={700}>{work.excerpt}</Text>
            </Box>
          </Flex>
        </Link>
      </Card.Root>
    </>
  );
}
export default WorkCard;