import React from "react";

const Button=({name,onClick})=>{
    return(
        // <button title = {title} onClick={onclick} style={{fontSize:"4rem"}}>{name}</button>
        <button className={`${name}`}  onClick={onClick}>{name}</button>
    );
};
export default Button;