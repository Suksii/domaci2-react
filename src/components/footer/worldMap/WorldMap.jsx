import React from "react";
import WorldMapPic from "../../../assets/photos/footer.png";
import Logo1 from "../../../assets/photos/footerlogo1.png";
import Logo2 from "../../../assets/photos/footerlogo2.svg";
import Smile from "../../../assets/photos/smile.png";
import Dot from "../../../assets/photos/dot.svg"
import "./WorldMap.css";

const WorldMap = () => {
    return  <div className="__world-map">
        <img className="__world-map__background" src={ WorldMapPic } alt="World Map"/>
        <div className="__world-map__indicator">
            <div className="tooltip">
                <img className="logo__image" src={ Logo1 } alt="Amplitudo"/>
                <span>Hello from the center of the world!</span>
                <img className="smile__image" src={ Smile } alt="Smile"/>
            </div>
            <img src={ Dot } className="dot" alt="Indicator"/>
        </div>
        <div className="__world-map__information">
            <div className="__world-map__amplitudo">
                <img src={ Logo2 } alt="Amplitudo"/>
            </div>
            <p>Boulevard of St. Petar Cetinjski 56</p>
            <p className="__world-map__amplitudo__p2">Podgorica, Montenegro</p>
            <div className="__world-map__amplitudo__line"></div>
            <div className="__world-map__amplitudo__contact">
                <a href="mailto:info@amplitudo.me">info@amplitudo.me</a>
                <a href="tel:+38220223244">+382 20 223 244</a>
            </div>

        </div>
    </div>
}

export default WorldMap;