import React from "react";
import "./style.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="wrapper">
        <div className="brandingContainer">
          <div className="logo">
            <img src="" className="imgStyle" alt="logo" />
          </div>
          <div className="logoName">
            <p>logo</p>
          </div>
          <div className="iconsContainer">
            <ul>
              <li>
                <a href="#">
                  <img src="" className="imgStyle" alt="search" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="" className="imgStyle" alt="like" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="" className="imgStyle" alt="shop" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="" className="imgStyle" alt="profile" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="" className="imgStyle" alt="language" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menuLinks">
          <ul>
            <li>
              <a href="#">shop</a>
            </li>
            <li>
              <a href="#">skills</a>
            </li>
            <li>
              <a href="#">stories</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
