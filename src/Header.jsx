import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Suraj</div>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={open ? "bar bar1 active" : "bar bar1"}></div>
        <div className={open ? "bar bar2 active" : "bar bar2"}></div>
        <div className={open ? "bar bar3 active" : "bar bar3"}></div>
      </div>

      {/* Navigation */}
      <nav className={open ? "nav open" : "nav"}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
