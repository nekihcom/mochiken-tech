import { ReactNode } from "react";

export type ExamplePost = {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export type NavItem = {
  title: string;
  path: string;
}

export type SnsLinkCard = {
  service: string;
  link: string;
  color?: string;
  username: string;
  icon?: ReactNode;
}


export type Experience = {
  term: ReactNode;
  description: ReactNode;
  isDoing?: boolean;
}

export type Certificate = {
  date: string;
  certificateName: string;
}


export type Work = {
  id: number;
  title: string;
  image: string;
  description: string;
  url: string;
}