import { FC, memo } from "react";

import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";

import { snslinklist } from "@/data/data";
import { SnsLink } from "@/type/type";

const SnsLinkList:FC = memo(() => {
  return (
    <>
      <List sx={{
        p:0, 
        maxWidth:'300px',
        display:'flex', 
        alignItems:'center'
      }}>
        {snslinklist.map((sns:SnsLink) => (
          <ListItem key={sns.title} sx={{
            mr:3,
            p:0.5, 
            width: 'auto',
            backgroundColor: '#cbd5e11a',
            border: '2px solid #64748b1a',
            borderRadius: '5px',

          }}>
            <ListItemButton component="a" href={sns.link} target='_blank' sx={{
              p:0, 
              display: 'flex',
              flexShrink: 'inherit'
            }}>
              <ListItemIcon sx={{
                justifyContent: 'center',
                minWidth: 'auto',
                flexShrink: 'inherit',
                display: 'flex',
                alignItems: 'center', 
                color:'#fff'
              }}>
                {sns.icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
});

SnsLinkList.displayName = "SnsLinkList";
export default SnsLinkList;