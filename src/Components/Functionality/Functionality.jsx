import React from "react";
import './Functionality.css';

import Title from "../Shared/Title";
import Text from "../Shared/Text";

import phone from '../../assets/Phone-3.svg';

function Functionality(){
    return(
      <div className="container">
        <div className="functionality-container">
          <div className="functionality-container-image">
            <img src={phone} alt="" />
          </div>
          <div className="functionality-container-text">
            <a className="">Original platform</a>
            <Title>Hottest deals around the web</Title>
            <Text>Find the perfect gift or everyday goods right at your fingertips.</Text>
          </div>
        </div>
      </div>
    );
};

export default Functionality;