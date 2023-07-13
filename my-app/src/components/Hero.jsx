import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="hero_content">
        <h1 className="hero_title">Your Feet Deserves the best</h1>
        <p className="hero_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <button className="hero_shop-now btn">Shop Now</button>
        <button className="hero_category btn">Category</button>
        <p className="also-available">Also Available On</p>
        <div className="hero_brand-img-contaier">
          <img src="/images/amazon.png" alt="Amazon" />
          <img src="/images/flipkart.png" alt="Flipkart" />
        </div>
      </div>
      <div className="hero_img">
        <img src="/images/shoe_image.png" alt="Flipkart" />
      </div>
    </div>
  );
}

export default Hero;
