import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import Contacts from "../../assets/images/newcontact.jpg";

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <img className="myimage" src={Contacts} alt="myimage"/>
            <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>
            <div className="contact-text-div">
              <a className="contact-detail" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div"></div>
          <form
            name="contact-from"
            action="https://formspree.io/f/xeqppnjb"
            method="POST"
          >
            <h2 className="dropmail">Drop a mail!</h2>
            <input
              name="name"
              type="text"
              className="feedback-input"
              placeholder="Name"
            />
            <input
              name="email"
              type="text"
              className="feedback-input"
              placeholder="Email"
            />
            <textarea
              name="text"
              className="feedback-input"
              placeholder="Message"
            ></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </Fade>
  );
}
