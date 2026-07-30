import Link from "next/link";

export const Header = () => (
  <header className="p-10 text-center bg-black">
    <Link href="/" className="font-bold text-2xl text-white 
    hover:text-green-300 transition-colors duration-300">
      Fruit Archive
    </Link>
  </header>
);
