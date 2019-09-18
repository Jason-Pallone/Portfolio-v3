import React from 'react';
import RSVP from './rsvp/RSVP'
import ContactForm from './contact_form/ContactForm';
import Flip from 'react-reveal/Flip'
import PhotoGallery from './photo_gallery/photoGallery';

const Projects =()=>
    <div id='portfolio' className='projects-container'>
        <h1 className='projects-header'>Portfolio</h1>
        <div className='projects-grid-container'>
          <Flip top>  
            <RSVP/>
          </Flip>

          <Flip top>
            <ContactForm />
          </Flip>

          <Flip top>
            <PhotoGallery />
          </Flip>
        </div>
    </div>

export default Projects