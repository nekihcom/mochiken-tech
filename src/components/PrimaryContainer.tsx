import { Box, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}
const PrimaryContainer = (props:Props) => {
  const { children } = props;
  return (
    <>
      <Box as={'main'}>
        <Container maxW={'5xl'} fluid>{ children }</Container>
      </Box>
    </>
  );
}

export default PrimaryContainer;