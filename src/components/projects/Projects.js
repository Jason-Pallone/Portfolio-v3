import React from 'react';
import RSVP from './rsvp/RSVP'
import GiphyAPI from './giphy-api/Giphy-API'
import MarsRoverAPI from './mars_rover/Mars_rover_API';
import Flip from 'react-reveal/Flip'
import PhotoGallery from './photo_gallery/photoGallery';
import Breakout2D from './breakout-2d/Breakout-2d'
import SassPortfolio from './sass_portfolio/Sass-portfolio';
import FullStackConf from './full-stack-conf-bootstrap/full-stack-conf';

const Projects =()=>
    <div id='portfolio' className='projects-container'>
        <h1 className='projects-header'>Portfolio</h1>
        <div className='projects-grid-container'>
          <Flip top>  
            <RSVP />
            <Breakout2D />
            <GiphyAPI />
            <MarsRoverAPI />
            <PhotoGallery />
            <FullStackConf />
            <SassPortfolio />
          </Flip>
        </div>
    </div>

export default Projects