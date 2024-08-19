import React, { useEffect, useState } from 'react'
import featured from './../../assets/img/featured-icon.png'
import space from './../../assets/img/space1.png'
import book from './../../assets/img/book2.png'
import hoom from './../../assets/img/hoom3.png'
import control from './../../assets/img/control4.png'
import './Description.css'
export default function Description() {
   const acordionData=[
      {id:'1',qestion:'Best useful links?',title:"Get",spanS: 'the best villa' ,title2:'  website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the ' ,spanB: 'best free CSS templates', title3:'in the world. Please tell your friends about it.'}
    , {id:'2',qestion:'How does this work?',title:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius assumenda provident nisi quos nemo. Beatae.'}
    , {id:'3',qestion:'Why is Villa agency the best',title:` TemplateMo provides you the best free CSS templates Please tell your friends about it Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius assumenda provident nisi quos nemo. Beatae.`}
    
   ]

    const [openAccordion, setOpenAccordion] = useState(false);
    const [openAccordiont,setOpenAccordiont]=useState(false);
    const [openAccordionth,setOpenAccordionth]=useState(false);
    useEffect (()=>{
        if(openAccordion==true){
          setOpenAccordionth(false)
          setOpenAccordiont(false)
         
        }
      },[openAccordion])
      useEffect (()=>{
        if(openAccordiont==true){
          setOpenAccordionth(false)
          setOpenAccordion(false)
         
        }
      },[openAccordiont])
      useEffect (()=>{
        if(openAccordionth==true){
          setOpenAccordion(false)
          setOpenAccordiont(false)
         
        }
      },[openAccordionth])

    

    const data=[
         {id:1,img:space,title:'250 m2',par:'Total Flat Space'}
        ,{id:2,img:book,title:'Contract',par:'Contract Ready'}
        ,{id:3,img:hoom,title:'Payment',par:'Payment',span:'Process'}
        ,{id:4,img:control,title:'Safety',par:'24/7 Under',span:'Control'}
    ]
  return (
    <div className='lk-descrip'>
        <div className='lk-descrip-part-o'> 
            <div className='lk-descrip-f-img'>
            <img className='lk-descrip-s-img' src={featured}/>
            </div>
           
        </div>
        <div  className='lk-descrip-part-T'>
           <div  className='lk-descrip-title'>
             <h4 className='lk-derscrip-h4'>| FEATURED</h4>
            <h2 className='lk-derscrip-h2'>
            Best Appartment & Sea View
            </h2>
            </div>
            <div className='lk-descrip-acordion'>
              
                    <div className='lk-descrip-acordion-f'>
                          <div className='lk-descrip-view' onClick={() =>{setOpenAccordion(!openAccordion)}} >
                        <h2 className={openAccordion  ?  'lk-descrip-view-h2-color ':'lk-descrip-view-h2'} >Best useful links?</h2>
                          </div>
                    <div className={openAccordion ?  '' :'lk-descrip-open'}>
                        <h2 className={openAccordion  ?  'lk-descrip-open-h2':'lk-descrip-open-h2-hidd'}>Get<span className='span-strong'>,'the best villa'</span>
                        website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the '<span className='span-blow'>'best free CSS templates'</span> in the world. Please tell your friends about it.</h2>
                    </div>
                </div>
                <div className='lk-descrip-acordion-f'>
                        <div className='lk-descrip-view' onClick={() =>{setOpenAccordiont(!openAccordiont)}} >
                          <h2 className={openAccordiont ?'lk-descrip-view-h2-color ':'lk-descrip-view-h2'} >How does this work?</h2>
                        </div>
                    <div className={openAccordiont ?'' :'lk-descrip-open'}>
                        <h2 className={openAccordiont ?  'lk-descrip-open-h2':'lk-descrip-open-h2-hidd'}>Get Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius assumenda provident nisi quos nemo. Beatae.</h2>
                    </div>
                  

               </div>
               <div className='lk-descrip-acordion-f'>
                        <div className='lk-descrip-view' onClick={() =>{setOpenAccordionth(!openAccordionth)}} >
                          <h2 className={openAccordionth  ?  'lk-descrip-view-h2-color ':'lk-descrip-view-h2'} >Why is Villa agency the best?</h2>
                        </div>
                    <div className={openAccordionth ?  '' :'lk-descrip-open'}>
                        <h2 className={openAccordionth  ?  'lk-descrip-open-h2':'lk-descrip-open-h2-hidd'}>Get Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius assumenda provident nisi quos nemo. Beatae.</h2>
                    </div>
                  

               </div>
            </div>
        </div>


        <div className='lk-descrip-part-TH'>
            {data.map((item)=>{
                return(
                    <>
                    <div className='lk-descrip-Box'>
                        <div className='lk-descrip-Box-o'>
                        <img src={item.img} className='lk-descrip-Box-img'/>
                        <span className='lk-descrip-Box-span'>{item.span}</span>
                        </div>
                        <div className='lk-descrip-Box-t'>
                            <h2 className='lk-descrip-Box-h2'>{item.title}</h2>
                            <p className='lk-descrip-Box-p'>{item.par}</p>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>

    </div>
  )
}


