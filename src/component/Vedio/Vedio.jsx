import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import vedio from './../../assets/img/video-frame.jpg'
import './Vedio.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
export default function Vedio() {
    const vedioData =[
        {id:'1',h2:'34',h3:' Buildings',Sh3:'Finished Now'}
       ,{id:'2',h2:'12',h3:'Years',Sh3:'Experience'}
       ,{id:'3',h2:'24',h3:'Awwards',Sh3:'Won 2023'}
    ]
  return (
    <div className='lk-vedio'>

    <div className='lk-vedio-father'>
       <div className='lk-vedio-image-father'>
            <h3 className='lk-vidio-h3'>| VIDEO VIEW</h3>
            <h2 className='lk-vidio-h2'>Get Closer View & Different Feeling</h2>
           

        </div>
  
       
       
    </div>
    <div className='lk-adding-new'>
    <div className='lk-vedio-vedio'>
                <div className='lk-video-circle'>
                <div className='lk-vedio-father-icons'>
                   <FontAwesomeIcon  className='lk-vedio-icon' icon={faPlay} />
                </div>
                </div>
            </div>
    </div>
        <div className='lk-vedio-cards'>
            {vedioData.map((item)=>{
                return(
                    <>
                    <div className='lk-vedio-card' key={item.id}>
                        <h2 className='lk-vedio-card-h2'>{item.h2}</h2>
                        <di><h3 className='lk-vedio-card-h3'>{item.h3}</h3>
                        <h3 className='lk-vedio-card-h3'>{item.Sh3}</h3></di>
                    </div>
                    </>
                )
            })}
        </div>
    </div>
  )
}

