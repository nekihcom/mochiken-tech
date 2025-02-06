import { ReactNode } from "react";

export type Author = {
  name: string;
  picture: string;
};

export type Blog = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};


export type Sns = {
  title: string;
  link: string;
  color: string;
  username: string;
  icon: ReactNode;
};


export type Work = {
  title: string;
  link: string;
  thumbnail?: string;
  excerpt: string;
}