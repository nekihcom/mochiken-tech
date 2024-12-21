import { FC, memo } from "react";

import PrimaryTemplate from "../templates/PrimaryTemplate";
import PrimaryContainer from "../atoms/PrimaryContainer";
import KeyVisual from "../organisms/contents/KeyVisual";

const Home:FC = memo(() => {
  return (
    <>
      <PrimaryTemplate>
        <KeyVisual />
        <PrimaryContainer>
          <p>Home contents</p>
        </PrimaryContainer>
      </PrimaryTemplate>
    </>
  )
});

Home.displayName = "Home";
export default Home;