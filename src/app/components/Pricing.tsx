import React from 'react';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

interface PricingProps {
  plans: PricingPlan[];
}

const Pricing: React.FC<PricingProps> = ({ plans }) => {
  return (
    <div style={{ padding: '50px' }}>
      <h2>Our Pricing</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {plans.map((plan, index) => (
          <div key={index} style={{ border: '1px solid black', padding: '20px', margin: '10px' }}>
            <h3>{plan.name}</h3>
            <h4>{plan.price}</h4>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

