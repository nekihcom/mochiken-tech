import "@/app/globals.css";
import GlobalHeader from "@/components/organisms/layout/GlobalHeader";
import GlobalFooter from "@/components/organisms/layout/GlobalFooter";


export const metadata = {
  description: "エンジニアもちけんのポートフォリオサイトです",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body>
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}

export default RootLayout;