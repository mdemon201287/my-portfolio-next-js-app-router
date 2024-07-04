// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 p-4 mt-4">
        <div className="container mx-auto text-center text-white">
          &copy; {new Date().getFullYear()} My Portfolio
        </div>
      </footer>
    );
  };
  
  export default Footer;
  