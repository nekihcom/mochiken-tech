import { getDetail, getWorks } from "@/lib/hook/useWork";
import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export async function generateStaticParams(){
  const { contents } = await getWorks();

  const paths = contents.map((work)=>{
    return {
      workId: work.id,
    };
  });
  return [...paths];
}

export default async function StaticDetailPage({
  params,
}: {
  params: Promise<{ workId : string}>;
}) {
  const { workId } = await params;
  const work = await getDetail(workId);
  const thumbnail = work.thumbnail as unknown as Thumbnail;
  const workcreatedAtSplit = work.createdAt.split('-');
  const createdAtYear = workcreatedAtSplit[0];
  const createdAtMonth = workcreatedAtSplit[1];

  return(
    <>
      <Box as={'article'}>
        <Box css={{mb:5}}>
          <Heading as={'h2'} css={{
            fontWeight: 700,
            fontSize: '1.5rem'
          }}>{ work.title }</Heading>
          <Text>{ `${createdAtYear}年${createdAtMonth}月作成` }</Text>
        </Box>
        {thumbnail && <Flex justify={'center'}>
          <Image src={thumbnail.url} alt={work.title} />
        </Flex>}
        <Box id="WorkBody" dangerouslySetInnerHTML={{ __html: `${work.body}` }} css={{
          mb:5,
          py:5
        }}/>
        <Box id="WorkFooter">
          <Link href={'/work'}>作品の一覧に戻る</Link>
        </Box>
      </Box>
    </>
  )
}