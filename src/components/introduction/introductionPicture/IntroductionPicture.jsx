import React from "react";
import "./IntroductionPicture.css";
import IntroductionPic from "../../../assets/photos/pic1.svg";
const IntroductionPicture = () => {
    return(
        <div className="__introduction-pic">
            <img src={ IntroductionPic } alt="Introduction"/>
        </div>

    )
}
export default IntroductionPicture;

