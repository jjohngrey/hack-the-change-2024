import React from "react";

const Button = (props) => {
    return ( 
        <div style={{
            padding: "0.5rem",
            backgroundColor: "white",
            color: "rgb(244, 0, 151)",
            border: "none",
            cursor: "pointer",
            borderRadius: "50cap"
        }}>
            <button>{props}</button>
        </div>
     );
}
 
export default Button;