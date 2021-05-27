import React from  'react';
import "../css/rsvp.css";
import "@fortawesome/fontawesome-free";

const Thanks = () => {
  return (
    <section className="form d-flex justify-content-center align-items-center">
      <div className="rsvp-container d-flex justify-content-center align-items-center">
        <div className="rsvp-inner-container text-center">
          <h1 className="text-center">R<span style={{color:"#CCD5AE"}}>.</span>s<span style={{color:"#CCD5AE"}}>.</span>v<span style={{color:"#CCD5AE"}}>.</span>p</h1>
          <p className="mt-5">Thank you for your reply!</p>
          <p className="">We look forward to seeing you Aug. 7th!</p>
        </div>
      </div>
    </section>
  );
};
export default Thanks;
