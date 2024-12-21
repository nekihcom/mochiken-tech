import { FC, memo, ReactNode } from "react";

import { Box } from "@mui/material";

import Header from "../organisms/layout/Header";
import Footer from "../organisms/layout/Footer";

type Props = {
  children: ReactNode;
}
const PrimaryTemplate:FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Box>
        <Header />
        { children }
        <Footer />
      </Box>
    </>
  )
});

PrimaryTemplate.displayName = "PrimaryTemplate";
export default PrimaryTemplate;