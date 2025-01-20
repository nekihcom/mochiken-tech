import { FC, ReactNode } from "react";
import { Container } from "@mui/material";
import { bizFontFamily } from "@/data/fonts";

type Props = {
  children: ReactNode;
}

const GlobalContainer:FC<Props> = (props) => {
  const { children } = props;

  return (
    <Container maxWidth="lg">
      { children }
    </Container>
  );
}

export default GlobalContainer;