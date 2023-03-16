import "./navbar.css";
import data from "./data";
import Logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMobile, setisMobile] = useState(false);

  const handleClick = () => setisMobile(!isMobile);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="" height="50" />
          </a>
        </div>

        <ul
          className={isMobile ? "nav_menu active" : "nav_menu"}
          onClick={() => setisMobile(false)}
        >
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button className="home-btn">Resume</button>
        <div className="hamburger" onClick={handleClick}>
          {isMobile ? (
            <FaTimes size={20} className="close" />
          ) : (
            <FaBars size={20} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
