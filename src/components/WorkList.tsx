import { Grid, GridItem, Center } from "@chakra-ui/react";

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
    <Center mt={{base:10, md:20}}>
      <Grid maxW={'960px'} >
        {allWorks && allWorks.map((work, index) => (
          <GridItem key={index} colSpan={1}>
            <RiseAnimation delay={index}>
              <WorkCard work={work} />
            </RiseAnimation>
          </GridItem>
        ))}
      </Grid>
      </Center>
    </>
  );
}
export default WorkList;