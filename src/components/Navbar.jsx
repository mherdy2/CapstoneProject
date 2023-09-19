function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">Fake Store</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
