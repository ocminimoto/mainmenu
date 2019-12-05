import React from 'react';
import ReactDOM from 'react-dom';
import './menu.styles.css';
import $ from "jquery";

/*jQuery(document).ready(function( $ ) {
  
  // $ Works! You can test it with next line if you like
  // console.log($);
  
});*/

/* bootstrap dropdown hover menu */

  $('ul.nav li.dropdown').hover(function() 
    {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() 
    {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });


/* sticy menubar*/
var win = $(window),

    nav = $('nav'),

    pos = nav.offset().top,
        sticky = function(){ 
      win.scrollTop() > pos ?
        nav.addClass('sticky')
      : nav.removeClass('sticky') }

win.scroll(sticky)
 
/* Sidebar in and out function */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


/*side menubar */

$(document).ready(function(){
    $('#sidebar-btn').click(function(){
      $('#sidebar').toggleClass('visible');
    });
  });


