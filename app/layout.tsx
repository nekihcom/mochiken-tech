import type { Metadata } from "next";
import { FC, memo, ReactNode } from "react";
// import { M_PLUS_1_Code } from "next/font/google";


// import "./globals.css";
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
    <html suppressHydrationWarning>
      <head />
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