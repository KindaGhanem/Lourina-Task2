import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import './Button.css'
export default function Button({something}) {
  return (
    <div className={something ? 'lk-nav-s-t-offer' :'lk-nav-s-t'} >
    <div className={something ? 'lk-nav-s-t-icon-offer' : 'lk-nav-s-t-icon'}>
     <FontAwesomeIcon className='LK-NAV-icon-calender' icon={faCalendar} />
     </div>
   <div className={something ? 'lk-nav-par-t-offer': 'lk-nav-par-t'}>
     <p>
     Schedule a visit
     </p>
   </div>

 </div>
  )
}
