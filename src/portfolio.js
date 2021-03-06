﻿/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Arivanantham Parthipan",
  title: "Hi all, I'm Arivanantham",
  subTitle:
    "A passionate Front End Developer having an knowledge of building Web applications with JavaScript / Reactjs, and some other cool libraries and frameworks with animations.",
  resumeLink: "https://drive.google.com/file/d/1Rcz9ksovkSUcEllqmpVR07WKe8_jQgFM/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Arivanantham98",
  linkedin: "https://www.linkedin.com/in/arivanantham-parthipan-649665205/",
  gmail: "arivanantham1003@gmail.com",
  codepen: "https://codepen.io/Arivanantham",
  instagram:"",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "< Skills />",
  subTitle: "CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ {Implemented websites with mobile first approach, and landing pages from concept through deployment }",
    "⚡ {Designed responsive web pages}",
    "⚡ {Implemented website performance optimization}",
    "⚡ {Built single page application with React.js library}",
    "⚡ {Built reusable code for future use}",
    "⚡ {Integration of third party services such as Netlify / Heroku}",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "mangodb",
      fontAwesomeClassname: "fas fa-hdd",
    },
    {
      skillName: "netlify",
      fontAwesomeClassname: "fas fa-server",
    },
    {
      skillName: "express",
      fontAwesomeClassname: "fas fa-exchange-alt",
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};
// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/",
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "< Blogs />",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const contactInfo = {
  title: "< Contact Me ☎️ />",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8220934040",
  emailAddress: "Arivanantham1003@gmail.com",
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  bigProjects,
  blogSection,
  contactInfo,
};
