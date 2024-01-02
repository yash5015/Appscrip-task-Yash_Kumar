import React, { useState } from "react";
import "./style.css";

const ProductCard = ({ index, product }) => {
  const [svgColor, setSvgColor] = useState("none");
  const handleSvgClick = () => {
    const newColor = svgColor === "none" ? "#EB4C6B" : "none";
    setSvgColor(newColor);
  };

  return (
    <div key={index} className="product-main">
      <img src={product.img} />
      <div className="product-info">
        <h4 className="product-heading">{product.description}</h4>
        <div className="product-disc">
          <p className="product-sub">
            <span>Sign in</span> or Create an account to see pricing
          </p>

          <svg
            onClick={handleSvgClick}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={svgColor}
          >
            <path
              d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
