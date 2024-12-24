import { FC, memo } from "react";
import Dictionary from "@/type/type";
import { Typography } from "@mui/material";

type Props = {
  children?: string;
  sx?: Dictionary<string, string | number>;
}

const Heading1:FC<Props> = memo((props) => {
  const { children='', sx={} } = props;

  sx["fontSize"] = "fontSize" in sx ? 'inherit' : "28px";
  sx["fontWeight"] = "fontWeight" in sx ? 'inherit' : "700";
  sx["letterSpacing"] = "letterSpacing" in sx ? 'inherit' : 2;

  return (
    <>
      <Typography variant='h1' sx={sx}>{ children }</Typography>
    </>
  )
});

Heading1.displayName = "Heading1";
export default Heading1;