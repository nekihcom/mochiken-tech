import SlideInView from "@/lib/animation/SlideInView";
import { Heading } from "@chakra-ui/react";

type Props = {
  title?: string;
};
const SectionTitle = (props: Props) => {
  const { title } = props;
  return (
    <>
      <SlideInView>
        <Heading 
          as={'h2'}
          mb={10}
          textTransform={'uppercase'}
          fontWeight={700}
          fontSize={'5rem'}
          position={'relative'}
          lineHeight={1}
      >{ title }</Heading>
      </SlideInView>
    </>
  );
}
export default SectionTitle;