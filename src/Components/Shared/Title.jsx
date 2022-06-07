import React from "react";
import './Title.css';

function Title( props ){
  return(
    <div>
      <p className="title-text">{props.children}</p>
    </div>
  );
};

export default Title;