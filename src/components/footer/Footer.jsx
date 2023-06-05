import React from "react";
import WorldMap from "./worldMap/WorldMap.jsx";
import SocialMedia from "./socialMedia/SocialMedia.jsx";
import Rights from "./rights/Rights.jsx";
import Services from "./services/Services.jsx";

const Footer = () => {
    return(
        <footer style={{backgroundColor: "#283E51"}}>
            <Services/>
            <WorldMap/>
            <SocialMedia/>
            <Rights/>
        </footer>
    )
}
export default Footer;