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
};



export type Sns = {
  title: string;
  link: string;
  color: string;
  username: string;
  icon: ReactNode;
};


export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string
  title: string;
  thumbnail: {
      url: string;
      height: number;
      width: number;
  };
  link: string;
  excerpt: string;
  body: string;
};


export type QiitaItemResponse = {
  coediting: boolean;
  comments_count: number;
  created_at: string;
  id: string;
  likes_count: number;
  page_views_count: number;
  private: boolean;
  reactions_count: number;
  rendered_body: string;
  tags: { name: string; versions: [] }[];
  title: string;
  updated_at: string;
  url: string;
  user: {
    description: string;
    facebook_id: string;
    followees_count: number;
    followers_count: number;
    github_login_name: string;
    id: string;
    items_count: number;
    linkedin_id: string;
    location: string;
    name: string;
    organization: string;
    permanent_id: number;
    profile_image_url: string;
    team_only: boolean;
    twitter_screen_name: string;
    website_url: string;
  };
};

export type ParsedQiitaItem = {
  coediting: boolean;
  comments_count: number;
  created_at: string;
  id: string;
  likes_count: number;
  ogpImageUrl: string;
  page_views_count: number;
  private: boolean;
  reactions_count: number;
  tags: { name: string; versions: [] }[];
  title: string;
  updated_at: string;
  url: string;
};
