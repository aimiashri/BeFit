import React from "react";
import ProfilePic from "../Assets/hanistest.png";
import ProfilePic2 from "../Assets/naylitest.png";
import ProfilePic3 from "../Assets/athirahtest.png";
import { AiFillStar } from "react-icons/ai";
import AboutBackgroundTest1 from "../Assets/about-background.png";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading1">Hear directly from our customers</h1>
        <p className="primary-text">
          BeFit has gathered over <b>2,500+ customers</b> and gained <b>73.7% success rate</b> of achieving normal BMI overall
        </p>
      </div>
      
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackgroundTest1} alt="" />
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>
            "  Say no more to insecurities— I gained more confidence now thanks to BeFit!
              The healthy video recipes definitely helped me so much, it changed how I ate normally.
              Go and be a user now if you still haven't! "
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Hanis Yusoff Khalid</h2>
        </div>

        <div className="testimonial-section-bottom">
          <img src={ProfilePic2} alt="" />
          <p>
            " I cannot begin to tell you how much I love being a user in BeFit! 
            After using it for almost 6 months, I have noticed a lot of positive changes
            happening to my body. My lifestyle is definitely better than ever, and I never felt tired like I used to.
            Totally worth my money! "
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Nayli Batrisyia</h2>
        </div>

        <div className="testimonial-section-bottom">
          <img src={ProfilePic3} alt="" />
          <p>
            " I am so glad that I had I discovered BeFit. I track my meals all the time
              to ensure I get the best nutrition for my daily diet. 
              It was a hard journey but BeFit
              really helped me get through it. "
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Athirah Azlan</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;