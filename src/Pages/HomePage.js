import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook2,ImInstagram } from "react-icons/im";
import { VscGithubInverted } from "react-icons/vsc";

function HomePage() {
  return (
    <div className="home-page">
      <header className="hero">
        <h1 className="hero-text">
          Hi, Iam
          <span> Manshad</span>
        </h1>
        <p className="hero-sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia
          hic eaque voluptatibus aliquid similique! Iure vitae consectetur vel
          facilis?
        </p>
        <div className="icons">
          <Link className="icon-holder">
            <ImFacebook2 className="icon fb"/>
          </Link>
          <Link className="icon-holder">
            <VscGithubInverted className="icon gh"/>
          </Link>
          <Link className="icon-holder">
            <ImInstagram className="icon ig"/>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
