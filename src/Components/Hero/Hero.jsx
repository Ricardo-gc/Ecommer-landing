import React from "react";
import './Hero.css';

import Title from "../Shared/Title";
import Text from '../Shared/Text'
import Button from "../Shared/Button";

import saly from '../../assets/Sally-4.svg'
import logo from '../../assets/Logo.svg'

function Hero(){
  return(
    <div className="container">
      <div className="hero-nav-container">
        <div className="hero-nav-title">
          <img src={logo} alt="" />
          <a>Sweava</a>
        </div>
        <nav className="hero-nav">
          <a href="#">Home</a>
          <a href="#">Team</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </nav>
        <nav className="hero-nav-button">
          <Button primary={ false }>Download App</Button>
        </nav>
      </div>
      <div className="hero-container">
        <div className="hero-container-text">
          <Title>Shopping App for Gadgets and Gifts</Title>
          <Text>Get 10% off your first order when you spend over £40 on any product!</Text>
          <Button primary={ true }>Download App</Button>
        </div>
        <div className="hero-container-image">
          <img src={saly} alt="Imagen Saly" />
        </div>
      </div>

    </div>
  );
};

export default Hero;