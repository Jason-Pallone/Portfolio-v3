import React from 'react';
import RSVP from './RSVP'
import ContactForm from './ContactForm';
import Flip from 'react-reveal/Flip'

const Projects =()=>
    <div id='portfolio' className='projects-container'>
        <h1 className='projects-header'>Portfolio</h1>

        <RSVP/>
        <Flip top>
        <ContactForm />
        </Flip>
    </div>

export default Projects