'use client';
import { FC, memo, useState } from "react";
import Link from 'next/link';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import PrimaryContainer from "@/components/atoms/PrimaryContainer";
import { h1Style } from "@/styles/style";

// ナビゲーションリンクのリスト
const navItems = [
  { label: '概要', href: '/overview' },
  { label: '料金', href: '/pricing' },
  { label: 'お問い合せ', href: '/contact' },
];

const headerTitleStyle = { ...h1Style, ...{color:'#000', textTransform:'uppercase'}};

const HeaderMenu:FC = memo(() => {
  // モバイルドロワーの開閉状態を管理
  const [mobileOpen, setMobileOpen] = useState(false);

  // ドロワーの開閉を切り替える処理
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
    
  // モバイル時に表示されるドロワーの中身
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit', textTransform:'uppercase' }}>
          Mochiken.tech
        </Link>
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component="a" href={item.href}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
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
          
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item.label} href={item.href} sx={{ color: '#000' }}>
                  {item.label}
                </Button>
              ))}
            </Box>

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