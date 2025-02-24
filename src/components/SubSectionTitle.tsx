import SlideInView from "@/lib/animation/SlideInView";
import { Heading } from "@chakra-ui/react";

type Props = {
  title?: string;
  isTextUpper?: string;
};
const SubSectionTitle = (props: Props) => {
  const { title, isTextUpper='none' } = props;
  return (
    <>
      <SlideInView>
        <Heading 
          as={'h3'}
          mb={10}
          textTransform={isTextUpper}
          fontWeight={700}
          fontSize={'4rem'}
          position={'relative'}
          lineHeight={1}
      >{ title }</Heading>
      </SlideInView>
    </>
  );
}
export default SubSectionTitle;