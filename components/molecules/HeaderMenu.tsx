'use client';
import { FC, memo, useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { teal } from "@mui/material/colors";

import PrimaryContainer from "@/components/atoms/PrimaryContainer";
import { siteConfig } from "@/config/site";
import { h1Style } from "@/styles/style";

// ナビゲーションリンクのリスト
const navItems = siteConfig.navItems;

// ヘッダータイトルのスタイル
const headerTitleStyle = { ...h1Style, ...{color:'#000', textTransform:'uppercase', fontSize:'20px', letterSpacing:'1px'}};

const HeaderMenu:FC = memo(() => {
  // モバイルドロワーの開閉状態を管理
  const [mobileOpen, setMobileOpen] = useState(false);

  // ドロワーの開閉を切り替える処理
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
    
  // PC時に表示されるヘッダーメニューの中身
  const headerMenuListItems = (
    <List className='headerMenu__list' sx={{ display: { xs: 'none', md: 'flex' } }}>
      {navItems.map((item) => (
        <ListItem className='headerMenu__list--item' key={item.label} sx={{width:'auto'}}>
          <ListItemButton component="a" href={item.href} sx={{ p:0, color: '#000', '&:hover':{backgroundColor:'#fff'} }}>
            <ListItemText primary={item.label} slotProps={{ primary: {fontWeight:700} }} />
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem sx={{width:'auto'}}>
        <ListItemButton component="a" href={'#Contact'} sx={{ borderRadius:2, textTransform:'uppercase', color:'#fff', backgroundColor:teal[700], '&:hover':{backgroundColor:teal[200]} }}>
          <ListItemText primary={'Contact'} slotProps={{ primary: {fontWeight:700} }} />
        </ListItemButton>
      </ListItem>
    </List>
  );

  // モバイル時に表示されるドロワーの中身
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ mt:7.5, textAlign: 'center' }}>
      <List className='hamburgerMenu__list'>
        {navItems.map((item) => (
          <ListItem className='hamburgerMenu__list--item' key={item.label} disablePadding>
            <ListItemButton component="a" href={item.href}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{width:'auto'}}>
          <ListItemButton component="a" href={'#Contact'} sx={{ borderRadius:2, textTransform:'uppercase', color:'#fff', backgroundColor:teal[700], '&:hover':{backgroundColor:teal[200]} }}>
            <ListItemText primary={'Contact'} slotProps={{ primary: {fontWeight:700, textAlign:'center'} }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  
  return (
    <>
      <AppBar component="nav" position="static" sx={{backgroundColor:'#fff', color:'#000'}}>
        <PrimaryContainer>
          <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

            <Box component='a' href='/' sx={{textDecoration:'none !important'}}>
              <Typography component={'h1'} sx={headerTitleStyle}>Mochiken.tech</Typography>
            </Box>
          
            { headerMenuListItems }

            <IconButton color="inherit" aria-label="open drawer" edge="end"
              onClick={handleDrawerToggle} sx={{
                ml: 2,
                display: { md: 'none' }, // md未満（モバイル）で表示
            }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </PrimaryContainer>
      </AppBar>

      {/* モバイル向けドロワー */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // モバイルパフォーマンス向上のため
        }}
        sx={{
          display: { xs: 'block', md: 'none' }, // xs〜smのみ表示
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
      }}>
        {drawer}
      </Drawer>
    </>
  )
});

HeaderMenu.displayName = "HeaderMenu";
export default HeaderMenu;