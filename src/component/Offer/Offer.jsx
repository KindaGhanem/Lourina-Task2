import React, { useState } from 'react'
import property5 from './../../assets/img/property5.jpg'
import Button from '../Button/Button'
import './Offer.css'
export default function Offer() {
    const OfferData=[
        {id:'1',p:'Total Flat Space',h2:'185 m2'}
       ,{id:'2',p:'Floor number',h2:'26th'}
       ,{id:'3',p:'Number of rooms',h2:'4'}
       ,{id:'4',p:'Parking Available',h2:'Yes'}
       ,{id:'5',p:'Payment Process',h2:'Bank'}
    ]
    const [coloro,setColoro]=useState(false)
    const [colort,setColort]=useState(false)
    const [colorth,setColorth]=useState(false)
  return (
    <div className='lk-father-offer'>
        <div className='lk-offer-son-o'>
            <div className='lk-offer-o-o'>
                <h4 className='lk-offer-o-h4'>
                | BEST DEAL
                </h4>
                <h2 className='lk-offer-o-h2'>
                Find Your Best Deal Right Now!

                </h2>

            </div>
            <div className='lk-offer-o-t'>
                <button className={ coloro  ? 'lk-offer-o-button-add':'lk-offer-o-button'} onClick={()=>{setColoro(!coloro)}}>Appartmant</button>
                <button className={ colort  ? 'lk-offer-o-button-add':'lk-offer-o-button'} onClick={()=>{setColort(!colort)}}>Vila House</button>
                <button className={ colorth  ? 'lk-offer-o-button-add':'lk-offer-o-button'} onClick={()=>{setColorth(!colorth)}}>PenThouse</button>


            </div>   
            

        </div>


        <div className='lk-offer-son-t'>
            <div className="lk-offer-childs">
                {OfferData.map((item)=>{
                    return(
                        <div className='lk-offer-child-s' key={item.id}>
                            <p className='lk-offer-child-s-par'>{item.p}</p>
                            <h2 className='lk-offer-child-s-h2'>{item.h2}</h2>

                        </div>
                    )
                })}
            </div>


            <div className="lk-offer-child-img">
                <img className='lk-offer-img'  src={property5}/>
            </div>


            <div className="lk-offer-child">
                <h2 className='lk-offer-child-h2'>Extra Info About Property</h2>
                <p className='lk-offer-child-par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.</p>
                <p className='lk-offer-child-par'>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                <Button something={true}/>
            </div>

        </div>
    </div>
  )
}
