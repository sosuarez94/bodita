import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="inverter-cover"></div>
      <div className="cover"></div>
      <ul className="elements">        
        <li>
          <img src="assets/icons/wind.png" alt="wind" />
        </li>
        <li>
          <img src="assets/icons/earth.png" alt="earth" />
        </li>
        <li>
          <img src="assets/icons/wather.png" alt="wather" />
        </li>
        <li>
          <img src="assets/icons/fire.png" alt="fire" />
        </li>
      </ul>
    </section>
  );
};

export default Banner;
