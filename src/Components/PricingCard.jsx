import React from "react";

const PricingCard = ({ title, price, features }) => {
  return  (
    <div className="PricingCard">
        <header>
            <p className="card-title">{title}</p>
            <h1 className="card-price">{price}</h1>
        </header>
        {/* features here */}
        <div className="card-features">
            {features.map((feature, index) => (
                <p key={index}>{feature}</p>
            ))}
        </div>
        <button className="card-btn">GET STARTED</button>
    </div>
  );
};

export default PricingCard;