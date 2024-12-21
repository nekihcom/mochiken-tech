import type { Metadata } from "next";
import { FC, memo, ReactNode } from "react";

// import { M_PLUS_1_Code } from "next/font/google";

import '@/styles/global.css';
import { siteConfig } from "../config/site";


// const MPlus1CodeFont = M_PLUS_1_Code({ 
//   weight: "400", 
//   subsets: ["latin"],
//   variable: "--font-MPlus1Code"
// });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  }
};

type Props = {
  children: ReactNode;
}

const RootLayout:FC<Props> = memo((props) => {
  const {children} = props;

  return (
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
      </head>
      <body 
        // className={`${MPlus1CodeFont.variable} font-MPlus1Code`}
      >
        { children }
      </body>
    </html>
  );
});

RootLayout.displayName = "RootLayout";
export default RootLayout;