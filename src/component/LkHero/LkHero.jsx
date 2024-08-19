import React, { useEffect, useState } from 'react'
import banner1 from './../../assets/img/bannero.jpg'
import banner2 from './../../assets/img/bannert.jpg'
import banner3 from './../../assets/img/bannerth.jpg'
// import iamgeslide from './../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LkHero.css'
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons'
export default function LkHero() {
   const iamgeslide =[
        {url:banner1,title:'Toranto', span:'Canada',discription:'Hurry ! Get the Best Villa for you'}
       ,{url:banner2,title:'Tartous', span:'Syria', discription:'look! Get the amazing Villa for you'}
       ,{url:banner3,title:'Malia', span:'Maldif',  discription:'ohhh! Get the berfect Villa for you'}
     
     ]



   const [currentState,setCurrentState]=useState(0)
   const bgImageStyle={
    backgroundImage:`url(${iamgeslide[currentState].url})`,
    backgroundPosition:`center center`,
    backgroundSize:`cover`,
    height: `calc(100vh + 150px)`,
    width:`100%`
   }
   const goToNext=(currentState)=>{
    setCurrentState(currentState)
   }


  return (
     <>
     

    <div className='countainer-style'>
        
        <div style={bgImageStyle} >
            <div className='Hero-img'>
            <div className='hero-father-icon'>
            <FontAwesomeIcon className='lk-hero-icon-left' icon={faChevronLeft} />
         </div>
            <div className='lk-hero-par'>
                <h2 className='lk-hero-titlt-o'>{iamgeslide[currentState].title} <span> {iamgeslide[currentState].span} </span></h2>
                <h2  className='lk-hero-titlt-t'>{iamgeslide[currentState].discription}</h2>
            </div>
            <div className='hero-father-icon'>
            <FontAwesomeIcon  className='lk-hero-icon-right' icon={faChevronRight} />
        </div>
            </div>
            <div className='carosal-panall'>
            {iamgeslide.map((iamgeslide,currentState)=>{
                return(<>
                 
                  <FontAwesomeIcon className='lk-hero-slider-circle new-new' onClick={()=>goToNext(currentState)} icon={faCircle} />
                 
         </>  ) })}
        
            </div>

        </div>
    </div>

      
    {/* */}
  
  
     </>

  )
}
