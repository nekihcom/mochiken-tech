'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { grey, teal } from '@mui/material/colors';

import GlobalContainer from '@/components/organisms/layout/GlobalContainer';
import { navItems } from '@/data/site';
import { bizBoldClassName, bizFontFamily } from '@/data/fonts';

const ContactButton = () => {
  return (
    <>
      <Box
        component="a"
        href='#contact'
        sx={{
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
        }}
      >CONTACT</Box>
    </>
  )
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

const HeaderMenu = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{width:'90%', margin:'0 auto'}}>
            <ListItemButton>
              <Link href={`${item.path}`} className='w-full text-zinc-800 font-bold uppercase'>{item.title}</Link>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{width:'90%', margin:'0 auto'}}>
          <ListItemButton sx={{backgroundColor: teal[500], "&:hover": {
            backgroundColor: teal[500],
            opacity:'0.7',
            transition:'all .3s'
          }}}>
            <Link href={`#contact`} className='w-full font-bold uppercase text-white'>CONTACT</Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const HideOnScroll = (props: Props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children ?? <div />}
      </Slide>
    );
  }
  
  return (
    <>
    <Box className='flex'>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav" sx={{backgroundColor:'#fafafa', fontFamily:bizFontFamily}}>
          <GlobalContainer>
            <Toolbar>
              <Typography
                variant="h6"
                component="h1"
                className='text-zinc-800'
                sx={{ 
                  flexGrow: 1, 
              }}>
                <Link href={'/'} className={'font-bold '+bizBoldClassName}>Mochiken.tech</Link>
              </Typography>
            
              <Box sx={{ display: { xs: 'none', md: 'block' }, color:grey[900], fontWeight:700, }}>
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path} className='underline-animation mr-7 uppercase'>
                    {item.title}
                  </Link>
                ))}
                <ContactButton />
              </Box>

              <IconButton
                className='text-zinc-800'
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </GlobalContainer>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          anchor='right'
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
    <Toolbar />
    </>
  );
}

export default HeaderMenu;