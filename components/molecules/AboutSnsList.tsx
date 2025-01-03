import { FC, memo } from "react";

import { List, ListItem } from "@mui/material";
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import SnsLinkButton from "@/components/atoms/SnsLinkButton";

const AboutSnsList:FC = memo(() => {
  return (
    <>
      <List sx={{
        p:0}}>
        <ListItem sx={{p:0, mb:0, justifyContent:'center'}}>
          <SnsLinkButton href='https://x.com/nekihcom' sns='X(Twitter)' username='@nekihcom' icon={<XIcon fontSize='large'/>} bgColor='#000' />
        </ListItem>
        <ListItem sx={{p:0, my:2, justifyContent:'center'}}>
          <SnsLinkButton href='https://github.com/nekihcom' sns='GitHub' username='@nekihcom' icon={<GitHubIcon fontSize='large'/>} bgColor='grey' />
        </ListItem>
        <ListItem sx={{p:0, mb:0, justifyContent:'center'}}>
          <SnsLinkButton href='https://qiita.com/nekihcom' sns='Qiita' username='@nekihcom' icon={<EmailIcon fontSize='large'/>} bgColor='#347a00' />
        </ListItem>
      </List>      
    </>
  )
});

AboutSnsList.displayName = "AboutSnsList";
export default AboutSnsList;