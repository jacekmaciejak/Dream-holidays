import React, { useState, useEffect } from 'react';
import './Navbar.css'
import { FaAlignRight } from "react-icons/fa";
// import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { GiEarthAsiaOceania } from "react-icons/gi";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Jacek Maciejak<span><GiEarthAsiaOceania /></span>
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            {/* <i className={click ? <FaAlignRight /> : <AiFillCloseCircle />} /> */}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink exact to='/' className='nav-links' onClick={closeMobileMenu}
                activeClassName='link-active'>
                Strona główna
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/wycieczki'
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName='link-active'
              >
                Wycieczki
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName='link-active'
              >
                Blog
              </NavLink>
            </li>
            <li className='nav-item'>                            <NavLink
              to='/kontakt'
              className='nav-links'
              onClick={closeMobileMenu}
              activeClassName='link-active'
            >
              Kontakt
              </NavLink></li>

            <li>
              {/* <NavLink
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                                activeClassName='link-active'
                            >
                                Sign Up
              </NavLink> */}

            </li>
          </ul>
          {/* {button} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;







// export default class Navbar extends Component {
//   state = {
//     isOpen: false
//   };

//   handleToggle = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   };

//   render() {
//     return (
//       <nav className="navbar">
//         <div className="nav__center">
//           <div className="nav__header">
//             <NavLink to="/">
//               Jacek Maciejak<span><GiEarthAsiaOceania /></span>
//             </NavLink>
//             <button
//               type="button"
//               className="nav__btn"
//               onClick={this.handleToggle}
//             >
//               <FaAlignRight className="nav__icon" />
//             </button>
//           </div>
//           <ul
//             className={this.state.isOpen ? "nav__links show__nav" : "nav__links"}
//           >
//             <li>
//               <NavLink to="/" activeClassName='link-active' exact>Strona główna</NavLink>
//             </li>
//             <li>
//               <NavLink to="/wycieczki" activeClassName='link-active'>Wycieczki</NavLink>
//             </li>
//             <li>
//               <NavLink to="/blog" activeClassName='link-active'>Blog</NavLink>
//             </li>
//             <li>
//               <NavLink to="/kontakt" activeClassName='link-active'>Kontakt</NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }
