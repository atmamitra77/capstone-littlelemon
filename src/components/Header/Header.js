import Nav from "../Nav/Nav";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/little-lemon-logo.svg" alt="Little Lemon Logo" />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
