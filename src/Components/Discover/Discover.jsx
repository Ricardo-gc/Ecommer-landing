import React from "react";
import './Discover.css';

import Title from "../Shared/Title";
import Text from "../Shared/Text";

import app from '../../assets/Phone-1.svg';

function Discover(){
  return (
    <div className="container">
      <div className="discover-container">
        <div className="discover-title">
          <p>How the app works</p>
        </div>
        <div className="discover-body">
          <div className="discover-body-image">
            <img src={app} alt="" />
          </div>
          <div className="discover-body-text">
            <a>Create an account</a>
            <Title>Discover original products</Title>
            <Text>There are more than 950 categories updated daily based on trending websites reviews an users rating.</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;