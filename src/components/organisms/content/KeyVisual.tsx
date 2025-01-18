import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

import ScrollDoown from "@/components/atoms/ScrollDown";

const KeyVisual = () => {
  return (
    <>
      <Box className='flex flex-1 justify-center items-center w-screen' sx={{
        height:'95vh',
        background: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/keyvisual-bg.svg)',
        backgroundAttachment: 'fixed'
      }}>
        <Box sx={{mb:{md:10}, display:'flex', flexWrap:'wrap', justifyContent:'center', flexDirection:{sm:'column'}}}>
          <Box sx={{display:{sm:'flex'}, alignItems:{sm:'center'}}}>
            <Typography component={'h1'} sx={{fontWeight:700, fontSize:48}}>
              👋 Hey, <br className='md:hidden' /><Box component={'span'} sx={{color:teal[700]}}>{`I'm Mochiken`}</Box>
            </Typography>
            <Image src={"/me.PNG"} alt={"Mochiken Avatar"} width={300} height={300} />
          </Box>
          <Typography component={'h2'} sx={{fontWeight:700, fontSize:{xs:20,md:42}, textAlign:'center'}}>
            <Box component={'span'} sx={{color:teal[700]}}>{`Mochiken's Engineering Portfolio`}</Box>
          </Typography>
        </Box>
        <ScrollDoown />
      </Box>
    </>
  );
}

export default KeyVisual;