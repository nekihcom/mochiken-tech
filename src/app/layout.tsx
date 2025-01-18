import { 
  M_PLUS_2,
  Zen_Maru_Gothic
} from "next/font/google";

import "@/app/globals.css";
import GlobalHeader from "@/components/organisms/layout/GlobalHeader";
import GlobalFooter from "@/components/organisms/layout/GlobalFooter";
import { createTheme, ThemeProvider } from "@mui/material";


export const metadata = {
  title: "Mochiken's Portfolio",
  description: "エンジニアもちけんのポートフォリオサイトです",
};

const mainFont = M_PLUS_2({
  weight: "400"
})

const theme = createTheme({
  
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body>
        {/* <ThemeProvider theme={theme}> */}
          <GlobalHeader />
          {children}
          <GlobalFooter />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

export default RootLayout;