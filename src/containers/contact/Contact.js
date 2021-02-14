import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import Contacts from '../../assets/images/newcontact.jpg'

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <img className='contact-img' src={Contacts} alt='contact'/>
            <p className={"subTitle contact-subtitle"}>
              {contactInfo.subtitle}
            </p>
            <div className={"contact-text-div"}>
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
              <  SocialMedia />
            </div>
          </div>
          <div className="form">
          
            <form name="contact-from" data-netlify="true" method="POST">
              <h2 className='dropmail'>Drop a mail!</h2>
              <input
                name="name"
                type="text"
                class="feedback-input"
                placeholder="Name"
              />
              <input
                name="email"
                type="text"
                class="feedback-input"
                placeholder="Email"
              />
              <textarea
                name="text"
                class="feedback-input"
                placeholder="Message"
              ></textarea>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
}
