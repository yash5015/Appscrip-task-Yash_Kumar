import React from "react";
import "./style.css";
const Footer = () => {
  return (
    <footer>
      <div className="wrapper width-100">
        <div className="letterAndcontact">
          <div className="newsletter">
            <p className="footerHeading">Be the first to know</p>
            <p>Sign up for updates from mettā muse.</p>
            <div className="inputsBtn">
              <input
                className=""
                type="email"
                placeholder="Enter your e-mail..."
              />
              <button className="subscribeBtn">subscribe</button>
            </div>
          </div>

          <div className="contactDetails">
            <div className="contactUs">
              <p className="footerHeading">contact us</p>
              <p style={{ marginBottom: "20px" }}>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div className="currency">
              <p className="footerHeading">Currency</p>
              <img
                src="/icons/Language.svg"
                alt=""
                style={{ marginBottom: "20px" }}
              />
              <p className="smallText">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="actionsLinksContainer">
          <div className="mettaMuse">
            <p className="footerHeading">mettā muse</p>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="quickLinks">
            <p className="footerHeading">Quick Links</p>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="followus">
            <div className="socialLinksContainer">
              <p className="footerHeading">Follow Us</p>
              <div className="socialAcc">
                <img src="icons/Insta.svg" alt="" />
                <img src="icons/linkedin.svg" alt="" />
              </div>
            </div>
            <div className="paymentMethodsContainer">
              <p className="footerHeading">mettā muse Accepts</p>
              <div className="payments">
                <img src="icons/g-pay.svg" alt="" />
                <img src="icons/mastercard.svg" alt="" />
                <img src="icons/paypal.svg" alt="" />
                <img src="icons/amex.svg" alt="" />
                <img src="icons/apple-pay.svg" alt="" />
                <img src="icons/Opay.svg" alt="" />
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
