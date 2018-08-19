import React from "react";
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaGrunt
} from "react-icons/fa";
const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        My tech stack
      </p>

      <FaReact size={96} color={'blue'}/>
      <FaAngular size={96}/>
      <FaHtml5 size={96}/>
      <FaCss3Alt size={96}/>
      <FaGrunt size={96}/>


    </div>
  </div>
);

export default Skills;
