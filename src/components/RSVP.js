import React from 'react';
import RSVPInfo from './RSVP-Info'

const RSVP =(props)=>

    <div className='RSVP-container'>
        <h1 className={props.showRSVP ? 'rsvp-h1 showText-right' : 'hidden'}>RSVP</h1>
       
        <RSVPInfo 
        showRSVPInfo={props.showRSVPInfo}
        showRSVPLinks={props.showRSVPLinks}
         />
    </div>



export default RSVP