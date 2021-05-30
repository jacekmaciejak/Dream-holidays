import React, { Component } from "react";
import './Navbar.css'
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiEarthAsiaOceania } from "react-icons/gi";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav__center">
          <div className="nav__header">
            <Link to="/">
              Jacek Maciejak<span><GiEarthAsiaOceania /></span>
            </Link>
            <button
              type="button"
              className="nav__btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav__icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav__links show__nav" : "nav__links"}
          >
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/rooms">Wycieczki</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
