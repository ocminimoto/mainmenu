import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Menubar from './Menubar';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
import '../src/menu.styles.css';
import $ from "jquery";

/*$(document).ready(function( $ ) {
  
  // $ Works! You can test it with next line if you like
  // console.log($);
  
});*/

/* bootstrap dropdown hover menu */
$(document).ready(function(){
  $('ul.nav li.dropdown').hover(function() 
    {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() 
    {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
  });

/* sticy menubar*/
$(document).ready(function(){
var win = $(window),

  nav = $('nav'),

  pos = nav.offset().top,

      sticky = function(){ 
        win.scrollTop() > pos ?
        nav.addclassName('sticky')
      : nav.removeclassName('sticky') }

  win.scroll(sticky)
});

/*

/* Sidebar in and out function 
$(document).ready(function(){

var acc = document.getElementsByclassName("accordion");
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
}); */

/*side menubar */

$(document).ready(function(){
  $('#sidebar-btn').click(function(){
    $('#sidebar').toggleclassName('visible');
  });
});






/*

className Sidebar extends React.Component {
	render() {
	return   (<nav id="sticky-sidebar">
    <div id="menuToggle">
      <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li><a href="#ref1">Scale Modeling</a></li>
          <li><a href="#ref2">E-Flight</a></li>
          <li><a href="#ref3">Indoor Flying</a></li>
          <li><a href="#ref4">Electric Flight Primer</a></li>
          <li><a href="#ref5">Key Learnings</a></li>
          <li><a href="#ref6">Helicopters and Multi Rotors</a></li>
          <li><a href="#ref7">3D Flight</a></li>
          <li><a href="#ref8">Model Building</a></li>
        </ul>
    </div>
</nav>)
  }
}

ReactDOM.render(<Sidebar />, document.getElementById('root')); 
*/




ReactDOM.render(<Menubar />, document.getElementById('mainmenu'));



