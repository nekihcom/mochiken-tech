import PrimaryContainer from "@/components/PrimaryContainer";
import OpacityAnimation from "@/lib/animation/OpacityAnimation";
import RiseAnimation from "@/lib/animation/RiseAnimation";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const DummyBox = (
  <>
    <Box my={20} backgroundColor={'pink.300'} h={'100px'}>box</Box>
  </>
);
export default function Page() {
  return (
    <>
      <Box as={'main'} height={'100vh'} css={{py:10, px:5}}>
        <PrimaryContainer>
          
          <Grid templateColumns="repeat(3, 1fr)" gap={5} mb={10}>
            <GridItem colSpan={1}>
              <RiseAnimation delay={1} duration={0.8}>
                { DummyBox }
              </RiseAnimation>
            </GridItem>
            <GridItem colSpan={1}>
              <RiseAnimation delay={2} duration={0.8}>
                { DummyBox }
              </RiseAnimation>
            </GridItem>
            <GridItem colSpan={1}>
              <RiseAnimation delay={3} duration={0.8}>
                { DummyBox }
              </RiseAnimation>
            </GridItem>
          </Grid>

          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem colSpan={1}>
              <OpacityAnimation>
                { DummyBox }
              </OpacityAnimation>
            </GridItem>
            <GridItem colSpan={1}>
              <OpacityAnimation>
                { DummyBox }
              </OpacityAnimation>
            </GridItem>
            <GridItem colSpan={1}>
              <OpacityAnimation>
                { DummyBox }
              </OpacityAnimation>
            </GridItem>
          </Grid>
        </PrimaryContainer>
      </Box>
    </>
  );
}