import React from "react";
import "../css/nav.css";
import navImage from "../images/ac.png";

const Menu = () => {
  const toggleNavigation= () => {
    document.getElementsByTagName('body')[0].classList.remove('nav-open');
  }
  return (
    <div>
      <a href="#navigation" className="nav-trigger">
        Menu <span></span>
      </a>

      <nav className="nav-container" id="navigation">
        <header className="navImg-div">
          <img className="navImg" src={navImage} alt="" />
        </header>

        <ul className="nav">
          <li>
            <a href="#heroID" className="navi-item" onClick={toggleNavigation}>Home</a>
          </li>
          <li>
            <a href="#timeline" className="navi-item" onClick={toggleNavigation}>Itinerary</a>
          </li>
          {/* <li>
            <Link to="/" className="navi-item">Locations</Link>
          </li> */}
          {/* <li>
            <Link to="/" className="navi-item">Accommodations</Link>
          </li> */}
          <li>
            <a href="/" className="navi-item" onClick={toggleNavigation}>Registry</a>
          </li>
          <li>
            <a href="#Rsvp" className="navi-item" onClick={toggleNavigation}>R.S.V.P</a>
          </li>
          <li>
            <a href="/faqs#faqs" className="navi-item" onClick={toggleNavigation}>FAQs</a>
          </li>
        </ul>
      </nav>

      <div className="overlay"></div>
    </div>
  );
};
export default Menu;
