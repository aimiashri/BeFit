import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return (
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h1 className="primary-heading">
          Food plays a pivotal role in aiding our daily nutrition level.
          </h1>
          <p className="primary-text">
          Monitoring food intake is crucial for health. 
          Tracking calorie intake aids awareness, promotes balanced nutrition, 
          and fosters overall well-being for a healthier lifestyle.
          </p>
          <p className="primary-text">
            Learn more to know how food is the main source of our lifestyle
            or check our our video to see how <b>BeFit</b> can help you get healthier.
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;