import React from "react";
import './Experience.css';

import Title from "../Shared/Title";
import Text from "../Shared/Text";

import phone from '../../assets/Phone-2.svg';

function Experience(){
  return(
    <div className="container">
      <div className="experience-container">
        <div className="experience-container-text">
          <Title>Experience products in AR</Title>
          <Text>Have you tried Augmented Reality? Stop looking at boring galleries and start experiences each item.</Text>
        </div>
        <div className="experience-container-image">
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experience;