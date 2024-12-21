import { FC, memo } from "react";
import Dictionary from "@/type/type";
import { Typography } from "@mui/material";

type Props = {
  children?: string;
  sx?: Dictionary<string, string | number>;
}

const Heading1:FC<Props> = memo((props) => {
  const { children='', sx={} } = props;

  "fontSize" in sx ? null: sx["fontSize"] = "28px";
  "fontWeight" in sx ? null: sx["fontWeight"] = "700";

  return (
    <>
      <Typography variant='h1' sx={sx}>{ children }</Typography>
    </>
  )
});

Heading1.displayName = "Heading1";
export default Heading1;