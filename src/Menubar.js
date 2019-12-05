import React from 'react';
import logo from './logo.svg';
// import './Menubar.css';

function Menubar() {
  return (
<nav id="sticky-menubar" className="navbar navbar-inverse">
  <div className="body-wrap">
        <div className="container-fluid">
          <div className="navbar-header" id="navbar-button">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#small_menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          </div>
            <div className="collapse navbar-collapse" id="small_menu">         
              <ul className="nav navbar-nav">
                <li><a href="index.html"><span className="glyphicon glyphicon-home"></span></a></li>
                <li className="dropdown">
                  <a href="/#" className="dropdown-toggle" data-toggle="dropdown">Club Info<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="./desktop/PDQwebsite_master/working/about-our-club.html">About our club</a></li>
                    <li><a href="member_info.html">Membership</a></li>
                    <li><a href="field-locations.html">Field Locations</a></li>
                    <li><a href="pdq-rules.html">Rules</a></li>                    
                    <li className="divider"></li>
                    <li><a href="contact-us.html">Contact us</a></li>   
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="/#" className="dropdown-toggle" data-toggle="dropdown">Tools<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="email-broadcast.html"><span className="glyphicon glyphicon-envelope"></span>&nbsp;eMail</a></li>
                    <li><a href="member-data-access.html"><span className="glyphicon glyphicon-list"></span>&nbsp;Member Info</a></li>
                    <li><a href="interests.html">Technical Articles</a></li>
                  </ul> 
                </li>       
                <li className="dropdown">
                  <a href="/#" className="dropdown-toggle" data-toggle="dropdown">News<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="event-schedule.html"><span className="glyphicon glyphicon-calendar"></span>&nbsp;Events</a></li>
                    <li><a href="MAAC Avery5262AddressLabels.pdf"><span className="glyphicon glyphicon-file"></span>&nbsp;Model ID Label</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="/#" className="dropdown-toggle" data-toggle="dropdown">Media<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="slideshow.html">2019</a></li>
                    <li><a href="slideshow2018.html">2018</a></li>
                    <li><a href="slideshow2017.html">2017</a></li>
                    <li><a href="slideshow2016.html">2016</a></li>
                    <li><a href="slideshow2016.html">2015</a></li>   
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  <li><a href="https://www.wunderground.com/personal-weather-station/dashboard?ID=INANAIMO20">Weather</a></li>
                  <li><a href="members-only.html"><span className="glyphicon glyphicon-log-in"></span></a></li>
              </ul>
            </div>
       </div> 
 </nav>
  );
}

export default Menubar;
