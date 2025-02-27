import Link from 'next/link';

import { Box, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { ParsedNoteItem } from '@/type/type';

type Props = {
  article: ParsedNoteItem;
}
const NoteArticleCard = (props: Props) => {
  const { article } = props;
  // https://www.ey-office.com/blog_archive/2023/04/18/short-code-to-get-todays-date-in-yyyy-mm-dd-format-in-javascript/
  // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
  const displayArticleCreatedDt = new Date(article.pubDate).toLocaleDateString('sv-SE');

  return (
    <>
      <Box _hover={{opacity:0.5, transition:'all 0.3s'}}>
        <Link href={`${article.link}`} target={('_blank')}>
          <Card.Root 
            maxW='sm' 
            overflow='hidden' 
            borderRadius={'1rem'}
            maxH={'158px'}
          >
            <Image
              src={article.ogpImageUrl}
              alt={article.title}
              h={'100%'}
            />
          </Card.Root>
          <Flex py={5} height={'184px'} flexDirection={'column'} justify={'start'}>
            <Heading as={'h4'} fontWeight={700} fontSize={'1.25rem'}>{article.title}</Heading>
            <Text>{`${displayArticleCreatedDt}`}</Text>
          </Flex>
        </Link>
      </Box>
    </>
  );
}
export default NoteArticleCard;