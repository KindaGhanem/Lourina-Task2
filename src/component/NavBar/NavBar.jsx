import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCalendar, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import './NavBar.css'
import Button from '../Button/Button'
export default function Navbar() {
  const [bars,setBars] =useState(false)
  const [stylenav ,setStylenav]=useState(false)
  function ChangeStyle() {
      if (window.scrollY >= 50){
          setStylenav(true)
      }else{
          setStylenav(false)
      }
  }
  window.addEventListener('scroll', ChangeStyle);
  return (
    <nav className='LK-Father-Nav'>
      <div className='lk-Nav-desktop'>
      <div className='LK-nav'>
        <div className='LK-son-O'>
            <div className='lk-Son-O-O'>
            <FontAwesomeIcon  className='lk-Son-O-O-icon' icon={faEnvelope} />
            <a href='/' >info@company.com</a>
            </div>
        <div className='lk-Son-O-T'>
        <FontAwesomeIcon  className='lk-Son-O-O-icon' icon={faMap} />
        <p className='lk-nav-par-O'>
        Sunny Isles Beach, FL 33160
        </p>
        </div>
        </div>


        <div className='LK-son-T'>
            <div className='lk-son-T-O'>
            <FontAwesomeIcon className='lk-son-T-icon' icon={faFacebook} />
            </div>
            <div className='lk-son-T-O'>
            <FontAwesomeIcon className='lk-son-T-icon' icon={faTwitter} />
            </div>
            <div className='lk-son-T-O'>
            <FontAwesomeIcon className='lk-son-T-icon' icon={faLinkedin} />
            </div>
            <div className='lk-son-T-O'>
            <FontAwesomeIcon className='lk-son-T-icon' icon={faInstagram} />
            </div>
        </div>
    </div>
    <div className={stylenav  ? 'LK-NAV-Secound-Scroll': 'LK-NAV-Secound'}>
      <h1 className='LK-NAV-Secound-h1'>VILLA</h1>
      <FontAwesomeIcon onClick={()=>{setBars(!bars)}} className='lk-hamburger-icon' icon={faBars} />
      <div className='lk-nav-new'>
      <div className='lk-nav-s-o'>
        <ul className='lk-nav-ul'> 
          <li><a>Home</a> </li>
          <li><a>Properties</a></li>
          <li><a>Property Detalis</a></li>
          <li><a>Contact US</a></li>
        </ul>
       
      </div>
      <Button something={false} />
      </div>
    </div>

      </div>


      <div className={bars ? 'lk-nav-hamburger' : 'lk-nav-hamburger-false'}>
 
        <ul className='lk-nav-hamburger-ul'> 
          <li><a>Home</a> </li>
          <li><a>Properties</a></li>
          <li><a>Property Detalis</a></li>
          <li><a>Contact US</a></li>
        </ul>
       
      </div>
   
    
    </nav>
  )
}
