import { ReactNode } from "react";

import { Box, Grid2, Typography } from "@mui/material";
import { grey, teal } from "@mui/material/colors";

import Tag from "@/components/atoms/Tag";
import { oswaldFontFamily } from "@/data/fonts";


type Props = {
  title: string;
  list: Array<string>;
  icon: ReactNode;
  isMiddle?: boolean;
}
const SkillCard = (props:Props) => {
  const { title, list, icon, isMiddle=false } = props;
  return (
    <>
      <Grid2 size={{xs:12, md:4}}
        sx={
          isMiddle ? {
            py:4,
            borderTop: {
              xs: `1px solid ${grey[300]}`,
              md: 'none'
            }, 
            borderRight: {
              xs: 'none',
              md: `1px solid ${grey[300]}`
            }, 
            borderBottom: {
              xs: `1px solid ${grey[300]}`,
              md: 'none'
            },
            borderLeft: {
              xs: 'none',
              md: `1px solid ${grey[300]}`
            }
          } : {
            py:4
      }}>
        <Box sx={{display:'flex', justifyContent:'center', mb:1}}>
          <Box sx={{p:1, borderRadius:50, backgroundColor:teal[100], display:'inline-block'}}>
            { icon }
          </Box>
        </Box> 
        <Typography component={'h4'} sx={{fontFamily:oswaldFontFamily, mb:2, fontSize:20, textAlign:'center'}}>{ title }</Typography>
        <Box sx={{px:2,display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
          {list && list.map((skill, index) => <Tag key={index} label={skill} />)}
        </Box>
      </Grid2>
    </>
  );
}

export default SkillCard;