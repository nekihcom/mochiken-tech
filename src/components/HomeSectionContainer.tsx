import { Box } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
}
const HomeSectionContainer = (props: Props) => {
  const { title, children } = props;

  return (
    <>
      <Box as={'section'} css={{my:10, py:5}}>
        { title && <SectionTitle title={title} />}
        { children }
      </Box>
    </>
  )
};
export default HomeSectionContainer;