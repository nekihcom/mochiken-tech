'use client';
import Link from 'next/link';

import { Box, Button, Flex, For } from '@chakra-ui/react';

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';


const menuList = [
  {
    title: 'BLOG',
    link: '/blog'
  },
  {
    title: 'WORK',
    link: '/work'
  },
]
const Menu = () => {
  return (
    <MenuRoot>
      {/* <Box display={{base:'block', md:'none'}}>
        <MenuTrigger asChild>
          <Button variant='outline' size='sm' border={'none'} className='hamburgerBtn'>
            <Box as={'span'}></Box>
            <Box as={'span'}></Box>
            <Box as={'span'}></Box>
          </Button>
        </MenuTrigger>
        <MenuContent>
          <For each={menuList}>
            {(item, index) => (
              <MenuItem key={index} value={item.title}>
                <Link href={item.link}>{item.title}</Link>
              </MenuItem>
            )}
          </For>
        </MenuContent>
      </Box> */}
      <Box 
        // display={{base:'none', md:'block'}} 
        position={{md:'relative'}}
      >
        <Box position={{md:'absolute'}} display={{base:'flex', md:'block'}} right={{md:0}}>
          <For each={menuList}>
            {(item, index) => (
              <Box key={index} 
                fontSize={'1.2rem'}
                fontWeight={700}
                cursor={'pointer'}
                mb={{md:3}}
                ml={{base:5, md:0}}
              >
                <Link href={item.link} className='link under-line'>{item.title}</Link>
              </Box>
            )}
          </For>
        </Box>
      </Box>
    </MenuRoot>
  )
}

export default Menu;