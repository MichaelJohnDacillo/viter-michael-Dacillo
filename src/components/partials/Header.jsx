import React from 'react'
import Logo from '../../svg/logo';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        {/* Header */}
      <header className="fixed w-full bg-black text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-yellow-300 transition">
                Home
              </a>
              <a href="#races" className="hover:text-yellow-300 transition">
                Races
              </a>
              <a href="#drivers" className="hover:text-yellow-300 transition">
                Drivers
              </a>
              <a href="#drivers" className="hover:text-yellow-300 transition">
                Teams
              </a>
            </nav>
            <button
              onClick={toggleMenu}
              className="md:hidden text-xl focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : "☰"}
            </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-white text-2xl">
          <a href="#home" className="hover:text-yellow-300 transition" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#races" className="hover:text-yellow-300 transition" onClick={() => setIsMenuOpen(false)}>
            Races
          </a>
          <a href="#drivers" className="hover:text-yellow-300 transition" onClick={() => setIsMenuOpen(false)}>
            Drivers
          </a>
          <a href="#drivers" className="hover:text-yellow-300 transition" onClick={() => setIsMenuOpen(false)}>
            Teams
          </a>
      </div>
    </div>

    </>
  );
};

export default Header;