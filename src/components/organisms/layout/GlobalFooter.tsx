import GlobalContainer from "./GlobalContainer";

const GlobalFooter = () => {

  return (
    <footer>
      <GlobalContainer>
        <p className="text-center">&copy; Copyright {new Date().getFullYear()}. <br className="sm:hidden"/>Made by Masaya Kemmochi</p>
      </GlobalContainer>
    </footer>
  );
}

export default GlobalFooter;