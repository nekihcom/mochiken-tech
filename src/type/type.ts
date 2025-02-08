import { ReactNode } from "react";

export type Author = {
  name: string;
  picture: string;
};

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | undefined;
  revisedAt?: string | undefined;
  title: string;
  body: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  },
  createDt?: Date;
}



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