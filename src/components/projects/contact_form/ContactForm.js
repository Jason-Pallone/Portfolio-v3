import React from 'react'
import ContactFormLinks from './Contact_form_links'
import Flip from 'react-reveal/Flip'


const ContactForm =()=>
    <div className='individual-project-container'>
        <h1 className='individual-project-h1'>Contact form</h1>
        <img src='./gifs/contact-form.gif' alt='contact form project' className='gif'></img>
        <p className= 'project-description'>
            <img src="http://img.icons8.com/color/48/000000/html-5.png" alt='HTML icon' />
            <img src="http://img.icons8.com/color/48/000000/css3.png" alt='CSS icon' />
            <br></br>
            This is a basic contact/login from. I made this mainly to practice my CSS selectors skills and HTML skills.
        </p>
        <Flip top>
            <ContactFormLinks />
        </Flip>
    </div>

export default ContactForm