import React from "react";
import Header from "../../components/header/header";
import "./style.css";
import ProductCard from "../../components/product-card/product-card";
import { productList } from "../../constants/productList";
import Filter from "../../components/sidebar-filter/filter";
const Products = () => {
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
                <div className="hideFilterBtn">
                  <img src="/icons/arrow-left.svg" alt="left-arrow" />
                  <p style={{ paddingLeft: "5px" }} className="">
                    hide filter
                  </p>
                </div>
              </div>
              <div className="right">
                <p style={{ paddingRight: "5px" }}>RECOMMENDED</p>
                <img
                  src="/icons/arrow-down.svg"
                  className="imgStyle"
                  alt="language"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filterAndProducts">
        <div className="wrapper ">
          <div className="filterProductCardsWrapper">
            <div className="sideBar">
              <Filter />
            </div>

            <div className="productsContainer">
              <div className="product-grid">
                {productList.map((item, index) => (
                  <ProductCard index={index} product={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
