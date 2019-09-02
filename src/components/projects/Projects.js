import React from 'react';
import RSVP from './rsvp/RSVP'
import ContactForm from './contact_form/ContactForm';
import Flip from 'react-reveal/Flip'

const Projects =()=>
    <div id='portfolio' className='projects-container'>
        <h1 className='projects-header'>Portfolio</h1>
        <Flip top>  
          <RSVP/>
        </Flip>
        <Flip top>
          <ContactForm />
        </Flip>
    </div>

export default Projects