import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
$(function(){
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
     slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
           $('.carousel-item').eq(prev).removeClass('active');
           $('.carousel-item').eq(slide).addClass('active');
      setTimeout(function(){

      },800);
    

    
    console.log('current '+current);
    console.log('prev '+prev);
  }
});
$(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
});
var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzf4UqNcbb_my1dY2OSZU9TotiGtXjUetdTjJZVT3vvQTfFpK0/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: JSON.stringify($($form).serialize()),
    success: function(data, textStatus) {
      console.log($form);
      if (textStatus === "success") {
          // data.redirect contains the string URL to redirect to
          
          if($form[0][3].checked===true){
            window.location.href = "/thanks";
            console.log('yes');
          }else{
            window.location.href = "/thankyou";
            console.log('no');
          }
      } else {
          // data.form contains the HTML for the replacement form
          $("#test-form").replaceWith(data.form);
      }
  }
  });
  
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
