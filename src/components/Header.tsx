import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex py-10 px-5">
        <h1>Mochiken.</h1>
        <nav>
          <ul className="flex">
            <li className="ml-5">
              <Link href="/" className="underline">Top</Link>
            </li>
            <li className="ml-5">
              <Link href="/blog" className="underline">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;