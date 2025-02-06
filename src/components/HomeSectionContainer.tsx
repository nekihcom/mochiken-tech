import { Box } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import { ReactNode } from "react";
import PrimaryContainer from "./PrimaryContainer";

type Props = {
  title?: string;
  children: ReactNode;
}
const HomeSectionContainer = (props: Props) => {
  const { title, children } = props;

  return (
    <>
      <Box as={'section'} mb={96}>
        <PrimaryContainer>
          { title && <SectionTitle title={title} />}
          { children }
        </PrimaryContainer>
      </Box>
    </>
  )
};
export default HomeSectionContainer;