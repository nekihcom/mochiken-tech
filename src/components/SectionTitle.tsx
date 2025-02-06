import { Heading } from "@chakra-ui/react";

type Props = {
  title?: string;
};
const SectionTitle = (props: Props) => {
  const { title } = props;
  return (
    <>
      <Heading 
        // textAlign={'center'}
        mb={10}
        textTransform={'uppercase'}
        fontWeight={700}
        fontSize={'5rem'}
        position={'relative'}
        lineHeight={1}
        _before={{
          content:`""`,
          width:'100%',
          height:'8px',
          // borderRadius: 5,
          background:'teal.600',
          position:'absolute',
          left:0,
          bottom:0
        }}
      >{ title }</Heading>
    </>
  );
}
export default SectionTitle;