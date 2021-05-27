import React from "react";
import { Link } from '@reach/router';
import "../css/nav.css";
import navImage from "../images/ac.png";

const Menu = () => {
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
            <Link to="/home" className="navi-item">Home</Link>
          </li>
          <li>
            <Link to="/itinerary" className="navi-item">Itinerary</Link>
          </li>
          {/* <li>
            <Link to="/" className="navi-item">Locations</Link>
          </li> */}
          {/* <li>
            <Link to="/" className="navi-item">Accommodations</Link>
          </li> */}
          <li>
            <Link to="/" className="navi-item">Registry</Link>
          </li>
          <li>
            <Link to="/rsvp" className="navi-item">R.S.V.P</Link>
          </li>
          <li>
            <Link to="/" className="navi-item">FAQs</Link>
          </li>
        </ul>
      </nav>

      <div className="overlay"></div>
    </div>
  );
};
export default Menu;
