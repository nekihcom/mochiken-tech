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
          mb={10}
          textTransform={'uppercase'}
          fontWeight={700}
          fontSize={'5rem'}
          position={'relative'}
          lineHeight={1}
          // _before={{
          //   content:`""`,
          //   width:'100%',
          //   height:'8px',
          //   background:'teal.600',
          //   position:'absolute',
          //   left:0,
          //   bottom:0
          // }}
      >{ title }</Heading>
      </SlideInView>
    </>
  );
}
export default SectionTitle;