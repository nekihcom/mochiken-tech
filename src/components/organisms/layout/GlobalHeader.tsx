import { Box } from "@mui/material";
import HeaderMenu from "@/components/molecules/HeaderMenu";

const GlobalHeader = () => {
  return (
    <>
      <Box component={'header'}>
        <HeaderMenu />
      </Box>
    </>
  );
}

export default GlobalHeader;