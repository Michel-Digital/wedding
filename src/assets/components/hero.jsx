import React from "react";
import '../css/hero.css'
import Countdown from "./countdown"


const Hero = () => {
  return (
    <section id="heroID" className="hero">
      
      <div className="heroTxt-div">
        <h1 className="title mb-5">Annette <span style={{color:"#CCD5AE"}}>&</span> Carlos</h1> 
      </div>
      <div className="heroImg-div mt-5 mb-5 faded faded-narrow faded-right faded-left">
        
      </div>
      <div className="heroTxt-div mt-5 mb-5">
        <p className="subtext mb-4" style={{color:"#CCD5AE"}}>August <span className="ord">7ᵗʰ</span> 2021</p>
        <Countdown/>
      </div>
      <i className="coords">N 38° 53′ 22″ 38.8895°  //  W 77° 2′ 7″ 77.0353°</i>
      <div className="heroBtn-div">
      <a href="#Rsvp"><span className="btn">RSVP</span></a>
      </div>
    </section>
  );
};
export default Hero;
