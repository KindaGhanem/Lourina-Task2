import React from 'react'
import pool1 from './../../assets/img/pool1.jpg'
import pool2 from './../../assets/img/pool2.jpg'
import pool3 from './../../assets/img/pool3.jpg'
import room1 from './../../assets/img/romm1.jpg'
import room2 from './../../assets/img/romm2.jpg'
import room3 from './../../assets/img/romm3.jpg'
import './Cards.css'
export default function Cards() {
    const CardData=[
        {id:'1',img:pool1,span1:'Luxury Villa',span2:'$2.264.000',h2:'18 New Street Miami, OR 97219',li:['Bedrooms:','Bathrooms:','Area: ','Floor:','Parking:'],li1:['8','8','545m2','3','6 spots'],button:'Schedule a visit'}
       ,{id:'2',img:pool2,span1:'Luxury Villa',span2:'$1.180.000',h2:'54 Mid Street Florida, OR 27001',li:['Bedrooms:','Bathrooms:','Area: ','Floor:','Parking:'],li1:['6','5','450m2','3','8 spots'],button:'Schedule a visit'}
       ,{id:'3',img:pool3,span1:'Luxury Villa',span2:'$1.460.000',h2:'26 Old Street Miami, OR 38540',li:['Bedrooms:','Bathrooms:','Area: ','Floor:','Parking:'],li1:['5','4','225m2','3','10 spots'],button:'Schedule a visit'}
       ,{id:'4',img:room1,span1:'Apartment',span2:'$584.500',h2:'12 New Street Miami, OR 12650',li:['Bedrooms:','Bathrooms:','Area: ','Floor:','Parking:'],li1:['4','3','125m2','25th','2 cars'],button:'Schedule a visit'}
       ,{id:'5',img:room2,span1:'Penthouse',span2:'$925.600',h2:'34 Beach Street Miami, OR 42680',li:['Bedrooms:','Bathrooms:','Area: ','Floor:','Parking:'],li1:['4','4','180m2','38th','2 cars'],button:'Schedule a visit'}
       ,{id:'6',img:room3,span1:'Modern Condo',span2:'$450.000',h2:'22 New Street Portland, OR 16540',li:['Bedrooms:','Bathrooms:','Area: ','Floor:','Parking:'],li1:['3','2','165m2','26th','3 cars'],button:'Schedule a visit'}
    ]
  return (
    <div className='lk-cards'>
        <div className='lk-card-title'>
            <h3 className='lk-card-title-h3'>| PROPERTIES</h3>
            <h2 className='lk-card-title-h2'>We Provide The Best Property You Like</h2>
        </div>
        <div className='lk-cards-father'>
           {CardData.map((item)=>{
            return(
                <div className='lk-card-son' key={item.id}>
                    <img className='lk-card-img' src={item.img} />
                    <div className='lk-card-part-o'>
                    <div className='lk-card-o-span'> 
                         <span className='lk-card-span-o'>{item.span1}</span>
                         <span className='lk-card-span-t'>{item.span2}</span></div>
                    <h2 className='lk-card-h2'>{item.h2}</h2>
                    <ul className='lk-card-ul'>
                        <li className="lk-card-li">{item.li[0]}<span>{item.li1[0]}</span></li>
                        <li className="lk-card-li">{item.li[1]}<span>{item.li1[1]}</span></li>
                        <li className="lk-card-li">{item.li[2]}<span>{item.li1[2]}</span></li>
                        <li className="lk-card-li">{item.li[3]}<span>{item.li1[3]}</span></li>
                        <li className="lk-card-li">{item.li[4]}<span>{item.li1[4]}</span></li>
                    </ul>
                    </div>
                    <button className='lk-card-button'>{item.button}</button>


                </div>
            )
           })}
        </div>
    </div>
  )
}
