import React from 'react';
import RSVP from './rsvp/RSVP'
import MarsRoverAPI from './mars_rover/Mars_rover_API';
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
            <MarsRoverAPI />
          </Flip>

          <Flip top>
            <PhotoGallery />
          </Flip>
        </div>
    </div>

export default Projects