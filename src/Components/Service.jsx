import React from 'react'
import '../NewService.css';
import CalculatorImage from '../Assets/Calculator.png';
import FishImage from '../Assets/fish.png';
import RiceImage from '../Assets/rice.png';
import BroccoliImage from '../Assets/broccoli.png';
import NoodleImage from '../Assets/noodle.png';
import SaladBowlImage from '../Assets/saladBowl.png';
import CornImage from '../Assets/sweetcorn.png';
import AvocadoImage from '../Assets/avocado.png';

const BMICalculator = () => {
  return (
    <div className="new-left-section">
      <h2>BMI Calculator</h2>
      <div className="calculator-content">
        <p className="description">
          Calculate your BMI to understand your body composition and track your health journey.
        </p>
        <img
          src={CalculatorImage}
          alt="BMI Calculator"
          className="calculator-photo"
        />
        <div className="weight-ranges">
          <p>Overweight Range: <strong> 25 - 29.9</strong></p>
          <p>Normal Weight Range:<strong> 18.5 - 24.9</strong></p>
          <p>Underweight Range: <strong>    Less than 18.5</strong></p>
        </div>
      </div>
      <button className="subscribe-button-bmi">Try Now</button>
    </div>
  );
};

const CalorieChecker = () => {
    return (
      <div className="new-right-section">
        <div className="centered-content">
          <h2>Calorie Checker</h2>
          <p className="description">
            Check the calorie content of various foods to make informed decisions about your diet.
          </p>
        </div>
        <div className="food-item">
        <img src={FishImage} alt="Fish" />
        <div>
            <p>Food: Fish</p>
            <p>Calories: 100</p>
        </div>
        </div>
        <div className="food-item">
        <img src={RiceImage} alt="Rice" />
          <div>
            <p>Food: Rice</p>
            <p>Calories: 200</p>
          </div>
        </div>
        <div className="food-item">
        <img src={BroccoliImage} alt="Broccoli" />
          <div>
            <p>Food: Broccoli</p>
            <p>Calories: 50</p>
          </div>
        </div>
        <div className="food-item">
        <img src={NoodleImage} alt="Noodle" />
          <div>
            <p>Food: Noodle</p>
            <p>Calories: 188</p>
          </div>
        </div>
        <button className="subscribe-button">Subscribe Now</button>
      </div>
    );
  };

  const DietPlan = () => {
    return (
      <div className="new-middle-section">
        <h2>Browse Healthy Diet Recipes</h2>
        <p className="description">
          Explore our carefully curated collection of nutritious and delicious diet plans to help you maintain a healthy lifestyle.
        </p>
        <div className="food-item-1">
          <img src={SaladBowlImage} alt="Salad Bowl" />
          <div>
            <p>Food: Salad Bowl</p>
            {/* Add any additional information */}
          </div>
        </div>
        <div className="food-item-corn">
          <img src={CornImage} alt="Sweet Baked Corn" />
          <div>
            <p>Food: Sweet Baked Corn</p>
            {/* Add any additional information */}
          </div>
        </div>
        <div className="food-item-avo">
          <img src={AvocadoImage} alt="Avocado Bread Toast" />
          <div>
            <p>Food: Avocado Bread Toast</p>
            {/* Add any additional information */}
          </div>
        </div>
        <button className="subscribe-button"> Subscribe Now</button>
      </div>
      
    );
  };
  
  const NewService = () => {
    return (
      <div className="service-section-text-container">
        <p className="primary-subheading-service">Discover Our Services</p>
        <div className="new-service-container">
            <BMICalculator />
            <DietPlan />
            <CalorieChecker />
        </div>
        </div>
    );
  };
  
  export default NewService;
