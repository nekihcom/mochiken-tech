import Image from "next/image";

import { green, grey } from '@mui/material/colors';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Certificate, Experience, NavItem, SnsLinkCard } from "@/type/type"


export const globalBackgroundColor:string = grey[200];

export const navItems: Array<NavItem> = [
  {
    title:'Profile',
    path:'#profile'
  },
  {
    title:'Works',
    path:'#works'
  },
  {
    title:'Articles',
    path:'#articles'
  }
];


export const SnsLinks: Array<SnsLinkCard> = [
  {
    service: 'X',
    link: 'https://x.com/nekihcom',
    color: 'black',
    username: '@nekihcom',
    icon: <XIcon sx={{color:'white'}} />
  },
  {
    service: 'GitHub',
    link: 'https://github.com/nekihcom',
    color: grey[700],
    username: '@nekihcom',
    icon: <GitHubIcon sx={{color:'white'}} />
  },
  {
    service: 'Qiita',
    link: 'https://qiita.com/nekihcom',
    color: green[800],
    username: '@nekihcom',
    icon: <Image src={"/qiita.png"} alt={"Qiita"} width={24} height={24} />
  }
];


export const workExperience: Array<Experience> = [
  {
    term: <>2022/04<br className="md:hidden"/>〜現在</>,
    description: <>Udemy講座ティーチングアシスタント</>,
    isDoing: true
  },
  {
    term: <>2019/04<br className="md:hidden"/>〜現在</>,
    description: <>日系SIerにてプロジェクトリーダーとして各種案件に従事</>,
    isDoing: true
  },
  {
    term: <>2019/03</>,
    description: <>成蹊大学理工学部情報科学科　卒業</>
  }
]


export const certificates: Array<Certificate> = [
  {
    date: '2022/08',
    certificateName: 'Drupal9 SiteBuilder'
  },
  {
    date: '2022/07',
    certificateName: 'TOEIC 645点'
  },
  {
    date: '2020/12',
    certificateName: '応用情報情報技術者'
  },
  {
    date: '2019/06',
    certificateName: '基本情報技術者'
  },
]


export const frontendSkillsList: Array<string> = [
  'HTML', 'CSS', 'Sass', 'Bootstrap', 'TailwindCSS', 'Javascript', 'jQuery', 'React', 'Next.js', 'Typescript', 
  'Wordpress', 'Drupal', 'Figma', 
]

export const backendSkillsList: Array<string> = [
  'PHP', 'Symfony', 'Java', 'Python', 'Tensorflow', 'Keras', 'Wordpress', 'Drupal',
  'Apache', 'MySQL', 'PostgreSQL', 'AWS', 'Linux'
]

export const devopsSkillsList: Array<string> = [
  'Git', 'GitHub', 'Vercel', 'Netlify', 'Firebase', 'Cloudflare'
]