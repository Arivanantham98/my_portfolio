import React from "react";
import "./myProjects.css";
import { Fade } from "react-reveal";
import sunraysolar from "../../assets/images/sunraysolar.webp";
import Button from "../../components/button/Button";

const site1 = "https://sunraysolar.in/";
const title = "< Projects /> ";

export default function MyProjects() {
  return (
    <Fade left duration={1000}>
      <div className="main" id="projects">
      <h1>{title}</h1>
        <div className="column">
          
          <img
            src={sunraysolar}
            alt="sunray solar"
            target="_blank"
            without
            rel="noopener noreferrer"
          />

          <div className="right-side">
            <h2>Sun Ray Solar Solutions & Consultant</h2>
            <p>
              Sunray solar solutions and consultant is a static portfolio
              website built with HTML,CSS,JS and jQuery Plugins, used formspree
              API for form submissions, used netlify platform for hosting.
            </p>
            <p>Technologies Used: HTML,CSS,JavaScript,Jquery,API's,</p>
            <Button
              className="button-pro"
              text="Click For Site"
              newTab={true}
              href={site1}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
