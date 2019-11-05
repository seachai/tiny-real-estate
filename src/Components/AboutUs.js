import React from "react";

const AboutUs = () => {
  return (
    <section id="aboutUs">
      <h1 className="title">About Us</h1>
      <div className="container">
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className="aboutPhoto"
          src="https://www.ratifiedtitle.com/wp-content/uploads/2019/04/real-estate-agent-holding-cardboard-box-1024x683.jpg"
          alt="aboutus-agent"
        />
      </div>
      <h5 className="footer-info">
        "Let us make reality happen for your family and you."
      </h5>
    </section>
  );
};

export default AboutUs;
