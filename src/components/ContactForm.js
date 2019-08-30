import React from 'react'


const ContactForm =()=>
    <div className='contact-form-container'>
        <h1 className='contact-form-h1'>Contact/Sign in form</h1>
        <img src='/CSS-selectors.gif' alt='contact form project' className='contact-form-gif'></img>

        <p className= 'contact-form-description'>
            <img src="http://img.icons8.com/color/48/000000/html-5.png" alt='HTML icon' />
            <img src="http://img.icons8.com/color/48/000000/css3.png" alt='CSS icon' />
            <br></br>
            This is a basic contact/login from. I made this mainly to practice my CSS selectors skills and HTML skills.
        </p>

        
        <div className='github-contact-form'>
            <a href="https://github.com/Jason-Pallone/CSS-selectors-practice" rel='noopener noreferrer' target="_blank"
            alt='link to contact form repo'  className='contact-form-github-link'> 
            <strong>View GitHub repo!</strong>
            </a>
        </div>
    </div>

export default ContactForm