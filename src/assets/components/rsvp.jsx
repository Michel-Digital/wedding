import React from  'react';
import "../css/rsvp.css";
import "@fortawesome/fontawesome-free";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rsvp = () => {
  return (
    <section className="form d-flex justify-content-center align-items-center">
      <div className="rsvp-container d-flex justify-content-center align-items-center">
        <div className="rsvp-inner-container ">
          <h1 className="text-center">R<span style={{color:"#CCD5AE"}}>.</span>s<span style={{color:"#CCD5AE"}}>.</span>v<span style={{color:"#CCD5AE"}}>.</span>p</h1>
          <p className="mt-5">Kindly reply by June 4th, 2021</p>
          <form id="test-form">
            <fieldset className="full-width mt-4">
              <label>First & Last Name</label>
              <input type="text" name="Attendee Name" required pattern="^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F]+$"/>             
            </fieldset>
            <fieldset className="checkbox mt-4">
              <label className="container mt-4">
                Yes, I'll be there!
                <input type="checkbox" name="Attending" value="yes"/>
                <span className="checkmark"></span>
              </label>
            </fieldset>
            <fieldset className="checkbox mb-4" >
              <label className="container">
                Sorry, I can't make it. 
                <input type="checkbox" name="Attending" value="no"/>
                <span className="checkmark"></span>
              </label>
            </fieldset>
            <a href="/rsvp" type="submit" id="submit-form" className="part_line mt-4">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-3"/> Send
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Rsvp;
