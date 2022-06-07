import React from "react";
import '../Shared/Button.css';

function Button( props ){
  return(
    <nav className={`button-button ${ (props.primary) ? "primary" : ""}`}>
        {props.children}
    </nav>
  );
}

export default Button;