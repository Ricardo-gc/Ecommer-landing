import React from "react";
import './Socials.css';

import Title from "../Shared/Title";

import sally6 from '../../assets/Saly-6.svg';
function Socials(){
  return(
    <div className="container">
      <div className="socials-container">
        <div className="socials-container-text">
          <Title>Hey! Follow us on social media so you don´t miss any offer.</Title>
        </div>
        <div className="socials-container-image">
          <img src={ sally6 } alt="" />
        </div>
      </div>
    </div>
  );
};

export default Socials;