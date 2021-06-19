import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import Skills from "../Components/Skills";
import ServieceSection from '../Components/ServieceSection'

function AboutPage() {
  return (
    <div className="aboutpage">
      <Title title="About Me" span="About Me" />
      <ImageSection />
      <Title title="My Skills" span="My Skills" />
      <div className="skill-container">
        <Skills skill="Javascript" progress="70%" />
        <Skills skill="Css3" progress="80%" />
        <Skills skill="Html5" progress="85%" />
        <Skills skill="React" progress="50%" />
        <Skills skill="Nodejs" progress="30%" />
        <Skills skill="Python" progress="15%" />
      </div>
      <Title title="Servieces" span="Servieces"/>
      <ServieceSection/>
    </div>
  );
}

export default AboutPage;
