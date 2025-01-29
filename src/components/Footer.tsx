import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="py-10 px-5">
        <p className="text-center">&copy; Copyright {new Date().getFullYear()}. Made by <Link href='/'>Masaya Kemmochi</Link></p>
      </div>
    </>
  );
}

export default Footer;