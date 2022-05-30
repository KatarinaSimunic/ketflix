import React from "react";
import bgimg from "../../Assets/bg.jpg";
import "./HeroPage.css";
import { Link } from "react-router-dom";

function HeroPage() {
  return (
    <>
      <div
        className="HeroPage"
        style={{
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url("${bgimg}")`,
          backgroundPosition: "center",
          objectFit: "contain",
        }}
      >
        <div className="welcome-card">
          <h1 className="heroheading">Dobrodošli u svijet filmova.</h1>
          <ul>
            <li className="buttons">
              <Link to="/Home">
                <button className="navi-btn">NASLOVNA</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
