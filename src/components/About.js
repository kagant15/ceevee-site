import React from "react";
import { FaCloudDownload } from "react-icons/fa";

import profilePic from "../assets/images/profile-picture.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I've been working as a goverment contractor in the Defense Sector of the Washington D.C. area for the past five years designing and implementing software  
          for both inhouse company solutions as well as end user facing applications. I take pride in the work that I do and take emense pleasure in being able to translates a business's needs 
            into tangalbe solutions.  If my work sounds appealing to you feel free to contact me so we can chat about your business needs.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Thomas Kagan</span>
              <span>
                <br /> Fairfax, VA 22032 US
              </span>
              <br />
              <span>(815) 608-2518</span>
              <br />
              <span>thomas.kagan15@gmail.com</span>
            </p>
          </div>
          {/*<div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default About;
