import React from "react";
import "./ContactUs.css";
import Parrot from "../../assets/photos/parrot.png";
import LikeWhatYouSee from "../title/likeWhatYouSee/LikeWhatYouSee.jsx";

const ContactUs = () => {
    return(
        <div className="__contact-us">
            <LikeWhatYouSee/>
            <p className="p2">Let's talk about it.</p>
            <div className="__contact-us__button">
                <p>contact us</p>
            </div>
            <img src={ Parrot } alt="Parrot"/>
        </div>
    )
}
export default ContactUs;