import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="#43a047 green darken-1">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">React Shop</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><a href="https://github.com/kozh-0">Github</a></li>
          </ul>
        </div>
      </nav>
    )
}