import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={"main"} id="skills">
      <h1 className={"skills-heading"}>{skillsSection.title} </h1>
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {skillsSection.skills.map((skills, i) => {
              return (
                <p key={i} className={"subTitle skills-text"}>
                  {skills}
                </p>
              );
            })}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <p className={"subTitle skills-text-subtitle"}>
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div></div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
