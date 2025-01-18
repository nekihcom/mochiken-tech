import { Box } from "@mui/material";

import KeyVisual from "@/components/organisms/content/KeyVisual";
import Profile from "@/components/organisms/content/Profile";
import Works from "@/components/organisms/content/Works";
import Articles from "@/components/organisms/content/Articles";
import HomeContact from "@/components/organisms/content/HomeContact";


const Home = () => {
  return (
    <>
      <title>トップ</title>
      <Box component={'main'} sx={{backgroundColor:'#fafafa'}}>
        <KeyVisual />
        <Profile />
        <Works />
        <Articles />
        <HomeContact />
      </Box>
    </>
  );
}

export default Home;