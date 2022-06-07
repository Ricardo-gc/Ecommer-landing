import React from "react";
import './Text.css';

function Text(props){
    return (
        <>
        <p className="text-text">{ props.children }</p>
        </>
    );
};

export default Text;