import { Grid, GridItem, Flex } from "@chakra-ui/react";

import WorkCard from "./WorkCard";
import { Work } from "@/type/type";
import RiseAnimation from "@/lib/animation/RiseAnimation";

type Props = {
  allWorks: Array<Work>;
}

const WorkList = (props: Props) => {
  const { allWorks } = props;

  return (
    <>
    <Flex mt={{base:10, md:20}} justify={{base:'center'}}>
      <Grid
        maxW={{base:'330px', md:'960px'}} 
        templateColumns={{base:"repeat(1, 1fr)", md:"repeat(3, 1fr)"}}
        gap={5}
      >
        {allWorks && allWorks.map((work, index) => (
          <GridItem key={index} colSpan={1}>
            <RiseAnimation delay={index}>
              <WorkCard work={work} />
            </RiseAnimation>
          </GridItem>
        ))}
      </Grid>
      </Flex>
    </>
  );
}
export default WorkList;