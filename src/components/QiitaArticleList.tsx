import { Grid, GridItem, Flex } from "@chakra-ui/react";

import QiitaArticleCard from "./QiitaArticleCard";
import RiseAnimation from "@/lib/animation/RiseAnimation";
import { ParsedQiitaItem } from "@/type/type";

const QiitaArticleList = (props:{allArticles:Array<ParsedQiitaItem>}) => {
  const { allArticles } = props;

  return (
    <>
      <Flex mt={{base:10, md:20}} justify={{base:'center'}}>
        <Grid
          maxW={{base:'330px', md:'960px'}} 
          templateColumns={{base:"repeat(1, 1fr)", md:"repeat(3, 1fr)"}}
          gap={5}
        >
          {allArticles && allArticles.map((article, index) => (
            <GridItem key={index} colSpan={1}>
              <RiseAnimation delay={index}>
                <QiitaArticleCard article={article} />
              </RiseAnimation>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
}
export default QiitaArticleList;