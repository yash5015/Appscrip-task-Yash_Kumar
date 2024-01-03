import React, { useState } from "react";
import Header from "../../components/header/header";
import "./style.css";
import ProductCard from "../../components/product-card/product-card";
import { productList } from "../../constants/productList";
import Filter from "../../components/sidebar-filter/filter";
import { sortingList } from "../../constants/sortingList";
import Footer from "../../components/footer/footer";
const Products = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [reccomClick, setReccomClick] = useState(false);
  const [stortingType, setStortingType] = useState("recommended");
  const handleFilterVisibility = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <div>
      <Header />

      <div className="quoteContainer">
        <div className="wrapper">
          <div className="borderBox padV50">
            <p className="quoteHeading">DISCOVER OUR PRODUCTS</p>
            <p className="quoteDescription">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>
        </div>
      </div>
      <div className="filterBar">
        <div className="wrapper">
          <div className="borderBox padV20">
            <div className="filterbarContainer">
              <div className="left">
                <p className="totalItems">3425 items</p>
                <div
                  className="hideFilterBtn"
                  role="button"
                  onClick={handleFilterVisibility}
                >
                  <img src="/icons/arrow-left.svg" alt="left-arrow" />
                  <p style={{ paddingLeft: "5px" }} className="">
                    {showFilter ? "hide filter" : "show filter"}
                  </p>
                </div>
              </div>
              <div
                className="right"
                onClick={() => {
                  setReccomClick((prev) => !prev);
                }}
              >
                <div className="sortingOne">
                  <p style={{ paddingRight: "5px" }}>{stortingType}</p>
                  {reccomClick ? (
                    <img
                      src="/icons/arrow-down.svg"
                      className="imgStyle"
                      alt="language"
                    />
                  ) : (
                    <img
                      src="/icons/arrow-up.svg"
                      className="imgStyle"
                      alt="language"
                    />
                  )}
                </div>

                {reccomClick ? (
                  <div className="reccDropDown">
                    <ul>
                      {sortingList.map((item) => (
                        <li
                          onClick={() => {
                            setStortingType(item.type);
                          }}
                          className={`${
                            stortingType === item.type
                              ? "selectedSort"
                              : "nonSelectedSort"
                          }`}
                        >
                          {stortingType === item.type ? (
                            <img
                              src="/icons/check.svg"
                              className="imgStyle"
                              alt="check"
                              style={{ paddingRight: "10px" }}
                            />
                          ) : null}
                          {item.type}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filterAndProducts">
        <div className="wrapper ">
          <div className="filterProductCardsWrapper">
            {showFilter ? (
              <div className="sideBar">
                <Filter />
              </div>
            ) : null}
            <div className={`productsContainer${showFilter ? "-75" : ""}`}>
              <div className={`product-grid-${showFilter ? 3 : 4}`}>
                {productList.map((item, index) => (
                  <ProductCard index={index} product={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Products;
