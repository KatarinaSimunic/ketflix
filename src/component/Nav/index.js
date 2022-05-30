import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav>
        <div className="nav">
          <ul className="nav-buttons">
            <li className="buttons">
              <Link to="/Home">
                <button className="nav-btn">NASLOVNA</button>
              </Link>
            </li>
            <h1 id="logo"> Ketflix </h1>
            <li className="buttons">
              <Link to="/Search">
                <button className="nav-btn">PRETRAŽI</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
