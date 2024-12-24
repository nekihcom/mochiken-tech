import { FC, memo } from "react";
import Dictionary from "@/type/type";
import { Typography } from "@mui/material";

type Props = {
  children?: string;
  sx?: Dictionary<string, string | number>;
}

const Heading2:FC<Props> = memo((props) => {
  const { children='', sx={} } = props;

  sx["fontSize"] = "fontSize" in sx ? 'inherit' : "24px";
  sx["fontWeight"] = "fontWeight" in sx ? 'inherit' : "700";
  sx["letterSpacing"] = "letterSpacing" in sx ? 'inherit' : 1.5;


  return (
    <>
      <Typography variant='h2' sx={sx}>{ children }</Typography>
    </>
  )
});

Heading2.displayName = "Heading2";
export default Heading2;