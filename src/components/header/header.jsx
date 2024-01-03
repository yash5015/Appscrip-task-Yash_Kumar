import React from "react";
import "./style.css";
const Header = () => {
  return (
    <>
      <div className="top-banner">
        <div className="wrapper bannerWrapper">
          <div className="banner">
            <img src="icons/element-4.svg" alt="" />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="banner">
            <img src="icons/element-4.svg" alt="" />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="banner">
            <img src="icons/element-4.svg" alt="" />
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
      <div className="headerContainer">
        <div className="wrapper width-100">
          <div className="brandingContainer">
            <div className="logo">
              <img
                src="/icons/menu-bar.svg"
                className="imgStyle"
                alt="menu-bar"
              />
              <img src="/icons/logo.svg" className="imgStyle" alt="logo" />
            </div>
            <div className="logoName">
              <p>logo</p>
            </div>
            <div className="iconsContainer">
              <ul>
                <li>
                  <a href="#">
                    <img
                      src="/icons/search.svg"
                      className="imgStyle"
                      alt="search"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/icons/heart.svg"
                      className="imgStyle"
                      alt="like"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/icons/shopping-bag.svg"
                      className="imgStyle"
                      alt="shop"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/icons/profile.svg"
                      className="imgStyle"
                      alt="profile"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p style={{ paddingRight: "5px" }}>ENG</p>
                    <img
                      src="/icons/arrow-down.svg"
                      className="imgStyle"
                      alt="language"
                    />
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
    </>
  );
};

export default Header;
