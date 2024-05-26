import React, {useState} from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import SearchBarComponent from "../SearchBarComponent";

function Header({yScroll}) {

    const [click, setClick] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    const handleClick = () => setClick(!click);

    console.log("scrolled: ", yScroll);

  return (
      <nav className={yScroll > 50 ? "navbarScrolled" : "navbar" }onClick={e => setOpenSearch(false)}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="RaC-AP" height="70px"/>
            <p>Rotaract Club of <br /> Pune Pashan</p>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/blogs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blogs
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                exact
                to="/team/all"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Our Team
              </NavLink>
            </li>
            <li 
            className="nav-item">
            <a
              href="https://demoexp.netlify.app/"
              target='_blank'
              className="nav-links"
            >
              Expression
            </a>

            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/events/CMD"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to=""
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>


          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
        <SearchBarComponent openSearch={openSearch} setOpenSearch={setOpenSearch}/>
      </nav>
  );
}

export default Header;
