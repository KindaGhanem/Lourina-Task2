import React from 'react'
import phone from './../../assets/img/phone.png'
import email from './../../assets/img/email.png'
import './ContactUs.css' 
export default function ContactUs() {
    const ContactData=[
        {id:'1',src:phone,h2:'010-020-0340',h4:'Phone Number'}
       ,{id:'2',src:email,h2:'info@villa.co',h4:'Business Email'}
    ]
  return (
    <div className='lk-ContactUS'>
        <div className='lk-contact-ground-img'>
           <div className='lk-contact-title'>
           <h3 className='lk-contact-img-h3'>| CONTACT US</h3>
           <h2 className='lk-contact-img-h2'>Get In Touch With Our Agents</h2>
           </div>

        </div>
       <div className='lk-contact-box'>
       <div className='lk-contact-part'>
            <div className='lk-contact-part-one'>
            <iframe className='lk-contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.044484467344!2d-80.10441745413671!3d25.93914628600728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2snl!4v1723985494906!5m2!1sar!2snl"height="450" ></iframe>
                <div className='lk-contactUs-cards'>
                    {ContactData.map((item)=>{
                        return(
                            <div className="lk-contactUs-card-s" key={item.id}>
                        <img className='lk-contact-card-img' src={item.src}/>
                        <div className='lk-contact-info'>
                            <h2 className='lk-contact-info-h4'>{item.h2}</h2>
                            <h4 className='lk-contact-info-h5'>{item.h4}</h4>
                        </div>
                    </div>
                        )
                    })}
                   
                </div>
            </div>
            <form className='lk-contact-form'>
                <label className='lk-contact-form-lable'>Full Name</label>
                <input className='lk-contact-form-input' type='name' placeholder='Your Name..' />
                <label className='lk-contact-form-lable'>Email Address</label>
                <input className='lk-contact-form-input' type='name' placeholder='Your E-mail..' />
                <label className='lk-contact-form-lable'>Subject</label>
                <input className='lk-contact-form-input' type='name' placeholder='Subject...' /> 
                <label className='lk-contact-form-lable'>Message</label>
                <textarea className='lk-contact-textarea' placeholder='Your Massage'></textarea>
                <button className='lk-contact-form-button'>Send Message</button>


            </form>
        </div>
       </div>
    </div>
  )
}
