import React from  'react';
import "../css/rsvp.css";
import "@fortawesome/fontawesome-free";

const NoThanks = () => {
  return (
    <section id="Rsvp" className="form d-flex justify-content-center align-items-center hidden back-form-no">
      <div className="rsvp-container d-flex justify-content-center align-items-center">
        <div className="rsvp-inner-container text-center">
          <h1 className="text-center">R<span style={{color:"#CCD5AE"}}>.</span>s<span style={{color:"#CCD5AE"}}>.</span>v<span style={{color:"#CCD5AE"}}>.</span>p</h1>
          <p className="mt-5">Thank you for your reply!</p>
          <p className="">We are going to miss you at our big milestone!</p>
        </div>
      </div>
    </section>
  );
};
export default NoThanks;
