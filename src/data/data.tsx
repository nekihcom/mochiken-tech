import Image from 'next/image';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';

import { Sns } from "@/type/type";

export const SnsLinkList:Array<Sns> = [
  {
    title: 'X (Twitter)',
    link: 'https://x.com/nekihcom',
    color: 'gray.800',
    username: '@nekihcom',
    icon: <FaXTwitter size={'2rem'} />
  },
  {
    title: 'GitHub',
    link: 'https://github.com/nekihcom',
    color: 'gray.600',
    username: '@nekihcom',
    icon: <FaGithub size={'2rem'} />
  },
  {
    title: 'Qiita',
    link: 'https://qiita.com/nekihcom',
    color: 'green.700',
    username: '@nekihcom',
    icon: <Image src={'/icon/qiita-green.png'} alt={"Qiita"} width={32} height={32} />
  },
];
