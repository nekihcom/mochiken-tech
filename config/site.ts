export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Mochiken's Portfolio",
  description: "エンジニアもちけんのポートフォリオサイトです",
  navItems: [
    { label: 'About', href: '#About' },
    { label: 'Works', href: '#Works' },
    { label: 'Articles', href: '#Articles' },
  ],
};


export const apiSource = 'https://api.mochiken.blog'