import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
      <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
            Empower your fitness journey with a vibrant lifestyle
            </h1>
            <p className="primary-text">
            Elevate your well-being with our service; We offer a diverse array of healthy recipes and 
             a user-friendly calorie tracker,
             empowering you to effortlessly track and maintain a balanced diet!
            </p>
            <button className="secondary-button">
              See more <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;