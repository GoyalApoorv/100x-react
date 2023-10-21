import Logo from "../assets/100x-logo.svg";

function Header() {
  return (
    <header className="fixed flex w-full items-center justify-center px-3 py-4">
      <img src={Logo} />
    </header>
  );
}

export default Header;
