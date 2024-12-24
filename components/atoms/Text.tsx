'use client';
import { FC, memo, ReactNode } from "react";
import Dictionary from "@/type/type";
import { Typography } from "@mui/material";

type Props = {
  children?: ReactNode;
  sx?: Dictionary<string, string | number>;
};

const Text:FC<Props> = memo((props) => {
  const { children='', sx={} } = props;

  sx["fontSize"] = "fontSize" in sx ? 'inherit' : "16px";

  return (
    <>
      <Typography variant='body1' component='p' sx={sx}>{ children }</Typography>
    </>
  )
});

Text.displayName = "Text";
export default Text;