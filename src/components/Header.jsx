import React from "react";
import logo from "./../assets/images/logo.svg";

const Header = () => {
   return (
      <header>
         <div className="container">
            {/* logo */}
            <div className="logo">
               <a href="#">
                  <img src={logo} alt="snap" />
               </a>
            </div>

            {/* primary navigation */}
            <nav className="primary-nav">
               <ul className="nav-list">
                  <li>
                     <a href="#">features</a>
                  </li>
                  <li>
                     <a href="#">companys</a>
                  </li>
                  <li>
                     <a href="#">careers</a>
                  </li>
                  <li>
                     <a href="#">about</a>
                  </li>
               </ul>
            </nav>

            {/* buttons */}
            <div className="buttons">
               <button className="btn" aria-label="login">
                  login
               </button>
               <button className="btn" aria-label="register">
                  register
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
