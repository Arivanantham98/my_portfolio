import React from "react";
import { Fade } from "react-reveal";
import "./Greeting.css";
import landingPerson from "../../assets/lottie/developer.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {greeting } from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={"greeting-text"}>
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{"👋"}</span>
              </h1>
              <p className={"greeting-text-p subTitle"}>{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="animation">
              <DisplayLottie animationData={landingPerson} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
