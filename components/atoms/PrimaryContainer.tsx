import { FC, memo, ReactNode } from "react";
import { Container } from "@mui/material";
import { grey } from "@mui/material/colors";

type Props = {
  children: ReactNode;
}

const sx = {
  // backgroundColor: grey[300],
};

const PrimaryContainer:FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Container maxWidth='lg' sx={sx}>
        { children }
      </Container>
    </>
  )
});

PrimaryContainer.displayName = "PrimaryContainer";
export default PrimaryContainer;