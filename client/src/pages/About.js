import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="about-us-container">
        <div className="about-us-content">
          <h2 className="about-us-title">About Shoe Vista</h2>
          <p className="about-us-description">
            Welcome to <span className="brand-name">Shoe Vista</span> - where
            style meets comfort. We are passionate about providing you with the
            latest trends in footwear without compromising on comfort. Our
            mission is to make every step you take a stylish and comfortable
            one.
          </p>
          <p className="about-us-description">
            At <span className="brand-name">Shoe Vista</span>, we believe that
            your shoes should not only look good but also feel good. That's why
            we carefully curate our collection to ensure a perfect blend of
            fashion and functionality.
          </p>
          <img
            src="/images/about.jpg"
            alt="About Us"
            className="about-us-image"
          />
          <p className="about-us-description">
            Explore our wide range of shoes, from casual sneakers to elegant
            heels. Each pair is crafted with precision and attention to detail,
            reflecting our commitment to quality.
          </p>
          <p className="about-us-description">
            Join us on this journey and step into a world of style and comfort
            with <span className="brand-name"> Shoe Vista</span>.
          </p>
          <button className="cta-button">Shop Now</button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
