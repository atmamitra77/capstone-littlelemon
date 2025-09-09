function Footer() {
  return (
    <footer className="footer">
      {/* Logo-Bereich */}
      <div className="footer-logo">
        <img src="/assets/little-lemon-logo.svg" alt="Little Lemon Logo" />
      </div>

      {/* Navigation */}
      <div className="footer-nav">
        <h4>Navigation</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>

      {/* Kontakt */}
      <div className="footer-contact">
        <h4>Contact</h4>
        <p>
          123 Lemon Street
          <br />
          Chicago, IL
        </p>
        <p>+1 (555) 123-4567</p>
        <p>info@littlelemon.com</p>
      </div>

      {/* Social Media */}
      <div className="footer-social">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://instagram.com">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
