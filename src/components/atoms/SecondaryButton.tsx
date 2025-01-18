import { Box } from "@mui/material";
import { teal } from "@mui/material/colors";


type Props = {
  href: string;
  label: string;
  isTarget?: string;
}
const SecondaryButton = (props:Props) => {
  const { href, label, isTarget='' } = props;
  return (
    <>
      <Box
        component="a"
        href={href}
        target={isTarget}
        sx={{
          mt: 3,
          display: "inline-block",
          backgroundColor: 'none',
          border: `1px solid ${teal[500]}`,
          color: teal[500],
          fontWeight: "bold",
          textDecoration: "none",
          padding: "12px 24px",
          borderRadius: 1,
          "&:hover": {
            opacity:0.7,
            transition:'all .3s'
          },
        }}
      >{label}</Box>
    </>
  );
}

export default SecondaryButton;