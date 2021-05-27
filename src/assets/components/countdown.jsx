import React from "react";
import '../css/countdown.css'

const Countdown = () => {
  return (
    <div className="countdown-div text-center">
      <ul id="countdown">
        <li>
          <span className="days timenumbers">01</span>
          <p className="timeRefDays timedescription">days</p>
        </li>
        <li>
          <span className="hours timenumbers">00</span>
          <p className="timeRefHours timedescription">hours</p>
        </li>
        <li>
          <span className="minutes timenumbers">00</span>
          <p className="timeRefMinutes timedescription">minutes</p>
        </li>
        <li>
          <span className="seconds timenumbers yellow-text">00</span>
          <p className="timeRefSeconds timedescription">seconds</p>
        </li>
      </ul>
    </div>
  );
};
export default Countdown;
