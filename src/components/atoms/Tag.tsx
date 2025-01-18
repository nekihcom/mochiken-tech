import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

type Props = {
  label: string;
}

const Tag = (props:Props) => {
  const { label } = props;

  return (
    <>
      <Typography component={'p'} sx={{
        fontWeight:700,
        py: 1,
        px: 2,
        mr: 1,
        mb: 1,
        backgroundColor: grey[300],
        color: grey[800],
        borderRadius:2
      }}>{ label }</Typography>
    </>
  );
}

export default Tag;