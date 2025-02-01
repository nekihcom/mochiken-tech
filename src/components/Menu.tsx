'use client';
import Link from 'next/link';

import { Box, Button } from '@chakra-ui/react';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';


const Menu = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant='outline' size='sm' css={{border:'none'}} className='hamburgerBtn'>
          <Box as={'span'}></Box>
          <Box as={'span'}></Box>
          <Box as={'span'}></Box>
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value='new-txt-a'>
          <Link href={'#dummy'}>Dummy</Link>
        </MenuItem>
        <MenuItem value='new-file-a'>
          Menu B         
        </MenuItem>
        <MenuItem value='new-win-a'>
          Menu C
        </MenuItem>
        <MenuItem value='open-file-a'>
          Menu D
        </MenuItem>
        <MenuItem value='export-a'>
          Menu E
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}

export default Menu;