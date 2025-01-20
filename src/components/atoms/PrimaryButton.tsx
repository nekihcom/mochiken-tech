import { bizFontFamily } from "@/data/fonts";
import { Box } from "@mui/material";
import { teal } from "@mui/material/colors";


type Props = {
  href: string;
  label: string;
  isTarget?: string;
}
const PrimaryButton = (props:Props) => {
  const { href, label, isTarget='' } = props;
  return (
    <>
      <Box
        component="a"
        href={href}
        target={isTarget}
        sx={{
          fontFamily:bizFontFamily, 
          mt: 3,
          display: "inline-block",
          backgroundColor: teal[500],
          color: "#fff",
          fontWeight: "bold",
          textDecoration: "none",
          padding: "12px 24px",
          borderRadius: 1,
          "&:hover": {
            opacity:0.7,
            transition:'all .3s'
          },
          width: {
            xs:'100%',
            md:'auto'
          },
          textAlign:'center'
        }}
      >{label}</Box>
    </>
  );
}

export default PrimaryButton;