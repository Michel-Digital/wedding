import React from "react";
import "../css/itinerary.css";
import "../css/responsive.css"

const Itinerary = () => {
  return (
    <section id="timeline" className="timeline-section">
        <div>
        <h1 className="mb-2">Wedding Timeline</h1>
        <hr className="hr-text mb-5" data-content="§"/>
        </div>
<div className="carousel shadow-6"  data-interval="3000" data-ride="carousel">
  <div className="logo_div"></div>
  <div className="carousel__nav">
   <span id="moveLeft" className="carousel__arrow">
        <svg className="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11p0Z"></path>
</svg>
    </span>
    <span id="moveRight" className="carousel__arrow" >
      <svg className="carousel__icon"  width="24" height="24" viewBox="0 0 24 24">
  <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
</svg>    
    </span>
  </div>
  <div className="carousel-item carousel-item--1 active">
    <div className="carousel-item__image"></div>
    <div className="carousel-item__info">
      <div className="carousel-item__container">
      <p className="carousel-item__subtitle">August 6ᵗʰ 2021</p>
      <h1 className="carousel-item__title">Friday</h1>
      <div className="carousel-item__description">
      <div className="timeline-div mt-4">
        <ul className="timeline">
        <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Welcome Dinner</span>
                <span className="time-wrapper">
                  <span className="time">6:00 PM CST</span>
                </span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti magnam maxime dolores officia? Dolores commodi sit
                ipsum, sapiente distinctio cupiditate nostrum reprehenderit est
                facere. Laudantium culpa ducimus officia magni impedit nisi vel
                fuga exercitationem tenetur?
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
      
        </div>
    </div>
  </div>
  <div className="carousel-item carousel-item--2">
    <div className="carousel-item__image"></div>
    <div className="carousel-item__info">
    <div className="carousel-item__container">
      <p className="carousel-item__subtitle">August <span className="ord">7ᵗʰ</span> 2021</p>
      <h1 className="carousel-item__title">Saturday</h1>
      <div className="carousel-item__description">
      <div className="timeline-div mt-4">
      <ul className="timeline">
        <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Ceremony</span>
                <span className="time-wrapper">
                  <span className="time">12:00 PM CST</span>
                </span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti magnam maxime dolores officia? Dolores commodi sit
                ipsum, sapiente distinctio cupiditate nostrum reprehenderit est
                facere. Laudantium culpa ducimus officia magni impedit nisi vel
                fuga exercitationem tenetur?
              </div>
            </div>
          </li>

          <li className="mt-3">
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Reception</span>
                <span className="time-wrapper">
                  <span className="time">1:00 PM CST</span>
                </span>
              </div>
              <div className="desc">
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
      
        </div>
    </div>
  </div>
  <div className="carousel-item carousel-item--3">
    <div className="carousel-item__image"></div>
    <div className="carousel-item__info">
    <div className="carousel-item__container">
      <p className="carousel-item__subtitle">August <span className="ord">8ᵗʰ</span> 2021</p>
      <h1 className="carousel-item__title">Sunday</h1>
      <div className="carousel-item__description">
      <div className="timeline-div mt-4">
      <ul className="timeline">
        <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Farewell Brunch</span>
                <span className="time-wrapper">
                  <span className="time">11:00 AM CST</span>
                </span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti magnam maxime dolores officia? Dolores commodi sit
                ipsum, sapiente distinctio cupiditate nostrum reprehenderit est
                facere. Laudantium culpa ducimus officia magni impedit nisi vel
                fuga exercitationem tenetur?
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
      
        </div>
    </div>
  </div>
</div>
</section>
  );
};
export default Itinerary;
