import React, { useState } from "react";
import PricingCard from "./PricingCard";

const Plans = () => {

    const [selectMonthly, setSelectMonthly] = useState(true)
    console.log(selectMonthly);

    const commonFeatures = [
        "BMI Calculator",
        "Basic Recipe Library",
        "Limited Calorie Checker",
    ];

    const freeFeatures = [...commonFeatures];
    
    const proFeatures = [
        "Includes All Features of Free",
        "Advanced Recipe Library",
        "Personalized Meal Plans",
    ];
    
    const premiumFeatures = [
        "Includes All Features of Pro",
        "One-on-One Coaching",
        "Live Fitness Classes",
        "Community Forum",
    ];

    return (
        <div className="PricingApp">
            <div className="app-container">
            <br />
            <br />
                <header>
                    <h1 className="header-topic">Choose The Right Plan For You</h1>
                    <div className="header-row">
                        <p>Anually</p>
                        <label className="price-switch">
                            <input 
                                className="price-checkbox" 
                                onChange={() => {
                                    setSelectMonthly((prev) => !prev);
                                }}
                                type="checkbox" 
                            />
                            <div className="switch-slider"></div>
                        </label>
                        <p>Monthly</p>
                    </div>
                </header>
                {/*Cards here*/}
                <div className="pricing-cards">
                    <PricingCard title="Free" price="RM0.00" features={freeFeatures} />
                    <PricingCard
                        title="Premium"
                        price={selectMonthly ? "RM10.99" : "RM95.99"}
                        features={premiumFeatures}
                    />
                    <PricingCard 
                        title="Pro"
                        price={selectMonthly ? "RM7.99" : "RM80.99"}
                        features={proFeatures}
                    />
                </div>
            </div>
            <br />
        </div>
    );
};

export default Plans;