import React from 'react';
import './App.css';
import PriceCard from './PriceCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  let priceCard = [
    {
      title: 'Free',
      price: 0,
      features: [
        {
        name: "Single User",
        isEnabled: true,
        },
        {
        name: "5GB Storage",
        isEnabled: true,
        },
        {
        name: "Unlimited Public Projects",
        isEnabled: true,
        },
        {
        name: "Community Access",
        isEnabled: true,
        },
        {
        name: "Unlimited Private Projects",
        isEnabled: false,
        },
        {
        name: "Dedicated Phone Support",
        isEnabled: false,
        },
        {
        name: "Free Subdomain",
        isEnabled: false,
        },
        {
        name: "Monthly Status Reports",
        isEnabled: false,
        },
      ]
    },
    {
      title: 'Plus',
      price: 29,
      features: [
        {
        name: "5 Users",
        isEnabled: true,
        },
        {
        name: "50GB Storage",
        isEnabled: true,
        },
        {
        name: "Unlimited Public Projects",
        isEnabled: true,
        },
        {
        name: "Community Access",
        isEnabled: true,
        },
        {
        name: "Unlimited Private Projects",
        isEnabled: true,
        },
        {
        name: "Dedicated Phone Support",
        isEnabled: true,
        },
        {
        name: "Free Subdomain",
        isEnabled: true,
        },
        {
        name: "Monthly Status Reports",
        isEnabled: false,
        },
      ]
    },
    {
      title: 'Pro',
      price: 49,
      features: [
        {
        name: "Unlimited Users",
        isEnabled: true,
        },
        {
        name: "150GB Storage",
        isEnabled: true,
        },
        {
        name: "Unlimited Public Projects",
        isEnabled: true,
        },
        {
        name: "Community Access",
        isEnabled: true,
        },
        {
        name: "Unlimited Private Projects",
        isEnabled: true,
        },
        {
        name: "Dedicated Phone Support",
        isEnabled: true,
        },
        {
        name: "Free Subdomain",
        isEnabled: true,
        },
        {
        name: "Monthly Status Reports",
        isEnabled: true,
        },
      ]
    }
  ]
  return (
    <>
    <section className="pricing py-5">
      <div className="container">
       <div className="row">
         {priceCard.map((card)=> {
            return <PriceCard data={card}></PriceCard>
          })}
       </div>
      </div>
    </section>
    </>
  );
}

export default App;
