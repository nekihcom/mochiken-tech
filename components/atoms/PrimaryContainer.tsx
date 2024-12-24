import { FC, memo, ReactNode } from "react";
import { Container } from "@mui/material";

type Props = {
  children: ReactNode;
}

const PrimaryContainer:FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Container maxWidth='lg'>
        { children }
      </Container>
    </>
  )
});

PrimaryContainer.displayName = "PrimaryContainer";
export default PrimaryContainer;