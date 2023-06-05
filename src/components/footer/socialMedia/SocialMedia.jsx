import React from "react";
import "./SocialMedia.css";
import FbLogo from "../../../assets/photos/fb.svg";
import IgLogo from "../../../assets/photos/ig.svg";
import LiLogo from "../../../assets/photos/li.svg";
import TwLogo from "../../../assets/photos/tw.svg";
import BeLogo from "../../../assets/photos/be.svg";

const SocialMedia = () => {
    return(

            <div className="__social-media">
                <p>Follow us on social media</p>
                <div className="__social-media__img">
                    <img src={ FbLogo } alt="Facebook"/>
                    <img src={ IgLogo } alt="Instagram"/>
                    <img src={ LiLogo } alt="Linkedin"/>
                    <img src={ TwLogo } alt="Tweeter"/>
                    <img src={ BeLogo} alt="Be"/>
                </div>
            </div>

    )
}
export default SocialMedia;