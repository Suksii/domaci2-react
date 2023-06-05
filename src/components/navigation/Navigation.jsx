import React from "react";
import "./Navigation.css";
import Logo from "../../assets/photos/footerlogo2.svg"

const Navigation = () => {
    return(
        <div className="__navbar">
            <div className="__navbar__logo">
                <img src={ Logo } alt="Logo"/>
            </div>
                    <ul className="__navbar__links">
                        <li>Home</li>
                        <li>Services</li>
                        <li>StartUp</li>
                        <li>Career</li>
                        <li>Company</li>
                        <li>Blog</li>
                    </ul>
                    <label className="__navbar__language">cg</label>
            </div>
    )
}
export default Navigation;