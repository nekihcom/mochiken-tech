import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import { SnsLink } from '@/type/type';


export const snslinklist:Array<SnsLink> = [
  {
    title: 'X(Twitter)',
    link: 'https://x.com/nekihcom',
    icon: <XIcon fontSize='medium'/>
  },
  {
    title: 'GitHub',
    link: 'https://github.com/nekihcom',
    icon: <GitHubIcon fontSize='medium'/>
  },
  {
    title: 'Email',
    link: 'mailto:nekihcom0@gmail.com',
    icon: <EmailIcon fontSize='medium'/>
  },
]