import React, { useState } from "react";
import "./style.css";
const Footer = () => {
  const [isMettaMuse, setIsMettaMuse] = useState(false);
  const [isQuickLinks, setIsQuickLinks] = useState(false);
  const [isFollowUs, setIsFollowUs] = useState(false);
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
            <div
              className="footerHeadingCont"
              onClick={() => setIsMettaMuse((prev) => !prev)}
            >
              <p className="footerHeading">mettā muse</p>
              {isMettaMuse ? (
                <img src="/icons/arrow-up.svg" alt="" />
              ) : (
                <img src="/icons/arrow-down.svg" alt="" />
              )}
            </div>
            {isMettaMuse ? (
              <ul className={`${isMettaMuse ? "mt20" : ""}`}>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            ) : null}
          </div>
          <div className="quickLinks">
            <div
              className="footerHeadingCont"
              onClick={() => setIsQuickLinks((prev) => !prev)}
            >
              <p className="footerHeading">Quick Links</p>
              {isQuickLinks ? (
                <img src="/icons/arrow-up.svg" alt="" />
              ) : (
                <img src="/icons/arrow-down.svg" alt="" />
              )}
            </div>
            {isQuickLinks ? (
              <ul className={`${isQuickLinks ? "mt20" : ""}`}>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            ) : null}
          </div>
          <div className="followus">
            <div className="socialLinksContainer">
              <div
                className="footerHeadingCont"
                onClick={() => setIsFollowUs((prev) => !prev)}
              >
                <p className="footerHeading">Follow Us</p>
                {isFollowUs ? (
                  <img src="/icons/arrow-up.svg" alt="" />
                ) : (
                  <img src="/icons/arrow-down.svg" alt="" />
                )}
              </div>
              <div className="socialAcc">
                {isFollowUs ? (
                  <div className={`${isFollowUs ? "mt20" : ""}`}>
                    <img src="icons/Insta.svg" alt="" />
                    <img src="icons/linkedin.svg" alt="" />
                  </div>
                ) : null}
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
