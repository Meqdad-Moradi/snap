import React, { useState } from "react";
import logo from "./../assets/images/logo.svg";
import todoListIcon from "./../assets/images/icon-todo.svg";
import calenderIcon from "./../assets/images/icon-calendar.svg";
import reminderIcon from "./../assets/images/icon-reminders.svg";
import planningIcon from "./../assets/images/icon-planning.svg";

import arrowDown from "../assets/images/icon-arrow-down.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";

import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close-menu.svg";

const Header = () => {
   const [featuresMenu, setFeaturesMenu] = useState(false);
   const [companyMenu, setCompanyMenu] = useState(false);
   const [toggle, setToggle] = useState(false);

   const features = () => {
      setFeaturesMenu(!featuresMenu);
      setCompanyMenu(false);
   };

   const company = () => {
      setCompanyMenu(!companyMenu);
      setFeaturesMenu(false);
   };

   const mobileMenu = () => {
      setToggle(!toggle);
   };

   return (
      <header className="header">
         <div className="container">
            {/* logo */}
            <div className="logo">
               <a href="#s">
                  <img src={logo} alt="snap" />
               </a>
            </div>

            {/* primary navigation */}
            <nav className={!toggle ? "primary-nav" : "primary-nav active"}>
               <ul className="nav-list">
                  <li
                     className={
                        featuresMenu
                           ? "primary-nav-link active"
                           : "primary-nav-link"
                     }
                     onClick={() => features()}
                  >
                     <a href="#s">
                        features{" "}
                        <img src={featuresMenu ? arrowUp : arrowDown} alt="" />
                     </a>

                     {/* sub menu */}
                     <div className="sub-menu">
                        <ul className="sub-menu-list">
                           <li>
                              <a
                                 href="https://meqdad-moradi.github.io/todo-list/"
                                 target="blank"
                              >
                                 <img src={todoListIcon} alt="" />
                                 todo list
                              </a>
                           </li>
                           <li>
                              <a href="#s">
                                 <img src={calenderIcon} alt="" />
                                 calender
                              </a>
                           </li>
                           <li>
                              <a href="#s">
                                 <img src={reminderIcon} alt="" />
                                 reminders
                              </a>
                           </li>
                           <li>
                              <a href="#s">
                                 <img src={planningIcon} alt="" />
                                 planning
                              </a>
                           </li>


                           <li>
                              <a
                                 href="https://meqdad-moradi.github.io/todo-list/"
                                 target="blank"
                              >
                                 <img src={todoListIcon} alt="" />
                                 todo list
                              </a>
                           </li>
                           <li>
                              <a href="#s">
                                 <img src={calenderIcon} alt="" />
                                 calender
                              </a>
                           </li>
                           <li>
                              <a href="#s">
                                 <img src={reminderIcon} alt="" />
                                 reminders
                              </a>
                           </li>
                           <li>
                              <a href="#s">
                                 <img src={planningIcon} alt="" />
                                 planning
                              </a>
                           </li>



                           <li>
                              <a
                                 href="https://meqdad-moradi.github.io/todo-list/"
                                 target="blank"
                              >
                                 <img src={todoListIcon} alt="" />
                                 todo list
                              </a>
                           </li>
                           <li>
                              <a href="#s">
                                 <img src={calenderIcon} alt="" />
                                 calender
                              </a>
                           </li>
                           <li>
                              <a href="#s">
                                 <img src={reminderIcon} alt="" />
                                 reminders
                              </a>
                           </li>
                           <li>
                              <a href="#s">
                                 <img src={planningIcon} alt="" />
                                 planning
                              </a>
                           </li>



                           <li>
                              <a
                                 href="https://meqdad-moradi.github.io/todo-list/"
                                 target="blank"
                              >
                                 <img src={todoListIcon} alt="" />
                                 todo list
                              </a>
                           </li>
                           <li>
                              <a href="#s">
                                 <img src={calenderIcon} alt="" />
                                 calender
                              </a>
                           </li>
                           <li>
                              <a href="#s">
                                 <img src={reminderIcon} alt="" />
                                 reminders
                              </a>
                           </li>
                           <li>
                              <a href="#s">
                                 <img src={planningIcon} alt="" />
                                 planning
                              </a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li
                     className={
                        companyMenu
                           ? "primary-nav-link active"
                           : "primary-nav-link"
                     }
                     onClick={() => company()}
                  >
                     <a href="#s">
                        companys{" "}
                        <img src={companyMenu ? arrowUp : arrowDown} alt="" />
                     </a>

                     {/* sub menu */}
                     <div className="sub-menu">
                        <ul className="sub-menu-list">
                           <li>
                              <a href="#s">history</a>
                           </li>
                           <li>
                              <a href="#s">Our Team</a>
                           </li>
                           <li>
                              <a href="#s">Blog</a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li className="primary-nav-link">
                     <a href="#s">careers</a>
                  </li>
                  <li className="primary-nav-link">
                     <a href="#s">about</a>
                  </li>
               </ul>

               {/* buttons */}
               <div className="buttons">
                  <button className="btn" aria-label="login">
                     login
                  </button>
                  <button className="btn" aria-label="register">
                     register
                  </button>
               </div>
            </nav>

            {/* mobile menu */}
            <div className="mobile-menu">
               <button
                  className={!toggle ? "toggle-btn" : "toggle-btn active"}
                  onClick={() => mobileMenu()}
               >
                  <img src={toggle ? iconClose : iconMenu} alt="" />
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
