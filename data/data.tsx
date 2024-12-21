import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import { SnsLink } from '@/type/type';


export const snslinklist:Array<SnsLink> = [
  {
    title: 'x',
    link: 'https://x.com/nekihcom',
    icon: <XIcon fontSize='medium'/>
  },
  {
    title: 'github',
    link: 'https://github.com/nekihcom',
    icon: <GitHubIcon fontSize='medium'/>
  },
  {
    title: 'email',
    link: 'mailto:nekihcom0@gmail.com',
    icon: <EmailIcon fontSize='medium'/>
  },
]