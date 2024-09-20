import logo from "./../assets/logo_white on black.png";

function Header({ isScrolled }) {
  return (
    <header
      className={`fixed top-0 left-0 w-full bg-black transition-all duration-300 ${
        isScrolled ? "h-16" : "h-32"
      }`}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <img
          src={logo}
          alt="Logo"
          className={`transition-all duration-300 ml-5 ${
            isScrolled ? "w-12" : "w-24"
          }`}
        />
        <nav className="text-white">
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
