import React, { Component } from "react";
import './Navbar.css'
import { FaAlignRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/">
              Jacek Maciejak<span><GiEarthAsiaOceania /></span>
            </NavLink>
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
              <NavLink to="/" activeClassName='link-active' exact>Strona główna</NavLink>
            </li>
            <li>
              <NavLink to="/wycieczki" activeClassName='link-active'>Wycieczki</NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName='link-active'>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/kontakt" activeClassName='link-active'>Kontakt</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
