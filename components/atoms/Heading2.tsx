import { FC, memo } from "react";
import Dictionary from "@/type/type";
import { Typography } from "@mui/material";

type Props = {
  children?: string;
  sx?: Dictionary<string, string | number>;
}

const Heading2:FC<Props> = memo((props) => {
  const { children='', sx={} } = props;

  "fontSize" in sx ? null: sx["fontSize"] = "24px";
  "fontWeight" in sx ? null: sx["fontWeight"] = "700";

  return (
    <>
      <Typography variant='h2' sx={sx}>{ children }</Typography>
    </>
  )
});

Heading2.displayName = "Heading2";
export default Heading2;