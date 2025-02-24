import { Grid, GridItem, Flex } from "@chakra-ui/react";

import NoteArticleCard from "./NoteArticleCard";
import RiseAnimation from "@/lib/animation/RiseAnimation";
import { ParsedNoteItem } from "@/type/type";

const NoteArticleList = (props:{allArticles:Array<ParsedNoteItem>}) => {
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
                <NoteArticleCard article={article} />
              </RiseAnimation>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
}
export default NoteArticleList;