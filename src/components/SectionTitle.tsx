import { Heading } from "@chakra-ui/react";

type Props = {
  title?: string;
};
const SectionTitle = (props: Props) => {
  const { title } = props;
  return (
    <>
      <Heading css={{
        mb:5, 
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight: 700,
        fontSize: '2.0rem'
      }}>{ title }</Heading>
    </>
  );
}
export default SectionTitle;