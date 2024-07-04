// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link href="/" className="text-white mx-4">Home</Link>
        <Link href="/about" className="text-white mx-4">About</Link>
        <Link href="/projects" className="text-white mx-4">Projects</Link>
        <Link href="/contact" className="text-white mx-4">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
