import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}
const PrimaryContainer = (props:Props) => {
  const { children } = props;
  return (
    <>
      <Container maxW={'5xl'} fluid>{ children }</Container>
    </>
  );
}

export default PrimaryContainer;