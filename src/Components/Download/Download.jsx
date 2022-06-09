import React from "react";
import './Download.css';

import Button from "../Shared/Button";

import phone from '../../assets/Phone-4.svg';
function Download(){
  return(
    <div className="container container-hund">
      <div className="download-container"> 
        <div className="download-container-text">
          <p>Save time & money with exclusive offers from top stores</p>
          <div className="download-text-button">
          <Button primary={true}>Download App</Button>
          </div>
        </div>
        <div className="download-container-image">
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Download;