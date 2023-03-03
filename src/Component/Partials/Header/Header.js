import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import ham from "../../../assets/images/Icons and Logos/Ham (1).svg";
import logo from "../../../assets/images/Icons and Logos/BSAA Logo.png";
import bsaa from "../../../assets/images/Icons and Logos/logo.svg";
import user from "../../../assets/images/userImg.png";
import { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [forgotPassswordModal, setForgotPassswordModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { pathname } = useLocation();
  const handleLogin = () => {
    setLoginModal(!loginModal);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const handleCloseMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const handleOpenProfile = () => {
    setOpenProfile(!openProfile)
  }
  return (
    <div className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <button
          onClick={handleMobileMenu}
          className="hamburgerBtn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sideCanvas"
        >
          <img src={ham} alt="" />
        </button>
        {
        pathname.includes("/circulars") ||
        pathname.includes("/edit-profile") ||
        pathname.includes("/members") ||
        pathname.includes("/news-event-details") ||
        pathname.includes("/news-events") ||
        pathname.includes("/profile") ||
        pathname.includes("/shipping-stat") ||
        pathname.includes("/training-dev") ||
        pathname.includes("/about-us") ||
        pathname.includes("/berthing-report") ? (
          <Link className="navbar-brand" to="/">
            <img src={bsaa} alt="" />
          </Link>
        ) : (
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
        )}

        <div className="desktopNav m-auto">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/members">
                Our Members
              </Link>
            </li>
            <li onClick={handleDropdown} className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shipping Data
              </Link>
              {dropdown && (
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/berthing-report">
                      Berthing Report
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/shipping-stat">
                      Shipping Statistics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="tariffRates.html">
                      Tariff Rates
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/circulars">
                Circulars
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news-events">
                News & Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/training-dev">
                Training & Development
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
          {
        pathname.includes("/circulars") ||
        pathname.includes("/edit-profile") ||
        pathname.includes("/members") ||
        pathname.includes("/news-event-details") ||
        pathname.includes("/news-events") ||
        pathname.includes("/profile") ||
        pathname.includes("/shipping-stat") ||
        pathname.includes("/training-dev") ||
        pathname.includes("/about-us") ||
        pathname.includes("/berthing-report") ? (
          <Link className="nav-link navUserItem" role="button">
            <div onClick={handleOpenProfile} className="nav_user">
                <img src={user} alt=""/>
            </div>
           { openProfile && 
           <ul className="userDropdown">
                <li className="dropdown-item "><Link to="/profile">My Profile</Link></li>
                <li className="dropdown-item"><Link >Logout</Link></li>
            </ul>
            }
            </Link>
        ) : (
          <Link
          onClick={handleLogin}
          className="nav-link nav-btn"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          Log In
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99935 3.16658L7.05935 4.10658L10.7794 7.83325L2.66602 7.83325L2.66602 9.16658L10.7794 9.16658L7.05268 12.8866L7.99935 13.8333L13.3327 8.49992L7.99935 3.16658Z"
              fill="#BBC9ED"
            />
          </svg>
        </Link>
        )}

          </li>
         
        </ul>
      </div>
      {mobileMenu && (
        <div
          data-aos="fade-right"
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="sideCanvas"
        >
          <div class="offcanvas-header">
            <button
              onClick={handleCloseMobileMenu}
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="sideMenu">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/members">Our Members</Link>
              </li>
              <li>
                <Link onClick={handleDropdown} class="sideDropdown">
                  Shipping Data
                </Link>
                {dropdown && (
                  <ul class="dropdownMenu d-none">
                    <li>
                      <Link to="/berthing-report">Berthing Report</Link>
                    </li>
                    <li>
                      <Link to="/shipping-stat">Shipping Statistics</Link>
                    </li>
                    <li>
                      <Link to="">Tariff Rates</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="/circulars">Circulars</Link>
              </li>
              <li>
                <Link to="/news-events">News & Events</Link>
              </li>
              <li>
                <Link to="/training-dev">Training & Development</Link>
              </li>

              <li>
                <Link
                  class="nav-btn text-center"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Log In
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99935 3.16658L7.05935 4.10658L10.7794 7.83325L2.66602 7.83325L2.66602 9.16658L10.7794 9.16658L7.05268 12.8866L7.99935 13.8333L13.3327 8.49992L7.99935 3.16658Z"
                      fill="#BBC9ED"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {loginModal && (
        <Login
          forgotPassswordModal={forgotPassswordModal}
          setForgotPassswordModal={setForgotPassswordModal}
          registerModal={registerModal}
          setRegisterModal={setRegisterModal}
          loginModal={loginModal}
          setLoginModal={setLoginModal}
        />
      )}
      {registerModal && (
        <Register
          forgotPassswordModal={forgotPassswordModal}
          setForgotPassswordModal={setForgotPassswordModal}
          registerModal={registerModal}
          setRegisterModal={setRegisterModal}
          loginModal={loginModal}
          setLoginModal={setLoginModal}
        />
      )}
      {forgotPassswordModal && (
        <ForgotPassword
          forgotPassswordModal={forgotPassswordModal}
          setForgotPassswordModal={setForgotPassswordModal}
          registerModal={registerModal}
          setRegisterModal={setRegisterModal}
          loginModal={loginModal}
          setLoginModal={setLoginModal}
        />
      )}
    </div>
  );
}

export default Header;
