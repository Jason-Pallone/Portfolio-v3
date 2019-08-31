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

        
        <div>
            <a href="https://github.com/Jason-Pallone/Contact-sign-in-form" rel='noopener noreferrer' target="_blank"
            alt='link to contact form demo'  className='contact-form-demo-link'> 
            <strong>View the live demo!</strong>
            </a>
        </div>
        <div>
            <a href="https://contact-form-jp.herokuapp.com/index.html" rel='noopener noreferrer' target="_blank"
            alt='link to contact form github'  className='contact-form-github-link'> 
            <strong>View GitHub repo!</strong>
            </a>
        </div>
    </div>

export default ContactForm