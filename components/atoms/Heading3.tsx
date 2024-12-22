import { FC, memo } from "react";
import Dictionary from "@/type/type";
import { Typography } from "@mui/material";

type Props = {
  children?: string;
  sx?: Dictionary<string, string | number>;
}

const Heading3:FC<Props> = memo((props) => {
  const { children='', sx={} } = props;

  "fontSize" in sx ? null: sx["fontSize"] = "20px";
  "fontWeight" in sx ? null: sx["fontWeight"] = "700";
  "letterSpacing" in sx ? null :sx["letterSpacing"] = 1;

  return (
    <>
      <Typography variant='h3' sx={sx}>{ children }</Typography>
    </>
  )
});

Heading3.displayName = "Heading3";
export default Heading3;