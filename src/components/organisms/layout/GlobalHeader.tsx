import GlobalContainer from "./GlobalContainer";
import Link from "next/link";

const GlobalHeader = () => {
  return (
    <header className="bg-slate-200 h-20">
      <GlobalContainer>
        <nav>
          <ul className="flex justify-around">
            <li className="underline">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="underline">
              <Link href={"/fetch-example"}>Fetch Example</Link>
            </li>
          </ul>
        </nav>
      </GlobalContainer>
    </header>
  );
}

export default GlobalHeader;