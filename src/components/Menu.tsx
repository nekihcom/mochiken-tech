'use client';
import Link from 'next/link';

import { Box, For } from '@chakra-ui/react';

import {
  MenuRoot,
} from '@/components/ui/menu';


const menuList = [
  {
    title: 'WORK',
    link: '/work'
  },
]
const Menu = () => {
  return (
    <MenuRoot>
      <Box position={{md:'relative'}}>
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