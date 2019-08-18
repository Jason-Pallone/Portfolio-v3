import React from 'react';
import RSVP from './RSVP'

const Projects =(props)=>
    <div id='portfolio' className='projects-container'>
        <h1 className='projects-header'>
            Portfolio
        </h1>

        <RSVP
        showRSVP={props.showRSVP}
        showRSVPInfo={props.showRSVPInfo}
        showRSVPLinks={props.showRSVPLinks} 
        />
    </div>

export default Projects