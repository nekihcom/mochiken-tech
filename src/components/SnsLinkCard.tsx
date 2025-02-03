import { Sns } from '@/type/type';
import { Flex, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  sns?:Sns;
}
const SnsLinkCard = (props: Props) => {
  const { sns={link:'', title:'', username:'', icon:''} } = props;
  return (
    <>
      <Link href={sns.link} target='_blank'>
        <Flex justify={'space-between'} align={'center'} color={'whiteAlpha.900'} fontWeight={700}>
          <Box mr={3}>
            <Text>{sns.title}</Text>
            <Text>{sns.username}</Text>
          </Box>
          <Flex align={'center'}>
            {sns.icon}
          </Flex>
        </Flex>
      </Link>
    </>
  );
};
export default SnsLinkCard;