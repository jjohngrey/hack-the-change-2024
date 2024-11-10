import React from "react";
import background from "../images/background.jpeg"
import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
    return ( 
        <div className="hero-container" 
            style={{
                backgroundImage:`url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "50vh"}}>
            <div style={{
                display: "flex",
                paddingTop: "5%",
                justifyContent: "center",
                alignItems: "center",
                }}>
                <button><FaMapMarkerAlt style={{fontSize:"100px"}}/></button>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                }}>
                <h1>mapcessible</h1>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "30px"
                }}>
                <p>
                    <FaMapMarkerAlt style={{marginRight: "5px"}}/>
                    2145 W 41st Ave, Vancouver, BC V6M 1Z6
                </p>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                }}>
                <h2>
                your one stop shop to find the places you love that will love you too.
                </h2>
            </div>
        </div>
     );
}
 
export default Hero;