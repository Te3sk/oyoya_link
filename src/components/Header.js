import logo from "../assets/logo_white on black.png" 

function Header() {
  return (
    <div className="w-screen flex justify-center items-center mb-3">
      <div className="w-1/3 h-1/6 overflow-y-hidden">
        <img src={logo} alt="logo"/>
      </div>
    </div>
  );
}

export default Header;
