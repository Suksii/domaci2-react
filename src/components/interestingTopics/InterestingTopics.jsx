import React from "react";
import "./InterestingTopics.css";
import YouMightBeInterested from "../title/youMightBeInterested/YouMightBeInterested.jsx";
import InterestingTopicPicture from "../../assets/photos/pic2.svg";

const InterestingTopics = () => {
    return(
        <>
            <YouMightBeInterested/>
            <interestingTopic>
                <div className="__interesting-topic">
                    <div className="__interesting-topic__box">
                        <img src={ InterestingTopicPicture } alt="Amplitudo"/>
                        <p>Mobile apps development</p>
                    </div>
                    <div className="__interesting-topic__box">
                        <img src={ InterestingTopicPicture } alt="Amplitudo"/>
                        <p>Website <br/> development</p>
                    </div>
                    <div className="__interesting-topic__box">
                        <img src={ InterestingTopicPicture } alt="Amplitudo"/>
                        <p>SaaS</p>
                    </div>
                </div>
            </interestingTopic>
        </>


    )
}

export default InterestingTopics;
