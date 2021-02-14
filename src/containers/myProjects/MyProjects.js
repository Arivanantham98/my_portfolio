import React from "react";
import "./myProjects.css";
import { Fade } from "react-reveal";
import sunraysolar from "../../assets/images/sunraysolar.webp";
import cybertechmart from "../../assets/images/CyberTechMart.webp";
import Button from "../../components/button/Button";

const site1 = "https://sunraysolar.in/";
const site2 = "https://cybertechmart.netlify.app/";
const title = "< Projects /> ";

export default function MyProjects() {
  return (
    <Fade left duration={1000}>
      <div className="main" id="projects">
        <h1 className='project-title'>{title}</h1>
        <div className="column">
          <img
            className="project-image"
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
      <div className="main" id="projects">
        <div className="column">
          <img
            className="project-image"
            src={cybertechmart}
            alt="sunray solar"
            target="_blank"
            without
            rel="noopener noreferrer"
          />

          <div className="right-side">
            <h2>CyberTech Mart </h2>
            <p>
              Cyber tech mart is a model ecommerce site built with react
              library, and designed with styled components, used headless CMS
              for product details and used netlify functions with axios to
              create open api for json data
            </p>
            <p>Technologies Used: HTML,CSS,JavaScript,Jquery,API's,</p>
            <Button
              className="button-pro"
              text="Click For Site"
              newTab={true}
              href={site2}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
