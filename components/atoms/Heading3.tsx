import { FC, memo } from "react";
import Dictionary from "@/type/type";
import { Typography } from "@mui/material";

type Props = {
  children?: string;
  sx?: Dictionary<string, string | number>;
}

const Heading3:FC<Props> = memo((props) => {
  const { children='', sx={} } = props;

  sx["fontSize"] = "fontSize" in sx ? 'inherit' : "20px";
  sx["fontWeight"] = "fontWeight" in sx ? 'inherit' : "700";
  sx["letterSpacing"] = "letterSpacing" in sx ? 'inherit' : 1;

  return (
    <>
      <Typography variant='h3' sx={sx}>{ children }</Typography>
    </>
  )
});

Heading3.displayName = "Heading3";
export default Heading3;